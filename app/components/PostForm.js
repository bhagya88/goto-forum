import React, { Component } from 'react';
import { connect } from 'react-redux';
import { despatchAddPost } from '../actions/posts_actions';

class PostForm extends Component {

 constructor(props) {
	  super(props);
	  this.state = {
	    title: '',
      content: '',
      subreddit:''
    };
	}

  componentWillReceiveProps(nextProps){
    this.setState({subreddit: nextProps.activeSubreddit});
  }

  handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }

  handleSubmit(e){

    if(this.state.title.length && this.state.content.length){
     this.props.despatchAddPost({
      title: this.state.title,
      content: this.state.content,
      subreddit: this.state.subreddit,
      subredditId: this.state.subreddit.replace(/ /g,'').toLowerCase(),
      comments:[],
      created_at: new Date()
    });

      this.setState({ title: '', content:'' });
    }
    
  }
	render() {
		return (
			<div className="card transparent center">
                  <form id="postForm" onSubmit={this.handleSubmit.bind(this)}>
	                  <div className="card-content note-card ">
	                    <span className="card-title activator white-text text-darken-4">New Comment</span>
                      <input type="text" id="subreddit" value={ this.state.subreddit } onChange={this.handleChange.bind(this)} name="subreddit"  className="cursiveFont" />
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

    despatchAddPost: React.PropTypes.func

}

function mapStateToProps(state){
  return {
  	activeSubreddit: state.activeSubreddit,
    activeSubredditId: state.activeSubreddit.replace(/ /g,'').toLowerCase()
  } 
}


export default connect(mapStateToProps,{ despatchAddPost })(PostForm);