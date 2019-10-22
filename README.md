

Click [here](https://in-your-saas.github.io/material-ui-theme-editor/) to access it


# Material UI theme editor

This is an extended version of [In-Your-Saas](https://github.com/in-your-saas)'s 

To integrate it, you just have to do the following

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
