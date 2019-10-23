import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ColorBubble from "./color-bubble";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class TextItem extends React.PureComponent {
    handleChange = (location, value) => {
        let string = this.props.value.split(",");
        string[location] = value;
        this.props.onChange(location, string.join(","));
    };

    getValues = (string = null) => {
        let {value} = this.props;
        let items = value.split("),");
        if (string !== null) {
            items = string.split("),");
        }
        let values = [];
        if (items.length === 3) {
            items[2] = items[2].replace(")", "");
            for (let i = 0; i < 3; i++) {
                let value = {color: []};
                value.size = items[i].split(" rgba(")[0].split(" ");
                let colors = items[i].split(" rgba(")[1].split(",");
                for (let j = 0; j < colors.length; j++) {
                    value.color.push(parseFloat(colors[j]))
                }
                values.push(value);
            }
        }
        return values;
    };

    makeValues = (location, type, index, value) => {
        let values = this.getValues();
        values[location][type][index] = value;
    };

    makeString = (values) => {

        let string = "";
        const SPACE = " ";
        const RGBA_START = " rgba(";
        const COMMA = ",";
        const RGBA_END = ")";
        if (values.length === 3) {
            for (let i = 0; i < 3; i++) {
                string += values[i].size[0].replace(" ", "") + SPACE +
                    values[i].size[1].replace(" ", "") + SPACE +
                    values[i].size[2].replace(" ", "") + SPACE +
                    values[i].size[3].replace(" ", "") + RGBA_START +
                    values[i].color[0] + COMMA +
                    values[i].color[1] + COMMA +
                    values[i].color[2] + COMMA +
                    values[i].color[3] + RGBA_END;
                if (i < 2) {
                    string += COMMA;
                }
            }
        } else {
            string = values.toString()
        }
        return string;
    };

    render() {
        this.makeString(this.getValues());
        const values = this.getValues();
        return (
            <React.Fragment>
                {values.map((item, i) => {
                    const key = "section_" + i.toString();
                    const {size, color} = item;
                    const rgba = "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + color[3] + ")";
                    return (
                        <ListItem
                            key={key}
                        >
                            <div style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <TextField InputProps={{className: "shadow-size"}} value={size[0]}
                                           style={{borderRight: "1px solid grey"}}/>
                                <TextField InputProps={{className: "shadow-size"}} value={size[1]}
                                           style={{borderRight: "1px solid grey"}}/>
                                <TextField InputProps={{className: "shadow-size"}} value={size[2]}
                                           style={{borderRight: "1px solid grey"}}/>
                                <TextField InputProps={{className: "shadow-size"}} value={size[3]}
                                           style={{marginRight: 6}}/>
                                <ColorBubble
                                    style={{
                                        height: 25,
                                        width: 25,
                                    }}
                                    color={rgba}
                                    size={10}
                                />
                            </div>
                        </ListItem>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TextItem);
