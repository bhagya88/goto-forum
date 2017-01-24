import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import  rootReducer from '../reducers/rootReducer';
import { BrowserRouter } from 'react-router';

import Main from '../components/Main';
import PostsComponent from '../components/PostsComponent';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import CommentForm from '../components/CommentForm';
import EnsureLoggedInContainer from '../components/EnsureLoggedInContainer';
import Login from '../components/Login';
//import Listing from '../components/subreddit/Listing';


import  data from '../data/posts';
// Renders the contents according to the route page.


 // const store = createStore(rootReducer, data, 
 //    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 //  );

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

module.exports = (
  
  <Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path="/" component={Main}>

	    		<Route path="login" component={Login} />
	    		
	            <Route component={EnsureLoggedInContainer}>
	    			<Route path="newpost" component={PostForm} />
					
				</Route>
	    		
				<Route path=":redditId" component={PostsComponent} />
				<Route path=":redditId/:postId" component={Post} >
					<Route component={EnsureLoggedInContainer}>
						<Route path="newComment" component={CommentForm} />
					</Route>

				</Route>
	            
				<IndexRoute component={PostsComponent} />
	    </Route>
	  </Router>
  </Provider>
);
