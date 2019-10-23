import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, ListItem, Select} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GenericCard from "./card/GenericCard";
import {withStyles} from '@material-ui/core/styles';
import UploadCard from "./card/UploadCard";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import OptionsCard from "./card/OptionsCard";
import MenuSection from "./MenuSection";
import rawSection from "./sections"
import CustomCard from "./card/CustomCard";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const style = {
    marginLeft: "5%",
    width: "90%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    padding: 5,
};


const styles = (theme) => ({
    root: {
        overflowY: 'auto',
    },
    card: {
        margin: theme.spacing.unit,
    },
    logo: {
        maxWidth: 150,
    },
});

const sections = rawSection;

class Editor extends React.PureComponent {

    state = {
        JSONDialog: false,
        JSON: null,
    };

    componentDidMount() {
    }

    handleChangeTheme = (path, changes) => {
        let theme = this.props.theme;
        if (/^\d+$/.test(changes)) {
            changes = parseInt(changes)
        } else if (/^-?\d+(?:[.,]\d*?)?$/.test(changes)) {
            changes = parseFloat(changes)
        }
        this.setValue(theme, path.split("."), changes);
        if (path === "palette.type") {
            this.props.onChange(theme, true)
        } else {
            this.props.onChange(theme)
        }
    };

    handleLoadTheme = (theme) => {
        this.props.onChange(theme);
    };

    changeShadow = (location, value) => {
        console.log(location, value)
    };

    setValue = (object, path, value) => {
        let target = path.slice(0, -1).reduce(function (obj, key) {
            return (obj || {})[key];
        }, object);
        target[path[path.length - 1]] = value;
    };

    render() {
        const {classes} = this.props;
        return (
            <Drawer
                keepMounted
                open={this.props.open}
                onClose={() => {
                    this.props.toggleEditor(false)
                }}
                anchor="top"
                SlideProps={{direction: "right"}}
                PaperProps={{
                    style: {
                        width: 300,
                        height: "100%",
                        backgroundColor: this.props.drawerTheme.palette.background.paper
                    }
                }}
            >
                {/*RESET BUTTON*/}
                <Button
                    color={"secondary"}
                    variant="contained"
                    style={{textTransform: "capitalize"}}
                    onClick={() => this.props.onChange({})}
                >Reset</Button>

                {/*JSON FILE READER*/}
                <MenuSection backgroundColor={this.props.drawerTheme.palette.background.default} title={"Load JSON theme"}>
                    <UploadCard
                        rootClassName={classes.card}
                        onChange={this.handleLoadTheme}
                    >
                    </UploadCard>
                </MenuSection>

                {/*GENERIC SECTIONS*/}
                {sections.map((item) => {
                    const {section, label, cards} = item;
                    return (
                        <MenuSection backgroundColor={this.props.drawerTheme.palette.background.default} title={label} key={section}>
                            {cards.map((item, i) => {
                                const {label, fields, name} = item;
                                return (
                                    <GenericCard
                                        key={name}
                                        label={label}
                                        fields={fields}
                                        section={section}
                                        theme={this.props.theme}
                                        onChange={this.handleChangeTheme}
                                        changeShadow={this.changeShadow}
                                        rootClassName={classes.card}
                                    />
                                );
                            })}
                        </MenuSection>
                    );
                })}

                {/*JSON EDITOR*/}
                <MenuSection backgroundColor={this.props.drawerTheme.palette.background.default} title={"Edit JSON"}>
                    <Card className={"card-area"} style={style}>
                        <List dense>
                            <ListItem>
                                <Typography variant={"body1"}>
                                    You can use an inline editor to edit the theme directly. However this is not recommended
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Button onClick={() => this.setState({JSONDialog: true})} variant={"contained"} color={"secondary"}>
                                    Open Editor
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </MenuSection>

                {/*JSON EDITOR DIALOG*/}
                <Dialog open={this.state.JSONDialog} onClose={() => this.setState({JSONDialog: false})}>
                    <DialogTitle>Edit Theme</DialogTitle>
                    <DialogContent>
                        <JSONInput
                            id={'a_unique_id'}
                            placeholder={this.props.theme}
                            theme={"dark_vscode_tribute"}
                            locale={locale}
                            height={'550px'}
                            width={"550px"}
                            onChange={(data) => {
                                this.setState({JSON: data.jsObject})
                            }}
                        />
                    </DialogContent>
                    <DialogActions style={{display: "flex", justifyContent: "space-between", width: "-webkit-fill-available", flexDirection: "row"}}>
                        <Button variant={"contained"} onClick={() => {
                            this.setState({JSONDialog: false})
                        }} color={"default"}>Close</Button>
                        <Button variant={"contained"} color={"secondary"} onClick={() => {
                            this.handleLoadTheme(this.state.JSON);
                            this.setState({JSONDialog: false})
                        }}>Save To Theme</Button>
                    </DialogActions>
                </Dialog>

                {/*OPTIONS*/}
                <MenuSection backgroundColor={this.props.drawerTheme.palette.background.default} title={"Options"}>
                    <OptionsCard setFileName={this.props.setFileName} fileName={this.props.fileName}/>

                    {/*EDITOR THEME*/}
                    <CustomCard label={"Editor Options"}>
                        <List dense>
                            <ListItem>
                                <FormControl style={{width: "90%", marginLeft: "5%"}}>
                                    <InputLabel htmlFor="EditorThemeSEL">Editor Theme</InputLabel>
                                    <Select
                                        autoWidth={true}
                                        value={this.props.drawerThemeType}
                                        onChange={(event)=>{this.props.setEditorTheme(event.target.value)}}
                                        id={"EditorThemeSEL"}>
                                        <MenuItem value={"dark"}>Dark</MenuItem>
                                        <MenuItem value={"light"}>Light</MenuItem>
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
