export function addComment(postId,comment){

	return{
		type: 'ADD_COMMENT',
		comment,
		id: postId
	}
}


export function addPost(title,content,subredditId){

	return{
		type: 'ADD_POST',
		title,
		content,
		subredditId
	}
}