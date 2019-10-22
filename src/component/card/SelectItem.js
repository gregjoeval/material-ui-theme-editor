import React from 'react';

import {withStyles} from '@material-ui/core/styles';

import {Select} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class SelectItem extends React.PureComponent {
    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    render() {
        const {classes, value, label, options} = this.props;
        return (
            <ListItem>
                <FormControl className={classes.formControl} style={{width: "90%", marginLeft: "5%"}}>
                    <InputLabel htmlFor="palette-dark">{label}</InputLabel>
                    <Select
                        autoWidth={true}
                        value={value}
                        onChange={event => this.handleChange(this.props.path, event.target.value)}
                    >
                        {options.map((item) => (
                            <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ListItem>
        );
    }
}

export default withStyles(styles)(SelectItem);
