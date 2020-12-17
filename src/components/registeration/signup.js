import React, { useState } from "react"
import {Link} from 'gatsby';
import { Modal,Row,Col,Container,Form} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import UserIcon from '@material-ui/icons/Person'
import './signUp.css';


const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <div className="signupPage">
    <UserIcon onClick={handleShow} />
     <Modal show={show} onHide={handleClose}  size="lg"  >
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col className="py-5 text-center">
              <h3>tune</h3><h4>Worship</h4>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <label>What should we call you : </label>
            </Col>
            <Col>                    
              <input placeholder="Enter your name"></input>
            </Col>
          </Row>
          <Row>
              <Col>
                <label>What's your email :</label>
              </Col>
              <Col>
                <input placeholder="Enter your email"></input>
              </Col>
          </Row>
          <Row>
              <Col>
                <label>Create a password</label>
              </Col>
              <Col>
                <input placeholder="Create a password"></input>
              </Col>
          </Row>
          <Row>
              <Col>
                <Button variant="contained" color="secondary"  >
                  Sign up 
                </Button>
              </Col>
          </Row>
          <Row>
            <Col>
            <p>Already have account <Link to="/loginPage">Login here</Link></p>
            </Col>
          </Row>  
          </Container>
          </Modal.Body>      
        
      </Modal>
        
    </div>
  )
}
export default SignUp