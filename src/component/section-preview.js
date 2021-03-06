import React from 'react';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';

import PreviewDisplay from './preview';
import ViewSelector from './view-selector';

const styles = (theme) => ({
    root: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column'
    },
    selector: {
        alignSelf: 'center',
        margin: theme.spacing.unit
    },
    container: {
        alignSelf: 'center',
        flex: 1,
        margin: theme.spacing.unit,
        overflow: 'auto',
        width: '100%'
    },
    desktop: {},
    mobile: {
        maxWidth: 350,
        maxHeight: 650
    }
});

class SectionPreview extends React.PureComponent {
    render() {
        const {classes, rootClassName} = this.props;
        return (
            <section className={clsx(classes.root, rootClassName)}>
                <div className={classes.selector}>
                    <ViewSelector
                        className={classes.selector}
                        onChange={this.props.onChange}
                        value={this.props.view}
                    />
                </div>
                <PreviewDisplay
                    className={clsx(classes.container, {
                        [classes.desktop]: this.props.view === 'desktop',
                        [classes.mobile]: this.props.view === 'mobile'
                    })}
                    theme={this.props.theme}
                />
            </section>
        );
    }
}

export default withStyles(styles)(SectionPreview);
