
import React from 'react'
import withAuth from 'components/hoc/withAuth'

const Secret = (props) => {
    return(
        <h1>I am Secret page, only for Auth users eyes</h1>
    )
}

export default withAuth(Secret)