import React from 'react'
import withAuth from 'components/hoc/withAuth'
import {fetchUserServices} from 'actions'
import ServiceItem from 'components/service/ServiceItem'

class UserService extends React.Component {

    componentDidMount(){
        const { auth: { user }, dispatch } = this.props
        dispatch(fetchUserServices(user.uid))
    }

    render() {
        const { services } = this.props.auth.user 
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h1 className="title">User Services</h1>
                    <div className="columns is-multiline">
                        {
                            services.map(serv => (
                                <div key={serv.id} className="columns">
                                    <ServiceItem service={serv}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(UserService)