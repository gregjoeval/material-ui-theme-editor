import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';

const elevations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'

    },
    paper: {
        width: 130,
        height: 60,
        margin: '30px',
        display: 'flex'
    },
    type: {
        margin: 'auto'
    },
    item: {
        maxWidth: 500
    }
});

class PreviewElevation extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                {elevations.map(elevation => {
                    const key = `elevation_${ elevation.toString()}`;
                    return (
                        <Paper
                            className={classes.paper}
                            elevation={elevation}
                            key={key}
                        >
                            <Typography
                                className={classes.type}
                                variant={'subheading'}
                            >
Elevation
                                {' '}
                                {elevation}
                            </Typography>
                        </Paper>
                    );
                })}
            </div>
        );
    }
}

export default withStyles(styles)(PreviewElevation);
