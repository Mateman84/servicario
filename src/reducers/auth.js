
import { SET_AUTH_USER, RESET_AUTH_STATE, FETCH_USER_SERVICES_SUCCESS } from 'types'

const INITIAL_STATE = {
    user: null,
    isAuth: false,
    isAuthResolved: false,
    services: []
}

const auth = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_AUTH_USER:
            return {user: action.user, isAuthResolved: true, isAuth: !!action.user}
        case RESET_AUTH_STATE:
            return {...state, isAuthResolved: false}
        case FETCH_USER_SERVICES_SUCCESS:
            console.log("Hej hallå :" + {...state, user:{ ...state.user, services: action.services}})
            return {...state, user:{ ...state.user, services: action.services}}
        default:
            return state
    }
}

export default auth

// Värden i javascript kommer med en associerad boolean.
// "The !! (double bang) logical operators return a value’s truthy value" 

/*  =============== Exempel =================
const userA = getUser('existingUser'); // { name: Patrick, status: 'cool' }
const userB = getUser('nonExistingUser'); // null

const userAExists = !!userA; // true
const userBExists = !!userB; // false
*/
