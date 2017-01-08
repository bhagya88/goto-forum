import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts_actions';

class PostForm extends Component {

 constructor(props) {
	  super(props);
	  this.state = {
	    title: '',
      content: ''
    };
	}

  
  handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }

  handleSubmit(e){

    if(this.state.title.length && this.state.content.length){
     this.props.addPost(this.state.title, this.state.content,this.props.activeSubredditId);
      this.setState({ title: '', content:'' });
    }
    
  }
	render() {
		return (
			<div className="card transparent center">
                  <form id="postForm" onSubmit={this.handleSubmit.bind(this)}>
	                  <div className="card-content note-card ">
	                    <span className="card-title activator white-text text-darken-4">New Comment</span>
	                    <input type="text" id="title" value={ this.state.title } onChange={this.handleChange.bind(this)} name="title"  className="cursiveFont" />
                      <textarea  id="content" value={ this.state.content } onChange={this.handleChange.bind(this)} name="content"  className="materialize-textarea cursiveFont" />

	                  </div>
	                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
	                   <i id="save" type="submit" className="material-icons small" onClick={this.handleSubmit.bind(this)}>save</i>
	                  </div>
                  </form>
     		</div>
		);
	}
}

PostForm.propTypes = {

    addPost: React.PropTypes.func

}

function mapStateToProps(state){
  return {
  	activeSubredditId: state.activeSubredditId
  } 
}


export default connect(mapStateToProps,{ addPost })(PostForm);