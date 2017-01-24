// get all dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
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
        this.props.despatchAddComment(this.props.post._id,{

          content: this.state.comment,
          created_at: Date.now(),
          author: this.props.author

        });

    
      this.setState({ comment: ''});

      browserHistory.push('/'+ this.props.post.subredditId + '/' + this.props.post._id );
    }

    
  }
	render() {

    //return the html form
		return (
			<div className="row">
                 
	             
	                 
	                    <input type="text" id="comment" value={ this.state.comment } onChange={this.handleChange.bind(this)} name="comment"  className="cursiveFont col s6" placeholder="comment"/>

	                
	                   <button id="save" type="submit" className="btn small col s1 offset-s1" onClick={this.handleSubmit.bind(this)}>save</button>
	                  
                  
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
  	post: state.posts.find(e => e._id === state.currentPostId),
    author: state.auth.username
  } 
}

// connect the component to store
export default connect(mapStateToProps,{ despatchAddComment })(CommentForm);