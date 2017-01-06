import React, { Component } from 'react';
import Menu from './subreddit/Menu';

export default class Main extends Component {
	render() {
		console.log("main....");
		return (
			<div >
	      <Menu />
		  <div className="container">
	      <div className="row">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	      </div>
	    </div>
		);
	}
}
