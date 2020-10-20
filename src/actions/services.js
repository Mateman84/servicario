
import { FETCH_SERVICES_SUCCESS, 
    FETCH_SERVICEBYID_SUCCESS, 
    REQUEST_SERVICE, 
    FETCH_USER_SERVICES_SUCCESS } from 'types'
  
  import * as api from "api"
  

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

export const fetchUserServices = userId => dispatch =>
api.fetchUserServices(userId).then(services => 
dispatch({type: FETCH_USER_SERVICES_SUCCESS, services}))

export const fetchServiceById = serviceId => (dispatch, getState) => {

  const lastService = getState().selectedService.item

  if(lastService.id && lastService.id === serviceId){
    return Promise.resolve()
  }

  dispatch({ type: REQUEST_SERVICE})
  return api.fetchServiceById(serviceId)
  .then(async services => {
    //services.user = await api.getUserProfile(services.user)

    const user = await services.user.get()
    services.user = user.data()
    services.user.id = user.id

    dispatch({type: FETCH_SERVICEBYID_SUCCESS, services}
  )}
) 
}

export const createService = (newService, userId) => {
  newService.price = parseInt(newService.price, 10)
  newService.user = api.createRef("profiles", userId)

  return api.createService(newService)
}
