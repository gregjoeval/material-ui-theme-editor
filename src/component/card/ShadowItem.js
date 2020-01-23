import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ColorBubble from './color-bubble';
import InputAdornment from '@material-ui/core/InputAdornment';
import Popover from '@material-ui/core/Popover';
import {SketchPicker} from 'react-color';
import ColorEditionListItem from './color-edition-list-item';

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit
    },
    title: {
        fontSize: 14
    }
});

class TextItem extends React.PureComponent {
    handleChangeColor = (location, color) => {

        /* this.props.onChange(this.props.path, rgba);*/

        const string = this.makeValues(location, 'color', null, color);
        this.props.onChange(this.props.location, string);
    };

    handleChangeSize = (location, type, index = null, value) => {
        const string = this.makeValues(location, type, index, value);
        this.props.onChange(this.props.location, string);
    };


    getValues = (string = null) => {
        const {value} = this.props;
        let items = value.split('),');
        if (string !== null) {
            items = string.split('),');
        }
        const values = [];
        if (items.length === 3) {
            for (let i = 0; i < 3; i++) {
                const value = {color: ''};
                value.color = `rgba(${ items[i].split(' rgba(')[1]}`;
                value.size = items[i].split(' rgba(')[0].split(' ');
                for (let k = 0; k < value.size.length; k++) {
                    value.size[k] = value.size[k].replace('px', '');
                }
                values.push(value);
            }
        }
        return values;
    };

    makeValues = (location, type, index = null, value) => {
        const values = this.getValues();
        if (type === 'color') {
            values[location][type] = value;
        } else {
            values[location][type][index] = value;
        }

        return this.makeString(values);
    };

    makeString = (values) => {
        let string = '';
        const SPACE = ' ';
        const COMMA = ',';
        const PX = 'px';
        if (values.length === 3) {
            for (let i = 0; i < 3; i++) {
                if (values[i].color.substring(values[i].color.length - 1, values[i].color.length) !== ')') {
                    values[i].color += ')';
                }
                string
                    += `${values[i].size[0].replace(' ', '') + PX + SPACE
                    + values[i].size[1].replace(' ', '') + PX + SPACE
                    + values[i].size[2].replace(' ', '') + PX + SPACE
                    + values[i].size[3].replace(' ', '') + PX } ${ values[i].color.trim()}`

                ; if (i < 2) {
                    string += COMMA;
                }
            }
        } else {
            string = values.toString();
        }
        return string;
    };

    render() {
        this.makeString(this.getValues());
        const values = this.getValues();
        return (
            <React.Fragment>
                {values.map((item, i) => {
                    const key = `section_${ i.toString()}`;
                    const {size, color} = item;
                    return (
                        <React.Fragment
                            key={`${key }_frag`}
                        >
                            <ListItem
                                key={key}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <TextField
                                        InputProps={{className: 'shadow-size', endAdornment: <InputAdornment
                                            position='end'
                                            style={{marginRight: 2}}
                                        >
px
                                        </InputAdornment>}}
                                        onInput={(event) => { this.handleChangeSize(i, 'size', 0, event.target.value); }}
                                        style={{borderRight: '1px solid grey'}}
                                        value={size[0]}
                                    />
                                    <TextField
                                        InputProps={{className: 'shadow-size', endAdornment: <InputAdornment
                                            position='end'
                                            style={{marginRight: 2}}
                                        >
px
                                        </InputAdornment>}}
                                        onInput={(event) => { this.handleChangeSize(i, 'size', 1, event.target.value); }}
                                        style={{borderRight: '1px solid grey'}}
                                        value={size[1]}
                                    />
                                    <TextField
                                        InputProps={{className: 'shadow-size', endAdornment: <InputAdornment
                                            position='end'
                                            style={{marginRight: 2}}
                                        >
px
                                        </InputAdornment>}}
                                        onInput={(event) => { this.handleChangeSize(i, 'size', 2, event.target.value); }}
                                        style={{borderRight: '1px solid grey'}}
                                        value={size[2]}
                                    />
                                    <TextField
                                        InputProps={{className: 'shadow-size', endAdornment: <InputAdornment
                                            position='end'
                                            style={{marginRight: 2}}
                                        >
px
                                        </InputAdornment>}}
                                        onInput={(event) => { this.handleChangeSize(i, 'size', 3, event.target.value); }}
                                        style={{marginRight: 6}}
                                        value={size[3]}
                                    />
                                </div>
                            </ListItem>
                            <ColorEditionListItem
                                label={'Color'}
                                onChange={this.handleChangeColor}
                                path={i}
                                value={color}
                            />
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(TextItem);
