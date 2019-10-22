import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import {Button, ListItem, TextField} from "@material-ui/core";



const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class UploadCard extends React.PureComponent {
    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    render() {
        const {classes, rootClassName} = this.props;
        return (
            <Card className={cn(rootClassName, classes.root)} style={{height : "fit-content", display : "inline-table"}}>
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                    >
                        Select File
                    </Typography>
                </CardContent>
                <List dense>
                    <ListItem>
                    <TextField
                        type={"file"}
                        label={".json file"}
                    />
                    </ListItem>
                    <ListItem>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                        >
                            parse theme
                        </Button>
                    </ListItem>
                </List>
            </Card>
        );
    }
}
export default withStyles(styles)(UploadCard);
