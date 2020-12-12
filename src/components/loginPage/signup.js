// import React, { useState, useRef  } from "react"

// import {Link} from 'gatsby';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row,Col,Label,Form,Modal} from 'react-bootstrap'
// import UserIcon from '@material-ui/icons/Person'
// import Button from '@material-ui/core/Button';


// const signupPage = () => {

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true); 

//     return(
//         <div>
//         <UserIcon onClick={handleShow} />
//         <Modal show={show} onHide={handleClose} >
//             <Modal.Body closeButton>
//                 <Form>
//                     <Label>What should we call you : </Label>
//                     <br></br>                    
//                     <input placeholder="Enter your name"></input>
//                     <br></br>
//                     <br></br>

//                     <Label>What's your email :</Label>
//                     <br></br>
//                     <input placeholder="Enter your email"></input>
//                     <br></br>
//                     <br></br>

//                     <Label>Create a password</Label>
//                     <br></br>
//                     <input placeholder="Create a password"></input>
//                     <br></br>
//                     <br></br>

//                     <Button variant="contained" color="secondary"  >
//                        Sign up 
//                     </Button>

//                     <br></br>

//                     <p>Already have account <Link to="/loginPage">Login here</Link></p>

//                 </Form>
//             </Modal.Body>
//         </Modal> 
         
//     </div>

// )
// } 
  

    




// export default signupPage

import React, { useState, useRef  } from "react"
import {Link} from 'gatsby';
import { Modal,Row,Col,Label,Form} from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'
import UserIcon from '@material-ui/icons/Person'


const signupPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div >
      
      <UserIcon onClick={handleShow} />
      
        
        
      
      <Modal show={show} onHide={handleClose}  size="lg"  >
        <Modal.Body className=" m-0" closeButton>
        <Form>
                    <Label>What should we call you : </Label>
                    <br></br>                    
                    <input placeholder="Enter your name"></input>
                    <br></br>
                    <br></br>

                    <Label>What's your email :</Label>
                    <br></br>
                    <input placeholder="Enter your email"></input>
                    <br></br>
                    <br></br>

                    <Label>Create a password</Label>
                    <br></br>
                    <input placeholder="Create a password"></input>
                    <br></br>
                    <br></br>

                    <Button variant="contained" color="secondary"  >
                       Sign up 
                    </Button>

                    <br></br>

                    <p>Already have account <Link to="/loginPage">Login here</Link></p>

                </Form>
        </Modal.Body>
      </Modal> 
    </div>
  )
}
export default signupPage
