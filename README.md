# Material UI theme editor


This is an extended version of [In-Your-Saas](https://github.com/in-your-saas)'s [material-ui-theme-editor](https://github.com/in-your-saas/material-ui-theme-editor)



Click [here](https://chris9540.github.io/material-ui-theme-editor) to run the editor.

or download and un-zip a build

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
* Shadows : 
  * 1-24
  
### Editor Additions
 * Added the ability to load a theme from a file
 * JSON editor to edit theme directly
 * Set name of file download
 * Swap Editor Between Light & Dark themes

### Preview
 * Added Some inputs and a display piece.


## Future Feature List
 * Increase Preformance
 * More Preview Sections
 * Loading State

## 
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
