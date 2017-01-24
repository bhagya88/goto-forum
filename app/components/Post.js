import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import moment from 'moment';
import { Link } from 'react-router';

class Post extends Component {


	render() {

		var renderCommentButton = true;
		var regEx = /(newcomment)$/;

		if( regEx.test(this.props.currentUrl) ){
			renderCommentButton = false;
		}

		var newCommentUrl = this.props.currentUrl +'/newcomment';

		return (

			<div>

				<div>
					{ renderCommentButton ? <Link to={newCommentUrl}><a className="waves-effect waves-light btn flat">Add new comment</a></Link> : <span></span>}
				</div>

				<div>
				{this.props.children}
				</div>


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
				
			</div>
		);
	}
}

Post.propTypes = {

  post: React.PropTypes.object

}

function mapStateToProps(state,ownProps){
  return {
  	post: state.posts.find(e => e._id === state.currentPostId),
  	currentUrl: ownProps.location.pathname
  } 
}


export default connect(mapStateToProps)(Post);