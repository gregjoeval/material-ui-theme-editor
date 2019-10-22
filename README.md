

Click [here](https://in-your-saas.github.io/material-ui-theme-editor/) to access it


# Material UI theme editor
***

This is an extended version of [In-Your-Saas](https://github.com/in-your-saas)'s [material-ui-theme-editor](https://github.com/in-your-saas/material-ui-theme-editor)

***

## Added Features

### Theme Additions
* Palette :
  * Type,
  * Grey,
  * Divider,
  * Action
  
* Shape :
  * Border Radius
  
* Transitions :
  * Duration,
  * Easing
  
### Editor Additions
Added the ability to load a theme from a file

### Preview
Added Some inputs and a display peice.

***

## Future Feature List
 * Set name of file download
 * Swap between dark and light theme for the editor
 * JSON editor (to edit the theme directly)
 * Editor section to handle shadows

***

To integrate a theme into you're project, you just have to do the following

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Application from './your/entry/point';
import yourRawTheme from './wherever/is/your/theme.json';

const theme = createMuiTheme(yourRawTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Application />
  </MuiThemeProvider>
, document.getElementById('root'));
```
