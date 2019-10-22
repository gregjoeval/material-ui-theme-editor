import React from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import SectionPreview from '../component/section-preview';
import DownloadButton from '../component/download-button';
import {AppBar, IconButton, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "../component/Editor";
const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    edition: {
        minWidth: 250,
        maxWidth: 350,
        flex: 2,
    },
    preview: {
        flex: 3,
    },
    button: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class Main extends React.Component {
    state = {
        theme: createMuiTheme(),
        view: 'desktop',
        open : false,
    };


    componentDidMount() {

    }

    handleChangeTheme = (theme, swapPalette = false) => {
        if (!swapPalette) {
            this.setState({theme : createMuiTheme(theme)});
        }
        else {
            this.setState({theme: createMuiTheme({palette: {type: theme.palette.type}})});
        }
        setTimeout(()=>{
            document.getElementById("root").style.backgroundColor = this.state.theme.palette.background.paper;
            document.body.style.backgroundColor = this.state.theme.palette.background.paper;
        }, 100)
    };

    handleChangeView = (view) => {
        this.setState({view});
    };

    toggleEditor = open => {
        this.setState({open : open})
    };


    render() {
        const {classes} = this.props;
        return (
            <div style={{flexGrow : 1}}>
                <AppBar style={{zIndex : 1101}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            style={{marginRight : 20, color : "white"}}
                            onClick={()=>{this.setState({open : true})}}
                        >
                            <MenuIcon
                            />
                        </IconButton>
                        <Typography variant={"h6"} style={{flexGrow : 1, color : "white", textAlign : "center"}}>
                            Material UI Theme Builder
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    onChange={this.handleChangeTheme}
                    theme={this.state.theme}
                    toggleEditor={this.toggleEditor}
                    open={this.state.open}
                />
                <div className={classes.root} style={{marginTop : 64, width : "96%", marginLeft : "2%", backgroundColor : this.state.theme.palette.background.paper}}>
                    <SectionPreview
                        rootClassName={classes.preview}
                        onChange={this.handleChangeView}
                        theme={this.state.theme}
                        view={this.state.view}
                    />
                    <DownloadButton
                        rootClassName={classes.button}
                        theme={this.state.theme}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Main);
