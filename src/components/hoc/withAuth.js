
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

/*
What is a higher order component(HOC)?
"It is a function that takes a component and returns it with some additional functionality"
usually you use "with" as prefix

*/

const withAuth = Component => {
    
    class WithAuth extends React.Component {

        render() {
            const { auth } = this.props
            return auth.isAuth ? <Component {...this.props} /> : <Redirect to="/login" /> 
        }
    }   

    // const mapStateToProps = (state) => ({auth: state.auth})
    // return connect(mapStateToProps)(WithAuth)
    
    //const mapStateToProps = (state) => ({auth: state.auth})
    return connect(({auth}) => ({auth}))(WithAuth)
}

export default withAuth