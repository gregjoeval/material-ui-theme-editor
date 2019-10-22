import React from 'react';
import cn from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import PaletteEditionCardSelect from "./palette-edition-card-select";
import ColorCard from "./card/ColorCard";

import Slide from "@material-ui/core/Slide";
import {Drawer} from "@material-ui/core";
import PaletteEditionCard from "./palette-edition-card";
import SelectCard from "./card/SelectCard";
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

const paletteFields = {
    type: [
        {label: "Type", name: "type", options: [{label: "Light", value: "light"}, {label: "Dark", value: "dark"}]}
    ],
    common: [
        {label: 'Black', name: 'black'},
        {label: 'White', name: 'white'},
    ],
    background: [
        {label: 'Paper', name: 'paper'},
        {label: 'Default', name: 'default'},
    ],
    primary: [
        {label: 'Main', name: 'main'},
        {label: 'Light', name: 'light'},
        {label: 'Dark', name: 'dark'},
        {label: 'Contrast text', name: 'contrastText'},
    ],
    secondary: [
        {label: 'Main', name: 'main'},
        {label: 'Light', name: 'light'},
        {label: 'Dark', name: 'dark'},
        {label: 'Contrast text', name: 'contrastText'},
    ],
    error: [
        {label: 'Main', name: 'main'},
        {label: 'Light', name: 'light'},
        {label: 'Dark', name: 'dark'},
        {label: 'Contrast text', name: 'contrastText'},
    ],
    text: [
        {label: 'Primary', name: 'primary'},
        {label: 'Secondary', name: 'secondary'},
        {label: 'Disabled', name: 'disabled'},
        {label: 'Hint', name: 'hint'},
    ],
};

class Editor extends React.PureComponent {

    handleChangeTheme = (section = null, name, changes) => {
        if (section !== null) {
            this.props.onChange({
                ...this.props.theme,
                [section] : {
                    ...this.props.theme[section],
                    [name] : changes,
                }
            });
        }
        else {
            this.props.onChange({
                ...this.props.theme,
                [name] : changes,
            });
        }
    };

    render() {
        const {classes, rootClassName} = this.props;
        return (
            <Drawer
                open={this.props.open}
                onClose={()=>{this.props.toggleEditor(false)}}
                anchor="top"
                SlideProps={{direction : "right"}}
                PaperProps={{style : {width : 300, height : "100%"}}}
                >
                <SelectCard
                    label={"Palette Type"}
                    fields={paletteFields.type}
                    palette={this.props.theme.palette.type}
                    onChange={this.handleChangeTheme}
                    rootClassName={classes.card}
                    name="type"
                    section={"palette"}

                />
                <ColorCard
                    label="Common colors"
                    name="common"
                    fields={paletteFields.common}
                    onChange={this.handleChangeTheme}
                    palette={this.props.theme.palette.common}
                    rootClassName={classes.card}
                    section={"palette"}
                />
                <ColorCard
                    label="Background colors"
                    name="background"
                    fields={paletteFields.background}
                    onChange={this.handleChangeTheme}
                    section={"palette"}
                    palette={this.props.theme.palette.background}
                    rootClassName={classes.card}
                />
                <ColorCard
                    label="Primary colors"
                    name="primary"
                    fields={paletteFields.primary}
                    onChange={this.handleChangeTheme}
                    palette={this.props.theme.palette.primary}
                    rootClassName={classes.card}
                />
                <ColorCard
                    label="Secondary colors"
                    name="secondary"
                    fields={paletteFields.secondary}
                    onChange={this.handleChangeTheme}
                    section={"palette"}
                    palette={this.props.theme.palette.secondary}
                    rootClassName={classes.card}
                />
                <ColorCard
                    label="Error colors"
                    name="error"
                    fields={paletteFields.error}
                    onChange={this.handleChangeTheme}
                    section={"palette"}
                    palette={this.props.theme.palette.error}
                    rootClassName={classes.card}
                />
                <ColorCard
                    label="Text colors"
                    name="text"
                    fields={paletteFields.text}
                    onChange={this.handleChangeTheme}
                    section={"palette"}
                    palette={this.props.theme.palette.text}
                    rootClassName={classes.card}
                />

            </Drawer>
        );
    }
}

export default withStyles(styles)(Editor);
