// get all the dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';




import Menu from './Menu';

//
class Main extends Component {

	componentDidUpdate(prevProps) {

	    const { dispatch, redirectUrl } = this.props
	    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
	    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    	if (isLoggingIn) {
      		//dispatch(navigateTo(redirectUrl))
	    } else if (isLoggingOut) {
	      // do any kind of cleanup or post-logout redirection here
    	}
  	}


	render() {
		console.log("main....");
		return (
		<div>
			<div>
	      		<Menu />
	      	</div>
		

		    <div className="container">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	     
	    </div>
		);
	}
}


function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    redirectUrl: state.auth.redirectUrl
  }
}

export default connect(mapStateToProps)(Main)