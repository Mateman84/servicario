import React from 'react';
import { ToastProvider } from 'react-toast-notifications'
import { Provider } from 'react-redux'
import initStore from './store'
import ServiceApp from './ServiceApp'
import { BrowserRouter as Router } from 'react-router-dom'

import { onAuthStateChanged, storeAuthUser, subscribeToMessages } from 'actions'

const store = initStore()

class App extends React.Component {

    componentDidMount() {
        this.unsubscribeAuth = onAuthStateChanged(authUser => {
            store.dispatch(storeAuthUser(authUser))
            console.log(store.getState())
            
            if (authUser) {
                this.unsubscribeMessages = store.dispatch(subscribeToMessages(authUser.uid))
            }
        })
    }

    //This part of creating an unsubscription function is confusing as hell, 
    //Basically I create a function whilst checking the store for authUser or messages.
    // I then call the function in the component will unmount to unmount the data from the store. 

    componentWillUnmount(){
        this.unsubscribeAuth()
        this.unsubscribeMessages()
    }

    //It seems wierd to me that you create a variable that unsubscribes   

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