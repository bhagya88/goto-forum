import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsComponent extends Component {
	render() {
		return (
			<ul>
				{this.props.posts.map((e,i) => <p key={i} >{e.post}</p> )}
			</ul>
		);
	}
}

PostsComponent.propTypes = {

  posts: React.PropTypes.array,
  activeRedditId : React.PropTypes.array

 
}

function mapStateToProps(state){
  return {
  	posts: state.posts.filter(e => e.subredditId === this.state.activeRedditId);
  	activeRedditId: state.props.activeRedditId;
  }
}


export default connect(mapStateToProps)(PostsComponent);