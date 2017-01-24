import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import moment from 'moment';
import { Link } from 'react-router';
import getTimeMsg  from '../utils/getTimeMsg';


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


				<p className="valign-wrapper row">
					<i className="small material-icons valign">description</i>
					{this.props.post.title}
				</p>
				<p className="valign-wrapper row">
					
					{this.props.post.content}
				</p>
				<p className="black-text"><i>{'Posted '} {getTimeMsg(this.props.post.created_at)}{' by '}{this.props.post.author}</i></p>

				<div>
					{ renderCommentButton ? <Link to={newCommentUrl}><a className="transparent btn flat red-text">Add comment</a></Link> : <span></span>}
				</div>

				<div>
				{this.props.children}
				</div>


			
				
				<ul className="row">
					{this.props.post.comments.map((comment,i) => 
						<div className="row">
						<p key={i} className="valign-wrapper offset-s1">
						 <i className="small material-icons valign">label</i>
						 <span>{comment.content}</span>

						</p> 
						<p className="black-text"><i>{' Commented '}{getTimeMsg(comment.created_at)}{' ago by '}{comment.author}</i></p>
						</div>
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