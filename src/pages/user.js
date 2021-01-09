import React from 'react'
import { Router } from '@reach/router'
import SignUp from '../components/user/signup'
import Login from '../components/user/login'
import PrivateRoute from '../components/user/PrivateRoute'
import Favourites from '../components/user/favourites'


export default function user() {
    return (

        
            <Router>
                <SignUp path='/user/signup' />
                <Login path='/user/login' />
                <Favourites path='/user/favourites'/>
                {/* <PrivateRoute path='/user/favourites' component={favourites} /> */}
            </Router>
        
        
    )
}