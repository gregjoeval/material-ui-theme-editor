import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    },
    item: {
        marginBottom: theme.spacing.unit
    },
    max: {
        flexGrow: 1
    }
});

class PreviewAppBar extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.max}>
                    <AppBar
                        className={classes.item}
                        color='default'
                        position='relative'
                    >
                        <Toolbar>
                            <Typography
                                color='inherit'
                                variant={'h6'}
                            >
                                Default App Bar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.max}>
                    <AppBar
                        className={classes.item}
                        color='primary'
                        position='relative'
                    >
                        <Toolbar>
                            <Typography
                                color='inherit'
                                variant={'h6'}
                            >
                                Primary App Bar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.max}>
                    <AppBar
                        className={classes.item}
                        color='secondary'
                        position='relative'
                    >
                        <Toolbar>
                            <Typography
                                color='inherit'
                                variant={'h6'}
                            >
                                Secondary App Bar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PreviewAppBar);
