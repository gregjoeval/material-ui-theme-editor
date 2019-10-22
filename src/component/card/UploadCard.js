import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import {Button, ListItem} from "@material-ui/core";


const styles = (theme) => ({
    root: {
        paddingBottom: theme.spacing.unit,
    },
    title: {
        fontSize: 14,
    },
});

class UploadCard extends React.PureComponent {
    state = {
        STRING: "",
    };

    storeString = (event) => {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0]);
        fileReader.onload = (ev) => {
            this.setState({STRING: ev.target.result})
        }
    };

    loadTheme = () => {
        if (this.state.STRING !== "") {
            try {
                let theme = JSON.parse(this.state.STRING);
                this.props.onChange(theme);
            } catch (e) {
                console.log(e.toString())
            }
        }
    };

    render() {
        const style ={
            padding : 0,
            marginLeft : "5%",
            width : "90%",
            height: "fit-content",
            display: "flex",
            flexDirection : "column"
        };
        return (
            <Card className={"card-area"} style={style}>
                <CardContent>
                    <Typography
                        variant={"subheading"}
                        color="textSecondary"
                    >
                        Select File
                    </Typography>
                </CardContent>
                <List dense>
                    <ListItem>
                        <input style={{color: "white"}} type="file" accept=".json,application/json" id="jsonFileInput"
                               onChange={this.storeString}/>
                    </ListItem>
                    <ListItem>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            onClick={this.loadTheme}
                            style={{textTransform: "capitalize"}}
                        >
                            load theme
                        </Button>
                    </ListItem>
                </List>
            </Card>
        );
    }
}

export default withStyles(styles)(UploadCard);
