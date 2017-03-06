import React from 'react';
import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';


injectTapEventPlugin();

const Root = ({store}) => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme('_lightBaseTheme2.default')}>
            <App />
        </MuiThemeProvider>
    </Provider>
);

export default Root;
