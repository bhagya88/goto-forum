import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  rootReducer from '../reducers/rootReducer';
import { BrowserRouter } from 'react-router';

import Main from '../components/Main';
import PostsComponent from '../components/subreddit/PostsComponent';
//import Listing from '../components/subreddit/Listing';


import  data from '../data/posts';
// Renders the contents according to the route page.


const store = createStore(rootReducer,data);

module.exports = (
  
  <Provider store={store}>
	  <Router history={hashHistory}>
	    <Route path="/" component={Main}>
				<Route path="/:redditId" component={PostsComponent} />
				<IndexRoute component={PostsComponent} />
	    </Route>
	  </Router>
  </Provider>
);
