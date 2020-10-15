
import { FETCH_SERVICES_SUCCESS, FETCH_SERVICEBYID_SUCCESS, REQUEST_SERVICE, SET_AUTH_USER, RESET_AUTH_STATE } from 'types'

import * as api from "api"

// -------------- SERVICES STARTS --------------

//Actions can't return functions. They have to return plain objects. This can be solved with "middleware"
// Or by writing your own "middleware"  

export const fetchServices = () => dispatch => 
  api.fetchServices()
  .then(services => dispatch(
    {
      type: FETCH_SERVICES_SUCCESS,
      services
    }
  )
)  

export const fetchServiceById = serviceId => (dispatch, getState) => {

  const lastService = getState().selectedService.item

  if(lastService.id && lastService.id === serviceId){
    return Promise.resolve()
  }

  dispatch({ type: REQUEST_SERVICE})
  return api.fetchServiceById(serviceId)
  .then(services => dispatch(
    {
      type: FETCH_SERVICEBYID_SUCCESS,
      services
    }
  )
) 
}

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10)
  newService.user = userId

  return api.createService(newService)
}

// -------------- SERVICES ENDS --------------

/* -------------- AUTH STARTS --------------

I funktionen nedan så tar jag emot data för att registrera en användare med hjälp av funktionen i
"api.js" datan jag tar in, 'registerFormData' destrukturiserar jag när jag skriver {...registerFormData}

*/
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

// -------------- AUTH ENDS --------------



  