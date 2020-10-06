
import React from 'react'
import Routes from './Routes'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'

class ServiceApp extends React.Component {

    renderApplication = () => 
            <React.Fragment>
                <Navbar />
                <Navbar id="navbar-clone" />
                <Sidebar />
                <Routes />
            </React.Fragment>
        
    

    render(){
        return this.renderApplication()
    }
}

export default ServiceApp