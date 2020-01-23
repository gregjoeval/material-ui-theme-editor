import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import clsx from 'clsx';

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit'];
const styles = (theme) => ({
    root: {
        padding: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    typography: {
        margin: '30px',
        display: 'flex'
    },
    type: {
        margin: 'auto'
    },
    item: {
        maxWidth: 500
    }
});

function PreviewTypography(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            {variants.map(variant => {
                const key = `variant_${ variant.toString()}`;
                return (
                    <Typography
                        className={clsx(classes.typography)}
                        key={key}
                        variant={variant}
                    >
                        {`Typography ${variant}`}
                    </Typography>
                );
            })}
        </div>
    );
}

export default withStyles(styles)(PreviewTypography);
