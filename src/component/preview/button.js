import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Fab} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        padding: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        margin: '10px auto'
    },
    button: {
        margin: theme.spacing.unit
    },
    wrap: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});

class PreviewButton extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.wrap}>
                    <div className={classes.root}>
                        <Button className={classes.button}>
Default
                        </Button>
                        <Button
                            className={classes.button}
                            variant='outlined'
                        >
Default
                        </Button>
                        <Button
                            className={classes.button}
                            variant='contained'
                        >
Default
                        </Button>
                    </div>
                    <div className={classes.root}>
                        <Button
                            className={classes.button}
                            color='primary'
                        >
Primary
                        </Button>
                        <Button
                            className={classes.button}
                            color='primary'
                            variant='outlined'
                        >
Primary
                        </Button>
                        <Button
                            className={classes.button}
                            color='primary'
                            variant='contained'
                        >
Primary
                        </Button>
                    </div>
                    <div className={classes.root}>
                        <Button
                            className={classes.button}
                            color='secondary'
                        >
Secondary
                        </Button>
                        <Button
                            className={classes.button}
                            color='secondary'
                            variant='outlined'
                        >
Secondary
                        </Button>
                        <Button
                            className={classes.button}
                            color='secondary'
                            variant='contained'
                        >
Secondary
                        </Button>
                    </div>
                    <div className={classes.root}>
                        <Button
                            className={classes.button}
                            disabled={true}
                        >
Disabled
                        </Button>
                        <Button
                            className={classes.button}
                            disabled={true}
                            variant='outlined'
                        >
Disabled
                        </Button>
                        <Button
                            className={classes.button}
                            disabled={true}
                            variant='contained'
                        >
Disabled
                        </Button>
                    </div>
                    <div className={classes.root}>
                        <Button
                            className={classes.button}
                            href='#text-buttons'
                        >
Link
                        </Button>
                        <Button
                            className={classes.button}
                            href='#text-buttons'
                            variant='outlined'
                        >
Link
                        </Button>
                        <Button
                            className={classes.button}
                            href='#text-buttons'
                            variant='contained'
                        >
Link
                        </Button>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <div className={classes.row}>
                        <Fab
                            className={classes.button}
                            color='primary'
                        >
                            <AddIcon/>
                        </Fab>
                        <Fab
                            className={classes.button}
                            color='secondary'
                        >
                            <DeleteIcon/>
                        </Fab>
                        <Fab
                            className={classes.button}
                            disabled={true}
                        >
                            <NavigationIcon/>
                        </Fab>
                        <Fab
                            className={classes.button}
                            href='#text-buttons'
                        >
                            Link
                        </Fab>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PreviewButton);
