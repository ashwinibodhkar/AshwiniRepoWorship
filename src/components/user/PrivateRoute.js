import { navigate } from 'gatsby'
import React, { Component, useContext } from 'react'
import {AuthContext} from "../../contexts/AuthContext"

export default function PrivateRoute({ component: Component, location, ...rest }) {

    const { currentUser } = useContext(AuthContext)

    if(!currentUser && location.pathname !== `/user/login`) {
        navigate('/user/login')
        return null
    }

    else{
        return <Component {...rest} />
    }
    
}