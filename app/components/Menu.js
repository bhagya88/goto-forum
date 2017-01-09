import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setActive } from '../actions/activeSubreddit_actions';

class Menu extends Component {
	render() {
		return (
		 <nav className="center">
		    <div className=" center nav-wrapper ">
		      
		      <ul id="nav-mobile" className="center">
		        <li><Link to="/austin" onClick={this.props.setActive.bind(null,'Austin')}>Austin</Link></li>
		        <li><Link to="/newyork" onClick={this.props.setActive.bind(null,'New York')}>New York</Link></li>
		        <li><Link to="/seattle" onClick={this.props.setActive.bind(null,'Seattle')}>Seattle</Link></li>
		      </ul>
		    </div>
		  </nav>
		);
	}
}


Menu.propTypes = {

  setActive: React.PropTypes.func

}

function mapStateToProps(state){
return	{

	}
}


export default connect(mapStateToProps,{ setActive })(Menu);