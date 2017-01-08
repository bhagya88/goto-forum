export default function activeSubredditId(state = '', action = {}){

	switch(action.type){

		case 'SET_ACTIVE':
		 return action.activeSubreddit;

		default :
		return state;
	}

}