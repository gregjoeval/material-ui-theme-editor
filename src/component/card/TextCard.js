import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import {Select, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class TextCard extends React.PureComponent {
    handleChange = (name, value) => {
        this.props.onChange(this.props.section, this.props.name, value);
    };

    render() {
        const {classes, palette, rootClassName, label, fields} = this.props;
        return (
            <Card className={cn(rootClassName, classes.root)} style={{height : "fit-content", display : "inline-table", overflowY : "unset"}}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                    >
                        {label}
                    </Typography>
                </CardContent>
                <List style={{width : "90%", marginLeft : "5%"}}>
                    {fields.map((item) => (
                        <TextField
                            label={item.label}
                            key={item.name}
                            id={item.name}
                            name={item.name}
                            value={palette[item.name]}
                            onChange={(event)=>this.handleChange(item.name, event.target.value)}
                        />
                    ))}
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(TextCard);
