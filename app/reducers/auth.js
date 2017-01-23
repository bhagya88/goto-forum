export default function auth(state = {
	isLoggedIn : false,
	username: "",
	loginMessage:"",
	signupMessage:""
	//redirectUrl: '/login'

}, action = {}){

	switch(action.type){

		case 'SET_PROFILE' :

			return { ...state , isLoggedIn: true, username: action.username}

		case 'SET_LOGIN_MSG':

			return {...state, loginMessage: action.msg }

		case 'SET_SIGNUP_MSG':

				return {...state, signupMessage: action.msg }

		default :

		return state;
	}

}