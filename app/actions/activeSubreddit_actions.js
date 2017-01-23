// create all actions associated with activeSubreddit
export function setActive(subreddit){

	return {
		type: 'SET_ACTIVE',
		activeSubreddit : subreddit
	}
}