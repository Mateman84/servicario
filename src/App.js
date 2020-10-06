import React from 'react';

import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import initStore from './store'
import ServiceApp from './ServiceApp'
import { BrowserRouter as Router } from 'react-router-dom'

import { onAuthStateChanged, storeAuthUser } from 'actions'

const store = initStore()

//React component
//Functional Component
class App extends React.Component {
    //NOT HTML
    //JUST JSX()

    componentDidMount() {
        this.unsubscribeAuth = onAuthStateChanged(authUser => {
            store.dispatch(storeAuthUser)
        })
    }

    componentWillUnmount(){
        this.unsubscribeAuth()
    }

    render() {
        return(
            <Provider store={ store }>
                <ToastProvider>
                    <Router>
                        <ServiceApp />  
                    </Router>       
                </ToastProvider>
            </Provider>
        )
    }
}

export default App;