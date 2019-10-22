import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import {Fab} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit,
        display: "flex",
        flexDirection: "column"
    },
    row: {
        padding: theme.spacing.unit,
        display: "flex",
        flexDirection: "row",
        margin: "10px auto",
    },
    button: {
        margin: theme.spacing.unit,
    },
    wrap: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
});

class PreviewButton extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.wrap}>
                    <div className={classes.root}>
                        <Button className={classes.button}>Default</Button>
                        <Button className={classes.button} variant="outlined">Default</Button>
                        <Button className={classes.button} variant="contained">Default</Button>
                    </div>
                    <div className={classes.root}>
                        <Button color="primary" className={classes.button}>Primary</Button>
                        <Button color="primary" className={classes.button} variant="outlined">Primary</Button>
                        <Button color="primary" className={classes.button} variant="contained">Primary</Button>
                    </div>
                    <div className={classes.root}>
                        <Button color="secondary" className={classes.button}>Secondary</Button>
                        <Button color="secondary" className={classes.button} variant="outlined">Secondary</Button>
                        <Button color="secondary" className={classes.button} variant="contained">Secondary</Button>
                    </div>
                    <div className={classes.root}>
                        <Button disabled className={classes.button}>Disabled</Button>
                        <Button disabled className={classes.button} variant="outlined">Disabled</Button>
                        <Button disabled className={classes.button} variant="contained">Disabled</Button>
                    </div>
                    <div className={classes.root}>
                        <Button href="#text-buttons" className={classes.button}>Link</Button>
                        <Button href="#text-buttons" className={classes.button} variant="outlined">Link</Button>
                        <Button href="#text-buttons" className={classes.button} variant="contained">Link</Button>
                    </div>
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div className={classes.row}>
                        <Fab color="primary" className={classes.button}>
                            <AddIcon/>
                        </Fab>
                        <Fab color="secondary" className={classes.button}>
                            <DeleteIcon/>
                        </Fab>
                        <Fab disabled className={classes.button}>
                            <NavigationIcon/>
                        </Fab>
                        <Fab href="#text-buttons" className={classes.button}>
                            Link
                        </Fab>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PreviewButton);
