import React from 'react';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Tooltip from '@material-ui/core/Tooltip';

import ThemeService from '../service/theme';
import Fab from '@material-ui/core/Fab';

export default class DownloadButton extends React.Component {
    state = {
        running: false
    };

    handleClick = () => {
        this.setState({running: true}, () => {
            ThemeService.download(this.props.theme, this.props.fileName)
                .then(() => this.setState({running: false}));
        });
    };

    render() {
        const {rootClassName} = this.props;
        return (
            <Tooltip
                placement='left'
                title='Download your theme'
            >
                <Fab
                    className={rootClassName}
                    color='primary'
                    disabled={this.state.running}
                    onClick={this.handleClick}
                >
                    <CloudDownload/>
                </Fab>
            </Tooltip>
        );
    }
}
