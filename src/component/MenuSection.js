import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {ExpansionPanelDetails} from '@material-ui/core';


class MenuSection extends React.PureComponent {
    state = {
        open: false,
        draw: false
    };

    handleChange = () => {
        const {open} = this.state;
        if (open) {
            this.setState({open: !open});
            setTimeout(() => {
                this.setState({draw: this.state.open});
            }, 2000);
        } else {
            this.setState({open: !open, draw: !open});
        }
    };

    render() {
        const {backgroundColor, title} = this.props;
        const {open, draw} = this.state;
        return (
            <ExpansionPanel
                className={'sectionArea'}
                expanded={open}
                onChange={this.handleChange}
                square={true}
                style={{backgroundColor: backgroundColor, padding: 0}}
            >
                <ExpansionPanelSummary
                    className={'sectionTitle'}
                    expandIcon={<ExpandMoreIcon color={'secondary'}/>}
                >
                    <Typography variant={'subtitle2'}>
                        {title}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{padding: 0, width: '100%', display: 'flex', flexDirection: 'column'}}>
                    {draw
                    && this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

MenuSection.propTypes = {};

export default MenuSection;
