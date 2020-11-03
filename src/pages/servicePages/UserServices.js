import React from 'react'
import withAuth from 'components/hoc/withAuth'
import {fetchUserServices} from 'actions'
import ServiceItem from 'components/service/ServiceItem'
import {createRef} from 'actions/index'

class UserService extends React.Component {

    getUserServices = () => {

    }

    componentDidMount(){
        const { auth: { user }, dispatch } = this.props
        //const serviceItemRef = createRef("services", "GqTGnhcdrtKudAKNnue1")
        dispatch(fetchUserServices(user.uid))
    }

    render() {
        //const { services } = this.props.auth.user
        const { servicesItemRef } = createRef("services", "GqTGnhcdrtKudAKNnue1")
        debugger
        return (
            <div className="container">
                <div className="content-wrapper">
                    <h1 className="title">User Services</h1>
                    <p className="title">{`${this.props.auth.user.email}`}</p>
                    <div className="columns is-multiline">
                        {
                            servicesItemRef.map(s => (
                                    <div key={s.id} className="column">
                                        <ServiceItem service={s} />
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(UserService)