import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../actions/currentPostId_actions';
import { Link } from 'react-router';
import PostForm from './PostForm';
import { despatchSetPosts } from '../actions/posts_actions';

class PostsComponent extends Component {

	componentDidMount(){

	this.props.despatchSetPosts();	
	}
	render() {
		return (
			<div>
				<ul>
					<p>{this.props.activeSubredditId}</p>
					{this.props.posts.map((e,i) => {
						return (<Link key={i}  to={`/${e.subredditId}/${e._id}`} >
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
  setCurrent: React.PropTypes.func,
  despatchSetPosts: React.PropTypes.func

 
}

function mapStateToProps(state){

  if(state.activeSubreddit){
	  var id = state.activeSubreddit.replace(/ /g,'').toLowerCase();

	  console.log("mapStateToProps PostsComponent",id);
	  return {
	  	posts: state.posts.filter(e => e.subredditId === id),
	  	activeSubredditId: id
	  }

  }else {

  	return {
  		posts: state.posts,
	  	activeSubredditId: state.activeSubreddit.replace(/ /g,'').toLowerCase()
  	}
  }
}


export default connect(mapStateToProps,{ setCurrent, despatchSetPosts })(PostsComponent);