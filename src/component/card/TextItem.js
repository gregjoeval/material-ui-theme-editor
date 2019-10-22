import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class TextItem extends React.PureComponent {
    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    render() {
        const {value, label, path, name} = this.props;
        return (
            <ListItem>
                <TextField
                    label={label}
                    key={path}
                    id={path}
                    name={name}
                    value={value}
                    onChange={(event)=>this.handleChange(path, event.target.value)}
                />
            </ListItem>
        );
    }
}

export default withStyles(styles)(TextItem);
