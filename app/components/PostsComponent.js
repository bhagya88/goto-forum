import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../actions/currentPostId_actions';
import { Link } from 'react-router';

class PostsComponent extends Component {
	render() {
		return (
			<ul>
				<p>{this.props.activeSubredditId}</p>
				{this.props.posts.map((e,i) => {
					return (<Link key={i}  to={`/${this.props.activeSubredditId}/${e._id}`} ><p key={i} onClick={this.props.setCurrent.bind(null,e._id)} >{e.title} .{e.comments.length} {'comments'} </p></Link>);
				},this )}
			</ul>
		);
	}
}

PostsComponent.propTypes = {

  posts: React.PropTypes.array,
  activeSubredditId : React.PropTypes.string,
  setCurrent: React.PropTypes.func

 
}

function mapStateToProps(state){
  return {
  	posts: state.posts.filter(e => e.subredditId === state.activeSubredditId),
  	activeSubredditId: state.activeSubredditId
  }
}


export default connect(mapStateToProps,{ setCurrent })(PostsComponent);