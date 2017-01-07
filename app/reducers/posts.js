export default function posts(state =[], action = {}){

	switch(action.type){

		case 'ADD_COMMENT' :

		    var newState = state.map(function(post){

		    	var newPost = Object.assign({},post);

		    	if(newPost._id === action.id){
		    	
		    		newPost.comments = post.comments.concat(action.comment);
		    	}

		    	return newPost;
		    });


			return newState;

			case 'ADD_POST':
				var newState = state.concat({title: action.title, content: action.content, _id : Data.now()})

			default:
			  return state;
	}

	return state;
}