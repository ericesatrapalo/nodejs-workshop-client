import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducers from './reducers';
import Root from './components/Root';

ReactDOM.render(
    <Root store={createStore(reducers)} />,
    document.getElementById("book_manager")
);
