// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { despatchAddComment } from '../actions/posts_actions';

// comment Form components lets you submit a comment
class CommentForm extends Component {

 constructor(props) {
	  super(props);

    // keeps track of user input
	  this.state = {
	    comment: ''
	    };
	}


  handleChange(e){
    // set the state
    this.setState({ [e.target.name] : e.target.value})

  }

  handleSubmit(e){

    // check if there is comment available to submit
    if(this.state.comment.length){
      this.props.despatchAddComment(this.props.post._id,
       this.state.comment);
      this.setState({ comment: ''});
    }

    
  }
	render() {

    //return the html form
		return (
			<div className="card transparent center">
                  <form id="commentForm" onSubmit={this.handleSubmit.bind(this)}>
	                  <div className="card-content note-card ">
	                    <span className="card-title activator white-text text-darken-4">New Comment</span>
	                    <input type="text" id="comment" value={ this.state.comment } onChange={this.handleChange.bind(this)} name="comment"  className="cursiveFont" />

	                  </div>
	                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
	                   <i id="save" type="submit" className="material-icons small" onClick={this.handleSubmit.bind(this)}>save</i>
	                  </div>
                  </form>
     		</div>
		);
	}
}

// all props available
CommentForm.propTypes = {

  post: React.PropTypes.object,
  despatchAddComment: React.PropTypes.func

}

// get props from store
function mapStateToProps(state){
  return {
  	post: state.posts.find(e => e._id === state.currentPostId)
  } 
}

// connect the component to store
export default connect(mapStateToProps,{ despatchAddComment })(CommentForm);