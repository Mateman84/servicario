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

const Routes = () => {
    return (
        <Switch>
            <Route path="/Register">
                <RegisterPage />
            </Route>
            <Route path="/Login">
                <LoginPage />
            </Route>
            <Route path="/Secret">
                <SecretPage />
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
    )
}

export default Routes