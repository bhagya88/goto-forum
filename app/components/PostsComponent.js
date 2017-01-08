import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../actions/currentPostId_actions';
import { Link } from 'react-router';
import PostForm from './PostForm';

class PostsComponent extends Component {
	render() {
		return (
			<div>
				<ul>
					<p>{this.props.activeSubredditId}</p>
					{this.props.posts.map((e,i) => {
						return (<Link key={i}  to={`/${this.props.activeSubredditId}/${e._id}`} >
						<p key={i} onClick={this.props.setCurrent.bind(null,e._id)} >
							<i className="small material-icons">description</i>
							{e.title} 
							<p>{e.comments.length} {'comments'}</p>
						</p>
						</Link>);
					},this )}
				</ul>
				<PostForm />
			</div>
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