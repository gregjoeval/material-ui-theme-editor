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
        STRING : "",
    };

    storeString = (event) => {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0]);
        fileReader.onload = (ev) => {
            this.setState({STRING : ev.target.result})
        }
    };

    loadTheme = () => {
        if (this.state.STRING !== "") {
            try {
                let theme = JSON.parse(this.state.STRING);
                this.props.onChange(theme);
            }
            catch (e) {
                console.log(e.toString())
            }
        }
    };

    render() {
        const {classes, rootClassName} = this.props;
        return (
            <Card className={cn(rootClassName, classes.root)} style={{height : "fit-content", display : "inline-table"}}>
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
                        <input style={{color : "white"}} type="file" accept=".json,application/json" id="jsonFileInput" onChange={this.storeString}/>
                    </ListItem>
                    <ListItem>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            onClick={this.loadTheme}
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
