
import { SET_AUTH_USER, 
    RESET_AUTH_STATE, 
    FETCH_USER_SERVICES_SUCCESS, 
    FETCH_USER_MESSAGES_SUCCESS } from 'types'

import { combineReducers } from 'redux'

const initAuth = () => {
    const user = (state = {}, action) => {
        switch(action.type) {
            case SET_AUTH_USER:
                return action.user
            case FETCH_USER_SERVICES_SUCCESS:
                //console.log("Hej hallå :" + {...state, user:{ ...state.user, services: action.services}})
                return {...state, services: action.services }
            case FETCH_USER_MESSAGES_SUCCESS:
                return {...state, messages: action.messages }
            default:
                return state
        }

        
    }
    const isAuth = (state = false, action) => {
        switch(action.type) {
            case SET_AUTH_USER:
                return !!action.user
            default:
                return state    
        }
    }
    const isAuthResolved = (state = false, action) => {
        switch(action.type) {
            case SET_AUTH_USER:
                return true
            case RESET_AUTH_STATE:
                return false
            default:
                return state
        }

    }
    return combineReducers({
        user,
        isAuth,
        isAuthResolved
    }) 
}

const auth = initAuth()

export default auth

// Värden i javascript kommer med en associerad boolean.
// "The !! (double bang) logical operators return a value’s truthy value" 

/*  =============== Exempel =================
const userA = getUser('existingUser'); // { name: Patrick, status: 'cool' }
const userB = getUser('nonExistingUser'); // null

const userAExists = !!userA; // true
const userBExists = !!userB; // false
*/
