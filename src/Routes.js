import React from 'react'
import { Switch, Route } from "react-router-dom"

import HomePage from 'pages/Home'
import FaqPage from 'pages/Faq'
import ServicesPage from 'pages/Services'
import ProfilePage from 'pages/Profile'
import LoginPage from 'pages/Login'
import RegisterPage from 'pages/Register'
import ServiceDetail from 'pages/ServiceDetail'
import SecretPage from 'pages/Secret'
import ServiceCreate from 'pages/servicePages/CreateService'
import UserServices from 'pages/servicePages/UserServices'

/* Goes through the paths from top to botton, so when it comes to my services
"ServiceCreate" services needs to be above the "ServiceDetail" page
*/

const Routes = () => {
    return (
        <Switch>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/secret">
                <SecretPage />
            </Route>
            <Route path="/faq">
                <FaqPage />
            </Route>
            <Route path="/services/me">
                <UserServices />
            </Route>
            <Route path="/services/new">
                <ServiceCreate />
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
    )
}

export default Routes