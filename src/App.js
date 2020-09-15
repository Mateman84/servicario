import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from 'pages/home'
import FaqPage from 'pages/Faq'
import ServicesPage from 'pages/Services'
import ProfilePage from 'pages/Profile'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import LoginPage from 'pages/Login'
import RegisterPage from 'pages/Register'

//React component
//Functional Component
function App() {
    //NOT HTML
    //JUST JSX()
    return(
        <div>
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
        </div>
        );
    }
    
                    
                    
                    

    export default App;