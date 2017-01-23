// create all actions associated with currentPostId
export function setCurrent(postId){

	return{
		type: 'SET_CURRENT',
		currentPostId: postId
	}
}