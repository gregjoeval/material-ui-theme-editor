import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Drawer, ExpansionPanelDetails} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import GenericCard from "./card/GenericCard";


const styles = (theme) => ({
    root: {
        overflowY: 'auto',
    },
    card: {
        margin: theme.spacing.unit,
    },
    logo: {
        maxWidth: 150,
    },
});

const sections = [
    {
        section : "palette",
        label : "Palette",
        cards : [
            {
                label : "Palette Type",
                name : "palette.type",
                fields : [
                    {type : "select", name : "type", label : "Type", path : "palette.type",
                        options : [
                            {label : "Light", value : "light"},
                            {label : "Dark", value : "dark"}
                        ]
                    }
                ]
            },
            {
                label : "Common Colors",
                name : "palette.common",
                fields : [
                    {section : "common", type : "color", name : "black", label : "Black", path : "palette.common.black"},
                    {section : "common", type : "color", name : "white", label : "white", path : "palette.common.white"}
                ]
            },
            {
                label : "Background Colors",
                name : "palette.background",
                fields : [
                    {section : "background", type : "color", name : "paper", label : "Paper", path : "palette.background.paper"},
                    {section : "background", type : "color", name : "default", label : "Default" , path : "palette.background.default"}
                ]
            },
            {
                label : "Primary",
                name : "palette.primary",
                fields : [
                    {section : "primary", type : "color", label: 'Main', name: 'main'                  , path : "palette.primary.main"},
                    {section : "primary", type : "color", label: 'Light', name: 'light'                , path : "palette.primary.light"},
                    {section : "primary", type : "color", label: 'Dark', name: 'dark'                  , path : "palette.primary.dark"},
                    {section : "primary", type : "color", label: 'Contrast text', name: 'contrastText' , path : "palette.primary.contrastText"}
                ]
            },
            {
                label : "Secondary",
                name : "palette.secondary",
                fields : [
                    {section : "secondary", type : "color", label: 'Main', name: 'main'                  , path : "palette.secondary.main"},
                    {section : "secondary", type : "color", label: 'Light', name: 'light'                , path : "palette.secondary.light"},
                    {section : "secondary", type : "color", label: 'Dark', name: 'dark'                  , path : "palette.secondary.dark"},
                    {section : "secondary", type : "color", label: 'Contrast text', name: 'contrastText' , path : "palette.secondary.contrastText"}
                ]
            },
            {
                label : "Error",
                name : "palette.error",
                fields : [
                    {section : "error", type : "color", label: 'Main', name: 'main'                  , path : "palette.error.main"},
                    {section : "error", type : "color", label: 'Light', name: 'light'                , path : "palette.error.light"},
                    {section : "error", type : "color", label: 'Dark', name: 'dark'                  , path : "palette.error.dark"},
                    {section : "error", type : "color", label: 'Contrast Text', name: 'contrastText' , path : "palette.error.contrastText"}
                ]
            },
            {
                label : "Text",
                name : "palette.text",
                fields : [
                    {section : "text", type : "color", label: 'Primary', name: 'primary'     , path : "palette.text.primary"},
                    {section : "text", type : "color", label: 'Secondary', name: 'secondary' , path : "palette.text.secondary"},
                    {section : "text", type : "color", label: 'Disabled', name: 'disabled'   , path : "palette.text.disabled"},
                    {section : "text", type : "color", label: 'Hint', name: 'hint'           , path : "palette.text.hint"}
                ]
            },
            {
                label : "Grey",
                name : "palette.grey",
                fields : [
                    {section: "grey", type : "color", path : "palette.grey.50", label : "50", name : 50},
                    {section: "grey", type : "color", path : "palette.grey.100", label : "100", name : 100},
                    {section: "grey", type : "color", path : "palette.grey.200", label : "200", name : 200},
                    {section: "grey", type : "color", path : "palette.grey.300", label : "300", name : 300},
                    {section: "grey", type : "color", path : "palette.grey.400", label : "400", name : 400},
                    {section: "grey", type : "color", path : "palette.grey.500", label : "500", name : 500},
                    {section: "grey", type : "color", path : "palette.grey.600", label : "600", name : 600},
                    {section: "grey", type : "color", path : "palette.grey.700", label : "700", name : 700},
                    {section: "grey", type : "color", path : "palette.grey.800", label : "800", name : 800},
                    {section: "grey", type : "color", path : "palette.grey.900", label : "900", name : 900},
                    {section: "grey", type : "color", path : "palette.grey.A100", label : "A100", name : "A100"},
                    {section: "grey", type : "color", path : "palette.grey.A200", label : "A200", name : "A200"},
                    {section: "grey", type : "color", path : "palette.grey.A400", label : "A400", name : "A400"},
                    {section: "grey", type : "color", path : "palette.grey.A700", label : "A700", name : "A700"},
                ]
            },
            {
                label : "Divider",
                name : "palette.divider",
                fields : [
                    {section : "palette", label : "Divider", name : "divider", type : "color", path : "palette.divider"}
                ]
            },
            {
                label : "Action",
                name : "palette.action",
                fields : [
                    {section : "action", path : "palette.action.active", label : "Active", name : "active", type : "color"},
                    {section : "action", path : "palette.action.disabled", label : "Disabled", name : "disabled", type : "color"},
                    {section : "action", path : "palette.action.over", label : "Hover", name : "over", type : "color"},
                    {section : "action", path : "palette.action.hoverOpacity", label : "Hover Opacity", name : "hoverOpacity", type : "text"}
                ]
            }
        ]
    },
    {
        section : "shape",
        label : "Shape",
        cards: [
            {
                label : "Shape",
                name : "shape.borderRadius",
                fields : [
                    {type : "text", path : "shape.borderRadius", label : "Border Radius", name : "borderRadius", section : "borderRadius"}
                ]
            }
        ]
    },
    {
        section : "transitions",
        label : "Transitions",
        cards : [
            {
                label : "Duration",
                name : "transitions.duration",
                fields : [
                    {type : "text", path : "transitions.duration.shortest", label : "Shortest", name : "shortest", section : "transitions"},
                    {type : "text", path : "transitions.duration.shorter", label : "Shorter", name : "shorter", section : "transitions"},
                    {type : "text", path : "transitions.duration.short", label : "Short", name : "short", section : "transitions"},
                    {type : "text", path : "transitions.duration.standard", label : "Standard", name : "standard", section : "transitions"},
                    {type : "text", path : "transitions.duration.complex", label : "Complex", name : "complex", section : "transitions"},
                    {type : "text", path : "transitions.duration.enteringScreen", label : "Entering Screen", name : "enteringScreen", section : "transitions"},
                    {type : "text", path : "transitions.duration.leavingScreen", label : "leavingScreen", name : "shortest", section : "transitions"},
                ]
            },
            {
                label : "easing",
                name : "transitions.easing",
                fields : [
                    {type : "text", section : "transitions", path : "transitions.easing.easeInOut", label : "Ease In Out", name : "easeInOut"},
                    {type : "text", section : "transitions", path : "transitions.easing.easeOut", label : "Ease Out", name : "easeOut"},
                    {type : "text", section : "transitions", path : "transitions.easing.easeIn", label : "Ease In", name : "easeIn"},
                    {type : "text", section : "transitions", path : "transitions.easing.sharp", label : "Sharp", name : "sharp"}
                ]
            }
        ]
    }
];

class Editor extends React.PureComponent {
    componentDidMount() {
    }
    handleChangeTheme = (path, changes) => {
        let theme = this.props.theme;
        if (/^\d+$/.test(changes)) {
            changes = parseInt(changes)
        }
        this.setValue(theme, path.split("."), changes);
        if (path === "palette.type") {
            this.props.onChange(theme, true)
        }
        else {
            this.props.onChange(theme)
        }
    };

    setValue = (object, path, value) => {
        let target = path.slice(0, -1).reduce(function(obj, key) {
            return (obj || {})[key];
        }, object);
        target[path[path.length-1]] = value;
    };
    render() {
        const {classes} = this.props;
        return (
            <Drawer
                open={this.props.open}
                onClose={()=>{this.props.toggleEditor(false)}}
                anchor="top"
                SlideProps={{direction : "right"}}
                PaperProps={{style : {width : 300, height : "100%"}}}
                >
                {sections.map((item)=>{
                    const {section, label, cards} = item;
                    return (
                        <ExpansionPanel style={{borderRadius : 0}} key={section}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>{label}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{display : "flex", flexDirection : "column", padding : 0}}>
                                {cards.map((item, i)=>{
                                    const {label, fields, name} = item;
                                    return (
                                        <GenericCard
                                            key={name + i}
                                            label={label}
                                            fields={fields}
                                            section={section}
                                            theme={this.props.theme}
                                            onChange={this.handleChangeTheme}
                                            rootClassName={classes.card}
                                        />
                                    );
                                })}
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    );
                })}
            </Drawer>
        );
    }
}

export default withStyles(styles)(Editor);
