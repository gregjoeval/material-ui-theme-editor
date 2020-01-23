import React from 'react';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import SectionPreview from '../component/section-preview';
import DownloadButton from '../component/download-button';
import {AppBar, IconButton, Typography} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../component/Editor';
import darkTheme from '../component/EditorDarkTheme';
import lightTheme from '../component/EditorLightTheme';

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    edition: {
        minWidth: 250,
        maxWidth: 350,
        flex: 2
    },
    preview: {
        flex: 3
    },
    button: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    }
});

class Main extends React.Component {
    state = {
        theme: createMuiTheme(),
        view: 'desktop',
        open: false,
        fileName: 'theme',
        drawerTheme: 'dark'
    };


    componentDidMount() {

    }

    handleChangeTheme = (theme, swapPalette = false) => {
        if (!swapPalette) {
            this.setState({theme: createMuiTheme(theme)});
        } else {
            this.setState({theme: createMuiTheme({palette: {type: theme.palette.type}})});
        }
        setTimeout(() => {
            document.getElementById('root').style.backgroundColor = this.state.theme.palette.background.paper;
            document.body.style.backgroundColor = this.state.theme.palette.background.paper;
        }, 100);
    };

    handleChangeView = (view) => {
        this.setState({view});
    };

    toggleEditor = open => {
        this.setState({open: open});
    };

    handleFileName = fileName => {
        this.setState({fileName: fileName});
    };

    getEditorTheme = () => {
        if (this.state.drawerTheme === 'light') {
            return createMuiTheme(lightTheme);
        }
        return createMuiTheme(darkTheme);
    };

    setEditorTheme = type => {
        this.setState({drawerTheme: type});
    };

    render() {
        const {classes} = this.props;
        const EditorTheme = this.getEditorTheme();
        return (
            <div style={{flexGrow: 1}}>
                <MuiThemeProvider theme={EditorTheme}>
                    <AppBar
                        color='default'
                        style={{zIndex: 1101}}
                    >
                        <Toolbar>
                            <IconButton
                                edge='start'
                                onClick={() => {
                                    this.setState({open: true});
                                }}
                                style={{marginRight: 20}}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                style={{flexGrow: 1, textAlign: 'center'}}
                                variant={'h6'}
                            >
                                Material UI Theme Builder
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        drawerTheme={EditorTheme}
                        drawerThemeType={this.state.drawerTheme}
                        fileName={this.state.fileName}
                        onChange={this.handleChangeTheme}
                        open={this.state.open}
                        setEditorTheme={this.setEditorTheme}
                        setFileName={this.handleFileName}
                        theme={this.state.theme}
                        toggleEditor={this.toggleEditor}
                    />
                </MuiThemeProvider>
                <div
                    className={classes.root}
                    style={{
                        marginTop: 64,
                        width: '96%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: 1500,
                        backgroundColor: this.state.theme.palette.background.paper
                    }}
                >
                    <SectionPreview
                        onChange={this.handleChangeView}
                        rootClassName={classes.preview}
                        theme={this.state.theme}
                        view={this.state.view}
                    />
                    <DownloadButton
                        fileName={this.state.fileName}
                        rootClassName={classes.button}
                        theme={this.state.theme}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Main);
