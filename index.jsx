import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import createStore from './src/store';
import Routes from './src/routes';
import './src/styles/main.scss';

const store = createStore;

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);