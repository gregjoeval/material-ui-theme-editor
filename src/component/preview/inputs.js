import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme) => ({
    wrapper : {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent : "",
    },
    root: {
        padding: theme.spacing.unit,
        display : "flex",
        flexDirection : "column",
        width : "30%",
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class PreviewInputs extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.wrapper}>
                    <div className={classes.root}>
                        <TextField
                            label="Default Text Field"
                            margin="normal"
                        />
                        <TextField
                            label="Outlined Text Field"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Outlined Text Field"
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div className={classes.root}>
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel
                                    value={"Primary"}
                                    label={"Primary Radio"}
                                    labelPlacement="start"
                                    control={<Radio color={"primary"}/>}
                                />
                                <FormControlLabel
                                    value={"Secondary"}
                                    label={"Secondary  Radio"}
                                    labelPlacement="start"
                                    control={<Radio color={"secondary"}/>}
                                />
                            </RadioGroup>
                            <FormControlLabel labelPlacement="start" control={<Checkbox value="checkedP" color={"primary"}/>} label="Primary Checkbox" />
                            <FormControlLabel labelPlacement="start" control={<Checkbox value="checkedS" color={"secondary"}/>} label="Secondary Checkbox" />
                        </FormControl>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PreviewInputs);
