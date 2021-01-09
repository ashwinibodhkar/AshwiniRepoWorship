//for firebase cloud messaging
//import 'firebase/messaging'

//for gatsby-plugin-firebase
import React from 'react'
import "firebase/auth"
import "firebase/firestore"
import AuthProvider from './src/contexts/AuthContext'

export const wrapRootElement = ({ element }) => (
  <AuthProvider>{element}</AuthProvider>
)

//for updating service worker on updates.
export const onServiceWorkerUpdateReady = () => window.location.reload(true)