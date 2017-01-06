import React from 'react';
import ReactDOM from 'react-dom';
import { creatStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevToolsExtension } from 'react-devtools-extension';
import  rootReducer from './reducers';

import Router from './config/routes';
import Main from './components/Main';
import data from './data/postData';
// Renders the contents according to the route page.

const defaultState = creatStore();

ReactDOM.render(Router, document.getElementById('app'));
