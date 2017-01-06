import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component {
	render() {
		return (
		 <nav className="center">
		    <div className=" center nav-wrapper ">
		      
		      <ul id="nav-mobile" className="center">
		        <li><Link to="/austin" >Austin</Link></li>
		        <li><Link to="/newyork" >New York</Link></li>
		        <li><Link to="/seattle" >Austin</Link></li>
		      </ul>
		    </div>
		  </nav>
		);
	}
}

