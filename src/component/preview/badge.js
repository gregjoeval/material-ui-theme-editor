import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit
    },
    margin: {
        margin: theme.spacing.unit
    }
});

class PreviewBadge extends React.PureComponent {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Badge
                    badgeContent={4}
                    className={classes.margin}
                    color='primary'
                >
                    <MailIcon/>
                </Badge>
                <Badge
                    badgeContent={10}
                    className={classes.margin}
                    color='secondary'
                >
                    <MailIcon/>
                </Badge>
                <Badge
                    badgeContent={42}
                    className={classes.margin}
                    color='error'
                >
                    <MailIcon/>
                </Badge>
            </div>
        );
    }
}

export default withStyles(styles)(PreviewBadge);
