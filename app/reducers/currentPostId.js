export default function currentPostId(state = 1, action = {}){

	switch(action.type){

		case 'SET_CURRENT':
		 return action.currentPostId;
		default :
		return state;
	}

}