import React from 'react';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import {ExpansionPanelDetails} from "@material-ui/core";


class MenuSection extends React.PureComponent {


    render() {
        const {backgroundColor, title} = this.props;
        return (
            <ExpansionPanel style={{backgroundColor: backgroundColor, padding: 0}} square className={"sectionArea"}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color={"secondary"}/>} className={"sectionTitle"}>
                    <Typography variant={"subtitle2"}>
                        {title}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{padding: 0, width: "100%", display: "flex", flexDirection: "column"}}>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

MenuSection.propTypes = {};

export default MenuSection;
