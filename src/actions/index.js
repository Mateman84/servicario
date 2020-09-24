
import { FETCH_SERVICES_SUCCESS, FETCH_SERVICEBYID_SUCCESS } from 'types'

import * as api from "api"

//Actions can't return functions. They have to return plain objects. This can be solved with "middleware"
// Or by writing your own "middleware"  

export const fetchServices = () => 
  api.fetchServices()
  .then(services => (
    {
      type: FETCH_SERVICES_SUCCESS,
      services
    }
  )
)  

export const fetchServiceById = serviceId => 
  api.fetchServiceById(serviceId)
  .then(services => (
    {
      type: FETCH_SERVICEBYID_SUCCESS,
      services
    }
  )
) 


  