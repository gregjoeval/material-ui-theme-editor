import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import SelectItem from "./SelectItem";
import ColorEditionListItem from "./color-edition-list-item";
import TextItem from "./TextItem";
import {Divider, ListItem} from "@material-ui/core";


Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    let a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        let k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    if (/^\d+\.\d+$/.test(o.toString())) {
        if (o.toString().includes(".")) {
            return parseFloat(o);
        } else {
            return parseInt(o);
        }
    }

    return o;
};

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,

    },
});

class GenericCard extends React.PureComponent {
    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    render() {
        const {classes, rootClassName, label, fields} = this.props;
        return (
            <Card className={"card-area"} style={{height: "fit-content", display: "inline-table"}}>
                <CardContent style={{paddingBottom: 6, paddingTop: 10}}>
                    <Typography
                        variant={"subheading"}
                        color="textSecondary"
                    >
                        {label}
                    </Typography>
                </CardContent>
                <Divider/>
                <List dense>
                    {fields.map(item => {
                        if (item.type === "select") {
                            const {name, label, options, path} = item;
                            return <SelectItem
                                name={name}
                                label={label}
                                options={options}
                                onChange={this.handleChange}
                                value={Object.byString(this.props.theme, path)}
                                key={path}
                                path={path}
                            />
                        } else if (item.type === "color") {
                            const {name, label, path} = item;
                            return (
                                <ColorEditionListItem
                                    label={label}
                                    name={name}
                                    onChange={this.handleChange}
                                    value={Object.byString(this.props.theme, path)}
                                    key={path}
                                    path={path}
                                />
                            );
                        } else if (item.type === "text") {
                            const {label, name, path} = item;
                            return (
                                <TextItem
                                    label={label}
                                    name={name}
                                    onChange={this.handleChange}
                                    value={Object.byString(this.props.theme, path)}
                                    key={path}
                                    path={path}
                                />
                            );
                        } else if (item.type === "displayMessage") {
                            const {variant, color, message} = item;
                            return (
                                <ListItem
                                    key={message.replace(" ", "")}
                                    style={{paddingTop: 0, paddingBottom: 0}}
                                >
                                    <Typography variant={variant} color={color}>
                                        {message}
                                    </Typography>
                                </ListItem>
                            );
                        }
                    })}
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(GenericCard);
