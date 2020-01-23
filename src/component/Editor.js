import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, ListItem, Select} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GenericCard from './card/GenericCard';
import {withStyles} from '@material-ui/core/styles';
import UploadCard from './card/UploadCard';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import OptionsCard from './card/OptionsCard';
import MenuSection from './MenuSection';
import rawSection from './sections';
import CustomCard from './card/CustomCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
    marginLeft: '5%',
    width: '90%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    padding: 5
};


const styles = (theme) => ({
    root: {
        overflowY: 'auto'
    },
    card: {
        margin: theme.spacing.unit
    },
    logo: {
        maxWidth: 150
    }
});

const sections = rawSection;

class Editor extends React.PureComponent {

    state = {
        JSONDialog: false,
        JSON: null
    };

    componentDidMount() {
    }

    handleChangeTheme = (path, changes) => {
        const theme = this.props.theme;
        if ((/^\d+$/).test(changes)) {
            changes = parseInt(changes);
        } else if ((/^-?\d+(?:[.,]\d*?)?$/).test(changes)) {
            changes = parseFloat(changes);
        }
        this.setValue(theme, path.split('.'), changes);
        if (path === 'palette.type') {
            this.props.onChange(theme, true);
        } else {
            this.props.onChange(theme);
        }
    };

    handleLoadTheme = (theme) => {
        this.props.onChange(theme);
    };

    changeShadow = (location, value) => {
        const theme = this.props.theme;
        theme.shadows[location] = value;
        this.handleLoadTheme(theme);
    };

    setValue = (object, path, value) => {
        const target = path.slice(0, -1).reduce((obj, key) => (obj || {})[key], object);
        target[path[path.length - 1]] = value;
    };

    render() {
        const {classes} = this.props;
        return (
            <Drawer
                anchor='top'
                keepMounted={true}
                onClose={() => {
                    this.props.toggleEditor(false);
                }}
                open={this.props.open}
                PaperProps={{
                    style: {
                        width: 300,
                        height: '100%',
                        backgroundColor: this.props.drawerTheme.palette.background.paper
                    }
                }}
                SlideProps={{direction: 'right'}}
            >
                {/* RESET BUTTON*/}
                <Button
                    color={'secondary'}
                    onClick={() => this.props.onChange({})}
                    style={{textTransform: 'capitalize'}}
                    variant='contained'
                >
Reset
                </Button>

                {/* JSON FILE READER*/}
                <MenuSection
                    backgroundColor={this.props.drawerTheme.palette.background.default}
                    title={'Load JSON theme'}
                >
                    <UploadCard
                        onChange={this.handleLoadTheme}
                        rootClassName={classes.card}
                    />
                </MenuSection>

                {/* GENERIC SECTIONS*/}
                {sections.map((item) => {
                    const {section, label, cards} = item;
                    return (
                        <MenuSection
                            backgroundColor={this.props.drawerTheme.palette.background.default}
                            key={section}
                            title={label}
                        >
                            {cards.map((item) => {
                                const {label, fields, name} = item;
                                return (
                                    <GenericCard
                                        changeShadow={this.changeShadow}
                                        fields={fields}
                                        key={name + label.replace(' ', '')}
                                        label={label}
                                        onChange={this.handleChangeTheme}
                                        rootClassName={classes.card}
                                        section={section}
                                        theme={this.props.theme}
                                    />
                                );
                            })}
                        </MenuSection>
                    );
                })}

                {/* JSON EDITOR*/}
                <MenuSection
                    backgroundColor={this.props.drawerTheme.palette.background.default}
                    title={'Edit JSON'}
                >
                    <Card
                        className={'card-area'}
                        style={style}
                    >
                        <List dense={true}>
                            <ListItem>
                                <Typography variant={'body1'}>
                                    You can use an inline editor to edit the theme directly. However this is not
                                    recommended
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Button
                                    color={'secondary'}
                                    onClick={() => this.setState({JSONDialog: true})}
                                    variant={'contained'}
                                >
                                    Open Editor
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </MenuSection>

                {/* JSON EDITOR DIALOG*/}
                <Dialog
                    onClose={() => this.setState({JSONDialog: false})}
                    open={this.state.JSONDialog}
                >
                    <DialogTitle>
Edit Theme
                    </DialogTitle>
                    <DialogContent>
                        <JSONInput
                            height={'550px'}
                            id={'a_unique_id'}
                            locale={locale}
                            onChange={(data) => {
                                this.setState({JSON: data.jsObject});
                            }}
                            placeholder={this.props.theme}
                            theme={'dark_vscode_tribute'}
                            width={'550px'}
                        />
                    </DialogContent>
                    <DialogActions
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '-webkit-fill-available',
                            flexDirection: 'row'
                        }}
                    >
                        <Button
                            color={'default'}
                            onClick={() => {
                                this.setState({JSONDialog: false});
                            }}
                            variant={'contained'}
                        >
Close
                        </Button>
                        <Button
                            color={'secondary'}
                            onClick={() => {
                                this.handleLoadTheme(this.state.JSON);
                                this.setState({JSONDialog: false});
                            }}
                            variant={'contained'}
                        >
Save To Theme
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* OPTIONS*/}
                <MenuSection
                    backgroundColor={this.props.drawerTheme.palette.background.default}
                    title={'Options'}
                >
                    <OptionsCard
                        fileName={this.props.fileName}
                        setFileName={this.props.setFileName}
                    />

                    {/* EDITOR THEME*/}
                    <CustomCard label={'Editor Options'}>
                        <List dense={true}>
                            <ListItem>
                                <FormControl style={{width: '90%', marginLeft: '5%'}}>
                                    <InputLabel htmlFor='EditorThemeSEL'>
Editor Theme
                                    </InputLabel>
                                    <Select
                                        autoWidth={true}
                                        id={'EditorThemeSEL'}
                                        onChange={(event) => {
                                            this.props.setEditorTheme(event.target.value);
                                        }}
                                        value={this.props.drawerThemeType}
                                    >
                                        <MenuItem value={'dark'}>
Dark
                                        </MenuItem>
                                        <MenuItem value={'light'}>
Light
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                        </List>
                    </CustomCard>
                </MenuSection>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Editor);
