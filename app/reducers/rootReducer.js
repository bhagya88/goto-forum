import { combineReducers } from 'redux';
import posts from './posts';
import activeSubreddit from './activeSubreddit';
import currentPostId from './currentPostId';
import auth from './auth';

export default combineReducers({posts , activeSubreddit, currentPostId, auth });