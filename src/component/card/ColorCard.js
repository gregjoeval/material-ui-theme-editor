import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import ColorEditionListItem from './color-edition-list-item';
import TextCard from "./TextCard";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class ColorCard extends React.PureComponent {
    handleChange = (name, value) => {
        this.props.onChange(this.props.section, this.props.name, {
            ...this.props.palette,
            [name]: value,
        });
    };

    render() {
        const {classes, palette, rootClassName, label, fields} = this.props;
        return (
            <Card className={cn(rootClassName, classes.root)} style={{height : "fit-content", display : "inline-table"}}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                    >
                        {label}
                    </Typography>
                </CardContent>
                <List dense>
                    {fields.map((item) => (
                        <ColorEditionListItem
                            key={item.name}
                            label={item.label}
                            name={item.name}
                            onChange={this.handleChange}
                            value={palette[item.name]}
                        />
                    ))}
                </List>
            </Card>
        );
    }
}
export default withStyles(styles)(ColorCard);
