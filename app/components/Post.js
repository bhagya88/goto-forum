import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

class Post extends Component {
	render() {
		return (
			<div>
				<p>{this.props.post.title}</p>
				<ul>
					{this.props.post.comments.map((comment,i) => <p key={i} >{comment}</p> )}
				</ul>
				<CommentForm />
			</div>
		);
	}
}

Post.propTypes = {

  post: React.PropTypes.object

}

function mapStateToProps(state){
  return {
  	post: state.posts.find(e => e._id === state.currentPostId)
  } 
}


export default connect(mapStateToProps)(Post);