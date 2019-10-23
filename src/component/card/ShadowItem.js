import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Textarea from "@material-ui/core/InputBase/Textarea";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class TextItem extends React.PureComponent {
    handleChange = (location , value) => {
        let string = this.props.value.split(",");
        string[location] = value;
        this.props.onChange(location, string.join(","));
    };



    render() {
        const {value} = this.props;
        return (
            <React.Fragment>
                <ListItem>
                    <Textarea

                    rows={5}
                    >{value}</Textarea>
                </ListItem>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TextItem);
