// get all dependencies
const mongoose = require('mongoose');

// create the schema
const Post = new mongoose.Schema({

	title: String,
	content: String,
	subreddit: String,
	subredditId: String,
	author: String,
	comments: Array,
	created_at: Date,
	updated_at: Date
});

// create and export the model
module.exports = mongoose.model('post', Post);
