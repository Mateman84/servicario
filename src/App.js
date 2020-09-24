import React from 'react';

import { Provider } from 'react-redux'
import initStore from './store'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from 'pages/home'
import FaqPage from 'pages/Faq'
import ServicesPage from 'pages/Services'
import ProfilePage from 'pages/Profile'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import LoginPage from 'pages/Login'
import RegisterPage from 'pages/Register'
import ServiceDetail from 'pages/ServiceDetail';

const store = initStore()

//React component
//Functional Component
function App() {
    //NOT HTML
    //JUST JSX()
    return(
        <Provider store={ store }>
            <Router>
            <Sidebar />
            <Navbar />
            <Navbar id="navbar-clone" />
                <Switch>
                    <Route path="/Register">
                        <RegisterPage />
                    </Route>
                    <Route path="/Login">
                        <LoginPage />
                    </Route>
                    <Route path="/faq">
                        <FaqPage />
                    </Route>
                    <Route path="/services/:serviceId">
                        <ServiceDetail />
                    </Route>
                    <Route path="/services">
                        <ServicesPage />
                    </Route>
                    <Route path="/profile">
                        <ProfilePage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </Provider>
        );
    }
    
                    
                    
                    

    export default App;