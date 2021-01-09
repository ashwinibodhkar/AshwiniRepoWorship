import React, { createContext, useContext, useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'

export const AuthContext = createContext();

// export function useAuth(){
//     useContext(AuthContext)
// }

export default function AuthProvider({children}) {

    

    const[currentUser, setCurrentUser] = useState();
  
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                                setCurrentUser(user)
                                setLoading(false)
                                if(user){
                                    console.log(user.email)
                                }else{
                                    console.log('current user: ', currentUser)
                                    console.log("No user available")
                                }
        })

        return unsubscribe
    }, [])
    
    function signup(email, password){
        const createUser = firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then((userCredential) => {
                                var userData = userCredential.user;
                                let name = document.querySelector('#name-signup')
                                let city = document.querySelector('#city-signup')
                                console.log("name: ", name.value)
                                console.log("user id: ",userData.uid )
                                userCredential.user.updateProfile({
                                    displayName: name.value
                                })
                                firebase.firestore().collection('users').doc(userData.uid).set({
                                    name: name.value,
                                    city: city.value
                                },{ merge: true })
                            })
                            .catch((error) => {
                                var errorCode = error.code;
                                var errorMessage = error.message;
                            });
        return createUser;
    }

    

   

    function login(email, password){
        const loggedInUser = firebase.auth().signInWithEmailAndPassword(email, password)
                                .then((userCredential) =>{
                                    const userData = userCredential.user;
                                    console.log("Succesfull sign in")
                                    console.log(userData.uid)
                                })
                                .catch((error) =>{
                                    var errCode = error.errCode
                                    var errMessage = error.message
                                    console.log("error.errCode: "+error.errCode)
                                    console.log("error.message: "+error.message)
                                })
        return loggedInUser
    }

    function logout(email, password){
        const logOutUser = firebase.auth().signOut()
                                .then(() =>{
                                    console.log("Succesfull sign out")
                                })
                                .catch((error) =>{
                                    var errCode = error.errCode
                                    var errMessage = error.message
                                    console.log("error.errCode: "+error.errCode)
                                    console.log("error.message: "+error.message)
                                })
        return logOutUser
    }

    //for google auth
    function googleLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();

        const googleUser = firebase.auth().signInWithPopup(provider)
                            .then(function(result) {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                var token = result.credential.accessToken;
                                // The signed-in user info.
                                var user = result.user;
                                firebase.firestore().collection('users').doc(user.uid).set({
                                    name: user.displayName
                                },{ merge: true })
                                
                            }).catch(function(error) {
                                // Handle Errors here.
                                var errorCode = error.code;
                                var errorMessage = error.message;
                                // The email of the user's account used.
                                var email = error.email;
                                // The firebase.auth.AuthCredential type that was used.
                                var credential = error.credential;
                                // ...
                            });
        return googleUser
    }

    function facebookLogin(){
        const provider = new firebase.auth.FacebookAuthProvider();
        const facebookUser = firebase.auth().signInWithPopup(provider)
                                .then(function(result) {
                                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                                    var token = result.credential.accessToken;
                                    // The signed-in user info.
                                    var user = result.user;
                                    firebase.firestore().collection('users').doc(user.uid).set({
                                        name: user.displayName
                                    },{ merge: true })
                                }).catch(function(error) {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    // The email of the user's account used.
                                    var email = error.email;
                                    // The firebase.auth.AuthCredential type that was used.
                                    var credential = error.credential;
                                    // ...
                                });
        return facebookUser;
    }


    const value ={
        currentUser,
        signup,
        login,
        logout,
        googleLogin,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}