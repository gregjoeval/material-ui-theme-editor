import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import SelectItem from './SelectItem';
import ColorEditionListItem from './color-edition-list-item';
import TextItem from './TextItem';
import {Divider, ListItem} from '@material-ui/core';
import ShadowItem from './ShadowItem';


Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    if ((/^\d+\.\d+$/).test(o.toString())) {
        if (o.toString().includes('.')) {
            return parseFloat(o);
        }
        return parseInt(o);

    }

    return o;
};


const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit
    },
    title: {
        fontSize: 14

    }
});

class GenericCard extends React.PureComponent {
    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    shadowValue = (location) => this.props.theme.shadows[location];

    render() {
        const {label, fields} = this.props;
        return (
            <Card
                className={'card-area'}
                style={{height: 'fit-content', display: 'inline-table'}}
            >
                <CardContent style={{paddingBottom: 6, paddingTop: 10}}>
                    <Typography
                        color='textSecondary'
                        variant={'subheading'}
                    >
                        {label}
                    </Typography>
                </CardContent>
                <Divider/>
                <List dense={true}>
                    {fields.map(item => {
                        if (item.type === 'select') {
                            const {name, label, options, path} = item;
                            return (
                                <SelectItem
                                    key={path}
                                    label={label}
                                    name={name}
                                    onChange={this.handleChange}
                                    options={options}
                                    path={path}
                                    value={Object.byString(this.props.theme, path)}
                                />
                            );
                        } else if (item.type === 'color') {
                            const {name, label, path} = item;
                            return (
                                <ColorEditionListItem
                                    key={path}
                                    label={label}
                                    name={name}
                                    onChange={this.handleChange}
                                    path={path}
                                    value={Object.byString(this.props.theme, path)}
                                />
                            );
                        } else if (item.type === 'text') {
                            const {label, name, path} = item;
                            return (
                                <TextItem
                                    key={path}
                                    label={label}
                                    name={name}
                                    onChange={this.handleChange}
                                    path={path}
                                    value={Object.byString(this.props.theme, path)}
                                />
                            );
                        } else if (item.type === 'displayMessage') {
                            const {variant, color, message} = item;
                            return (
                                <ListItem
                                    key={message.replace(' ', '')}
                                    style={{paddingTop: 0, paddingBottom: 0}}
                                >
                                    <Typography
                                        color={color}
                                        variant={variant}
                                    >
                                        {message}
                                    </Typography>
                                </ListItem>
                            );
                        } else if (item.type === 'shadow') {
                            const {location} = item;
                            const key = `shadow_${ location.toString()}`;
                            return (
                                <ShadowItem
                                    key={key}
                                    location={location}
                                    onChange={this.props.changeShadow}
                                    value={this.shadowValue(location)}
                                />
                            );
                        } return null;
                    })}
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(GenericCard);
