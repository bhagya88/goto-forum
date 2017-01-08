import { combineReducers } from 'redux';
import posts from './posts';
import activeSubreddit from './activeSubreddit';
import currentPostId from './currentPostId';

export default combineReducers({posts , activeSubreddit, currentPostId });