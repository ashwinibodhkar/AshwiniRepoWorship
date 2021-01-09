import React, { useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/messaging'


function requestPermissionOnRender(){
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  else if(Notification.permission === "denied"){
    console.log('Notification Permission not given')
  }
  
  else if(Notification.permission !== "denied"){
    Notification.requestPermission().then(function(result) {
      console.log('Notification Permisson '+ result);
    });
  }
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    console.log('Sending token to server...');
    // TODO(developer): Send the current token to your server.
    setTokenSentToServer(true);
  } else {
    console.log('Token already sent to server so won\'t send it again ' +
        'unless it changes');
  }

}

function isTokenSentToServer() {
  return window.localStorage.getItem('sentToServer') === '1';
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}

export default function PushNotification () {
 
 

  var firebaseConfig = {
    apiKey: "AIzaSyCE1r0H6x5qjbnfdnFjuBD0qugGRPwvaaQ",
    authDomain: "letsworship-16f70.firebaseapp.com",
    databaseURL: "https://letsworship-16f70.firebaseio.com",
    projectId: "letsworship-16f70",
    storageBucket: "letsworship-16f70.appspot.com",
    messagingSenderId: "335872098592",
    appId: "1:335872098592:web:5531690d5ef5d6545fd745",
    measurementId: "G-0DVFJZNJB0"
  };
  //Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  

  //requesting permisson on first render
  useEffect( () => {
    requestPermissionOnRender();

    const messaging = firebase.messaging();

    messaging.getToken({vapidKey: 'BAsc1-9tAI7q_1Mi1ZZTSchHAPXHHzVA4vOQBfOss9gDEhKwYjm6iS_FRLHTFKudBxSnhbSG94764nrhNXhpEsg'})
      .then((currentToken) => {
        if (currentToken) {
          console.log('Generated Token: '+ currentToken)
          sendTokenToServer(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
          setTokenSentToServer(false);
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        setTokenSentToServer(false);
      });

    messaging.onMessage((payload) => {
        alert('onMessage: ', payload);
    })
      
    
  }) 
  //end useEffect

  

  //ask permisson on button click
  function requestPermissionByButton() {
    if (Notification.permission === "granted") {
      console.log('Notification Permission already granted')
    }
    else if(Notification.permission !== 'granted'){
      alert('Change browser settings')
    }
  }
  
  
  return(
    <>
    <button onClick={() => requestPermissionByButton()} 
            style={{backgroundColor: 'seagreen'}}>
      Allow Notifications
    </button>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} className="text-center">
                <img src={Logo} alt="tune-worship"></img>
              </Col>
              <Col xs={12} className="text-center">
                <p>wants to send you latest updates of tuneWorship</p>
                <Button variant="contained" color="secondary" onClick={() => requestPermissionByButton()}>Allow Notifications</Button>
              </Col>
            </Row>
            
          </Container>
          

        </Modal.Body>
        
      </Modal> */}
  </>
  )
}