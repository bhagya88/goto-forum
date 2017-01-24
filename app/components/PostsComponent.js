import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../actions/currentPostId_actions';
import { Link } from 'react-router';
import PostForm from './PostForm';
import { despatchSetPosts } from '../actions/posts_actions';
import getTimeMsg  from '../utils/getTimeMsg';

import moment from 'moment';

class PostsComponent extends Component {

	componentDidMount(){

	this.props.despatchSetPosts();	
	}

	render() {


		return (
			<div>
				<div>
					<Link to="/newpost">
						<a className="waves-effect waves-light btn flat">Add new post</a>
					</Link>
				</div>


				<ul>
					<p>{'Goto '}{this.props.activeSubreddit}  {'Add Post'}</p>
					{this.props.posts.map((e,i) => {
						return (
						<li className="valign-wrapper">
							<Link key={i}  to={`/${e.subredditId}/${e._id}`} >
							<div key={i} onClick={this.props.setCurrent.bind(null,e._id)}  >
								
								<p className="valign-wrapper" ><i className="small material-icons valign">description</i>
								<span>{e.title}</span></p>

								<p className="black-text"><i>{getTimeMsg(e.created_at)}{' by '}{e.author}</i></p>
								<p className="pink-text">{e.comments.length} {'comments'}</p>
							</div>
							</Link>
						</li>

						);
					},this )}
				</ul>
				
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
	  	activeSubredditId: id,
	  	activeSubreddit: state.activeSubreddit
	  }

  }else {

  	return {
  		posts: state.posts,
	  	activeSubredditId: state.activeSubreddit.replace(/ /g,'').toLowerCase(),
	  	activeSubreddit: state.activeSubreddit
  	}
  }
}


export default connect(mapStateToProps,{ setCurrent, despatchSetPosts })(PostsComponent);