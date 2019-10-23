import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import {ListItem, TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";


const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class OptionsCard extends React.PureComponent {

    render() {
        const style = {
            padding: 0,
            marginLeft: "5%",
            width: "90%",
            height: "fit-content",
            display: "flex",
            flexDirection: "column"
        };
        return (
            <Card className={"card-area"} style={style}>
                <CardContent>
                    <Typography
                        variant={"subheading"}
                        color="textSecondary"
                    >
                        File Options
                    </Typography>
                </CardContent>
                <List dense>
                    <ListItem>
                        <TextField
                            label="File Name"
                            margin="none"
                            value={this.props.fileName}
                            onChange={(event) => {
                                this.props.setFileName(event.target.value)
                            }}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">.json</InputAdornment>,
                            }}
                        />
                    </ListItem>
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(OptionsCard);
