// get all dependencies
import React, { Component } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

export default class Listing extends Component {
	constructor() {
		super();

		// set the initial value for the state
		this.state = {
			
			posts: []
		}
	}

	// return the html
	render() {
		return (
			<ul>
				{this.state.posts.map(post => <ListItem key={post._id} post={post} />)}
			</ul>
		);
	}
}
