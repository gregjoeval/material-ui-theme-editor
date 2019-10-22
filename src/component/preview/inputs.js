import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import {Slider} from "@material-ui/lab";
import Switch from "@material-ui/core/Switch";

const styles = (theme) => ({
    wrapper : {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent : "space-around",
        flexWrap : "wrap",
    },
    root: {
        padding: theme.spacing.unit,
        display : "flex",
        flexDirection : "column",
        minWidth : 261,
        justifyContent: "center",
        alignItems : "center"
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class PreviewInputs extends React.PureComponent {

    valuetext = (value) => {
        return `${value}°C`;
    };

    state = {
        checkedP : true,
        checkedS : true,
    };
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.wrapper}>
                    <div className={classes.root}>
                        <TextField
                            label="Default Text Field"
                            margin="none"
                            className={classes.button}
                        />
                        <TextField
                            label="Outlined Text Field"
                            margin="none"
                            variant="outlined"
                            className={classes.button}
                        />
                        <TextField
                            label="Filled Text Field"
                            margin="none"
                            variant="filled"
                            className={classes.button}
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
                    <div className={classes.root}>
                        <div>
                            <Typography id="discrete-slider-always" gutterBottom>
                                Slider
                            </Typography>
                            <Slider
                                defaultValue={50}
                                value={50}
                                aria-labelledby="discrete-slider-always"
                                step={1}
                                min={0}
                                max={100}
                                style={{width : 150}}
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.checkedP}
                                        onChange={(event)=>{this.setState({checkedP : event.target.checked})}}
                                        value="checkedP"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.checkedS}
                                        onChange={(event)=>{this.setState({checkedS : event.target.checked})}}
                                        value="checkedS"
                                        color="secondary"
                                    />
                                }
                                label="Secondary"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PreviewInputs);
