
import React  from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const onlyGuests = Component => {

    class OnlyGuests extends React.Component {
        
        render() {
            const { auth } = this.props
            return auth.isAuth ? <Redirect to="/" /> : <Component {...this.props} />
        }
    }   
    const mapStateToProps = (state) => ({auth: state.auth})
    return connect(mapStateToProps)(OnlyGuests)
}

export default onlyGuests