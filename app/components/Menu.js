import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setActive } from '../actions/activeSubreddit_actions';
import Login from './Login';



class Menu extends Component {

	render(){

		var loginVar;

		if(!this.props.isLoggedIn){

			loginVar =  <Link to="/login"><a className="waves-effect waves-light btn flat">Login/ Signup</a></Link>

		}else{

			loginVar = <div>Welcome {this.props.username} !</div>
		}

		return(
		<nav>
		<div className="row pink valign-wrapper ">
					
			{this.props.activeSubreddit === '' ? 
			  <div className="col s1 offset-s2 waves-effect teal lighten-1"><Link to="/all" onClick={this.props.setActive.bind(null,'')}>All</Link></div> 
			  :
			  <div className="col s1 offset-s2 waves-effect"><Link to="/all" onClick={this.props.setActive.bind(null,'')}>All</Link></div> 
			}

			{this.props.activeSubreddit === 'Austin' ? 
			  <div className="col s1 teal lighten-1"><Link to="/austin" onClick={this.props.setActive.bind(null,'Austin')}>Austin</Link></div>
			  :
			 <div className="col s1"><Link to="/austin" onClick={this.props.setActive.bind(null,'Austin')}>Austin</Link></div>
			}

			{this.props.activeSubreddit === 'New York' ? 
			  <div className="col s1 teal lighten-1"><Link to="/newyork" onClick={this.props.setActive.bind(null,'New York')}>New York</Link></div>
			  :
			 <div className="col s1"><Link to="/austin" onClick={this.props.setActive.bind(null,'New York')}>New York</Link></div>
			}

			{this.props.activeSubreddit === 'Seattle' ? 
			  <div className="col s1 teal lighten-1"><Link to="/seattle" onClick={this.props.setActive.bind(null,'Seattle')}>Seattle</Link></div>
			  :
			 <div className="col s1"><Link to="/seattle" onClick={this.props.setActive.bind(null,'Seattle')}>Seattle</Link></div>
			}

				
					<div className="col s2 offset-s5">
						
							 
						{loginVar}
					</div>
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

	isLoggedIn : state.auth.isLoggedIn,
	username : state.auth.username,
	activeSubreddit: state.activeSubreddit
	}
}


export default connect(mapStateToProps,{ setActive })(Menu);