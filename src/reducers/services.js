import { FETCH_SERVICES_SUCCESS } from 'types'
import { combineReducers } from 'redux'

//Avsnitt 2:31 börjar vi skapa reducers för varje enskil state.

const initServices = () => {

    const all = (state = [], action) => {
        switch(action.type) {
            case FETCH_SERVICES_SUCCESS:
                return action.services
            default:
                return state
        }
    }
    return combineReducers({all})
}

const services = initServices()

export default services