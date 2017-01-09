import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import moment from 'moment';

class Post extends Component {
	render() {






		return (
			<div>
				<p className="valign-wrapper row">
					<i className="small material-icons valign">description</i>
					{this.props.post.title}
					

				</p>
				
				<ul className="row">
					{this.props.post.comments.map((comment,i) => 
						<p key={i} className="valign-wrapper col s10 offset-s1">
						 <i className="small material-icons valign">label</i>
						 <span>{comment}</span>

						</p> 

						)}
				</ul>
				<div className="row">
					<CommentForm />
				</div>
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