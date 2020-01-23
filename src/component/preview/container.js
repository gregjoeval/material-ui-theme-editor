import React from 'react';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PreviewAppBar from './app-bar';
import PreviewBadge from './badge';
import PreviewBottomNavigation from './bottom-navigation';
import PreviewButton from './button';
import PreviewInputs from './inputs';
import {Divider} from '@material-ui/core';
import Card from './card';
import PreviewElevation from './elevation';
import PreviewTypography from './typography';


const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    }
});

class PreviewContainer extends React.PureComponent {
    render() {
        const {classes, className} = this.props;
        return (
            <Paper className={clsx(classes.root, className)}>
                <PreviewAppBar/>
                <Divider/>
                <PreviewBadge/>
                <Divider/>
                <PreviewBottomNavigation/>
                <Divider/>
                <PreviewButton/>
                <Divider/>
                <PreviewInputs/>
                <Divider/>
                <Card/>
                <Divider/>
                <PreviewElevation/>
                <PreviewTypography/>
            </Paper>
        );
    }
}

export default withStyles(styles)(PreviewContainer);
