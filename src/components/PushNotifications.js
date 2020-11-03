// import React, {useEffect } from 'react'
// import firebase from 'firebase'
// import 'firebase/messaging'


// export default function PushNotification () {

//     var firebaseConfig = {
//       apiKey: "AIzaSyCE1r0H6x5qjbnfdnFjuBD0qugGRPwvaaQ",
//       authDomain: "letsworship-16f70.firebaseapp.com",
//       databaseURL: "https://letsworship-16f70.firebaseio.com",
//       projectId: "letsworship-16f70",
//       storageBucket: "letsworship-16f70.appspot.com",
//       messagingSenderId: "335872098592",
//       appId: "1:335872098592:web:5531690d5ef5d6545fd745",
//       measurementId: "G-0DVFJZNJB0"
//     };
//     // Initialize Firebase
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     //useEffect Hook is used to avoid buil errors and firebase will load only when on window
      
//       // Retrieve Firebase Messaging object.
//       const messaging = firebase.messaging();
        
      

//       function receiveToken() {
//       //showToken('loading...');
//       // [START get_token]
//       // Get registration token. Initially this makes a network call, once retrieved
//       // subsequent calls to getToken will return from cache.
//       messaging.getToken({vapidKey: 'BAsc1-9tAI7q_1Mi1ZZTSchHAPXHHzVA4vOQBfOss9gDEhKwYjm6iS_FRLHTFKudBxSnhbSG94764nrhNXhpEsg'})
//       .then((currentToken) => {
//         if (currentToken) {
//           console.log('Generated Token: '+ currentToken)
//           sendTokenToServer(currentToken);
//         } else {
//           // Show permission request.
//           console.log('No registration token available. Request permission to generate one.');
//           // Show permission UI.
//           setTokenSentToServer(false);
//         }
//       }).catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//         //showToken('Error retrieving registration token. ', err);
//         setTokenSentToServer(false);
//       });
//       // [END get_token]
      
//       }
  
  
//       // Send the registration token your application server, so that it can:
//       // - send messages back to this app
//       // - subscribe/unsubscribe the token from topics
//       function sendTokenToServer(currentToken) {
//         if (!isTokenSentToServer()) {
//           console.log('Sending token to server...');
//           // TODO(developer): Send the current token to your server.
//           setTokenSentToServer(true);
//         } else {
//           console.log('Token already sent to server so won\'t send it again ' +
//               'unless it changes');
//         }
    
//       }
    
//       function isTokenSentToServer() {
//         return window.localStorage.getItem('sentToServer') === '1';
//       }
    
//       function setTokenSentToServer(sent) {
//         window.localStorage.setItem('sentToServer', sent ? '1' : '0');
//       }

//       receiveToken();

//       function notifyMe() {
//           // Let's check if the browser supports notifications
//           if (!("Notification" in window)) {
//             alert("This browser does not support desktop notification");
//           }
        
//           // Let's check whether notification permissions have already been granted
//           else if (Notification.permission === "granted") {
//             // If it's okay let's create a notification
//             var notification = new Notification("Hi there!");
//             receiveToken();
//           }
        
//           // Otherwise, we need to ask the user for permission
//           else if (Notification.permission !== "denied") {
//             Notification.requestPermission().then(function (permission) {
//               // If the user accepts, let's create a notification
//               if (permission === "granted") {
//                 var notification = new Notification("Hi there!");
//                 receiveToken();
//               }
//             });
//           }
        
//           // At last, if the user has denied notifications, and you 
//           // want to be respectful there is no need to bother them any more.
//       }

//       return(
//         <button onClick={() => notifyMe() } style={{backgroundColor: 'blue'}}>
//             Send Notifications
//         </button> 

//       )
// }











