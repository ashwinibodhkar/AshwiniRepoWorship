import React, { useState, useRef  } from "react"

import { graphql, useStaticQuery } from "gatsby"

import {Link} from 'gatsby';
import { Modal,Row,Col,Label,Form} from "react-bootstrap";

import Button from '@material-ui/core/Button';

import PersonIcon from '@material-ui/icons/Person';
import Fab from '@material-ui/core/Fab'
const SearchWidget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      
        <PersonIcon onClick={handleShow} />
     
        
        
      
      <Modal show={show} onHide={handleClose}  size="lg" style={{backround: "#fff"}} >
        <Modal.Body className="input-box m-0" closeButton>
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
export default SearchWidget
