import React from 'react';
import {createMuiTheme, withStyles} from '@material-ui/core/styles';
import SectionEdition from '../component/section-edition';
import SectionPreview from '../component/section-preview';
import DownloadButton from '../component/download-button';
import GithubButton from '../component/github-button';
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

const defaultTheme = {
    shape: {borderRadius: 0},
    palette: {type: "dark"}
};

class Editor extends React.Component {
    state = {
        theme: createMuiTheme(),
        view: 'desktop',
        open : false,
    };

    toggleType = (theme) => {
        if (theme.palette.type !== this.state.theme.palette.type) {
            this.setState({theme: createMuiTheme({palette: {type: theme.palette.type}})});
            return true;
        }
        return false;
    };

    componentDidMount() {
        console.log(this.state.theme)
    }

    handleChangeTheme = (theme) => {
        if (!this.toggleType(theme)) {
            this.setState({theme});
        }
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
                <AppBar>
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
                            Material UI Builder
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    onChange={this.handleChangeTheme}
                    theme={this.state.theme}
                    toggleEditor={this.toggleEditor}
                    open={this.state.open}
                />
                <div className={classes.root} style={{marginTop : 20, width : "96%", marginLeft : "2%"}}>
{/*                    <SectionEdition
                        rootClassName={classes.edition}
                        onChange={this.handleChangeTheme}
                        theme={this.state.theme}
                    />*/}
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

export default withStyles(styles)(Editor);
