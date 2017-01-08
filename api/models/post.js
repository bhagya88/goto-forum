const mongoose = require('mongoose');

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

module.exports = mongoose.model('post', Post);
