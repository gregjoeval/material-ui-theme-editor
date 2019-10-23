import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Divider} from "@material-ui/core";


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

class CustomCard extends React.PureComponent {

    handleChange = (path, value) => {
        this.props.onChange(path, value);
    };

    render() {
        const {label} = this.props;
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
                {this.props.children}
            </Card>
        );
    }
}

export default withStyles(styles)(CustomCard);
