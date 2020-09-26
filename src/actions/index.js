
import { FETCH_SERVICES_SUCCESS, FETCH_SERVICEBYID_SUCCESS, REQUEST_SERVICE } from 'types'

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

export const fetchServiceById = serviceId => dispatch => {
  dispatch({ type: FETCH_SERVICES_SUCCESS, services: {}})
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

export const resetPreviousService = () => (
  {
    type: FETCH_SERVICEBYID_SUCCESS,
    services: {}
  }
)


  