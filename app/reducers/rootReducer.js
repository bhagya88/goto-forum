import { combineReducers } from 'redux';
import posts from './posts';
import subreddit from './subreddit';
import currentPost from './currentPost';

export default combineReducers({posts , subreddit, currentPost });