import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FormControl, FormControlLabel, Radio, RadioGroup, Typography} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {Slider} from '@material-ui/lab';
import Switch from '@material-ui/core/Switch';

const styles = (theme) => ({
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    root: {
        padding: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 261,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing.unit
    }
});

class PreviewInputs extends React.PureComponent {

    valuetext = (value) => `${value}°C`;

    state = {
        checkedP: true,
        checkedS: true
    };

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.wrapper}>
                    <div className={classes.root}>
                        <TextField
                            className={classes.button}
                            label='Default Text Field'
                            margin='none'
                        />
                        <TextField
                            className={classes.button}
                            label='Outlined Text Field'
                            margin='none'
                            variant='outlined'
                        />
                        <TextField
                            className={classes.button}
                            label='Filled Text Field'
                            margin='none'
                            variant='filled'
                        />
                    </div>
                    <div className={classes.root}>
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel
                                    control={<Radio color={'primary'}/>}
                                    label={'Primary Radio'}
                                    labelPlacement='start'
                                    value={'Primary'}
                                />
                                <FormControlLabel
                                    control={<Radio color={'secondary'}/>}
                                    label={'Secondary  Radio'}
                                    labelPlacement='start'
                                    value={'Secondary'}
                                />
                            </RadioGroup>
                            <FormControlLabel
                                control={(
                                    <Checkbox
                                        color={'primary'}
                                        value='checkedP'
                                    />
                                )}
                                label='Primary Checkbox'
                                labelPlacement='start'
                            />
                            <FormControlLabel
                                control={(
                                    <Checkbox
                                        color={'secondary'}
                                        value='checkedS'
                                    />
                                )}
                                label='Secondary Checkbox'
                                labelPlacement='start'
                            />
                        </FormControl>
                    </div>
                    <div className={classes.root}>
                        <div>
                            <Typography
                                gutterBottom={true}
                                id='discrete-slider-always'
                            >
                                Slider
                            </Typography>
                            <Slider
                                aria-labelledby='discrete-slider-always'
                                defaultValue={50}
                                max={100}
                                min={0}
                                step={1}
                                style={{width: 150}}
                                value={50}
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={(
                                    <Switch
                                        checked={this.state.checkedP}
                                        color='primary'
                                        onChange={(event) => {
                                            this.setState({checkedP: event.target.checked});
                                        }}
                                        value='checkedP'
                                    />
                                )}
                                label='Primary'
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={(
                                    <Switch
                                        checked={this.state.checkedS}
                                        color='secondary'
                                        onChange={(event) => {
                                            this.setState({checkedS: event.target.checked});
                                        }}
                                        value='checkedS'
                                    />
                                )}
                                label='Secondary'
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PreviewInputs);
