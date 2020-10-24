
import { SET_AUTH_USER, 
    RESET_AUTH_STATE } from 'types'
  
  import * as api from 'api'
  
/* I funktionen nedan så tar jag emot data för att registrera en användare med hjälp av funktionen i
"api.js" objektet jag tar in, 'registerFormData' destrukturiserar jag när jag skriver {...registerFormData}
vilket innebär att register = registerformdata-objektet*/

export const register = (registerFormData) => api.registerUser({...registerFormData})
export const login = loginData => api.login({...loginData})
export const logout = () => dispatch => api.logout().then(_ => dispatch({user: null, type: SET_AUTH_USER}))
export const onAuthStateChanged = onAuthCallback => api.onAuthStateChanged(onAuthCallback)

export const storeAuthUser = authUser => dispatch => {
  dispatch({type: RESET_AUTH_STATE})
  if(authUser) {
    return api
    .getUserProfile(authUser.uid)
    .then(userWithProfile => dispatch({user: userWithProfile, type: SET_AUTH_USER}))
  } else {
    return dispatch({user: null, type: SET_AUTH_USER})
  }
}
