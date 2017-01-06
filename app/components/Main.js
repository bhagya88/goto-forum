import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log("main....");
		return (
			<div >
	      <nav class="center">
		    <div class=" center nav-wrapper ">
		      
		      <ul id="nav-mobile" class="center">
		        <li><a href="sass.html">Austin</a></li>
		        <li><a href="badges.html">New York</a></li>
		        <li><a href="collapsible.html">Seattle</a></li>
		      </ul>
		    </div>
		  </nav>
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
