import React from 'react';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme) => ({
    root: {
        borderColor: theme.palette.grey['300'],
        borderStyle: 'solid',
        borderWidth: 1
    }
});

class ColorBubble extends React.PureComponent {
    getStyle() {
        return {backgroundColor: this.props.color};
    }

    render() {
        return (
            <Avatar
                {...this.props}
                className={clsx(this.props.className, this.props.classes.root)}
                style={this.getStyle()}
            />
        );
    }
}

export default withStyles(styles)(ColorBubble);
