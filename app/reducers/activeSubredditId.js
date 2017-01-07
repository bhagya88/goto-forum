export default function activeSubredditId(state = 'austin', action = {}){

	switch(action.type){

		case 'SET_ACTIVE':
		 return action.activeSubredditId;

		default :
		return state;
	}

}