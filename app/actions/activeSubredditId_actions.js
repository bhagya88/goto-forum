export function setActive(subredditId){

	return {
		type: 'SET_ACTIVE',
		activeSubredditId : subredditId
	}
}