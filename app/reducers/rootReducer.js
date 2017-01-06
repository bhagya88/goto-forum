import { combineReducers } from 'redux';
import posts from './posts';
import activeSubredditId from './activeSubredditId';
import currentPostId from './currentPostId';

export default combineReducers({posts , activeSubredditId, currentPostId });