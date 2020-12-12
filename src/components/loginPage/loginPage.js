import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Label,Form,Modal} from 'react-bootstrap'
import UserIcon from '@material-ui/icons/Person'


const signupPage = () => (
    
    <div>
        
        <Modal  >
            <Modal.Body closeButton>
                <Form>
                    <Label>Enter your email :</Label>
                    <br></br>
                    <input placeholder="Enter your email"></input>
                    <br></br>
                    <br></br>

                    <Label>Enter your password</Label>
                    <br></br>
                    <input placeholder="Create a password"></input>
                    <br></br>
                    <br></br>

                    <Button variant="contained" color="secondary"  >
                       Login  
                    </Button>

                    <br></br>

                    <p>Don't have account <Link to="/signup">Sign up here</Link></p>

                </Form>
            </Modal.Body>
        </Modal> 
         
    </div>

)


export default signupPage

