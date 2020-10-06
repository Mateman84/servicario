
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

/* -------------- AUTH --------------

I funktionen nedan så tar jag emot data för att registrera en användare med hjälp av funktionen i
"api.js" datan jag tar in, 'registerFormData' destrukturiserar jag när jag skriver {...registerFormData}

*/
export const register = (registerFormData) => api.registerUser({...registerFormData})





  