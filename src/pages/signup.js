import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container, Form} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signupcss.css';
import Layout from '../components/layout';
import { FaGoogle,FaFacebookF,FaTwitter,FaAngleDoubleLeft} from "react-icons/fa";
import ButtonGroup from'@material-ui/core/ButtonGroup';

const SignUp = () => (  
    <>   
    <Layout />
     <Container fluid className="userInput pt-1 pb-5">
        <Container className="cont ">
          <Row>
            <Col>
              <h6 ><FaAngleDoubleLeft /><Link to="/"> Home</Link></h6>
            </Col>
          </Row>         
            <h1 className="text-center text-white pt-2 pb-3">Sign up</h1>
            
          <Form>
          <Row>
            <Col xs={12}  >
              <Form.Label>What should we call you : </Form.Label>
            </Col>
            <Col xs={12} >                    
              <Form.Control type="text" 
                    placeholder="Enter your name"
                    id="userName"></Form.Control>
            </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <Form.Label>What's your email :</Form.Label>
              </Col>
              <Col xs={12} >
                <Form.Control type="email" 
                      placeholder="Enter your email"
                      id="userEmail"></Form.Control>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <Form.Label>Create a password :</Form.Label>
              </Col>
              <Col xs={12} >
                <Form.Control type="password" 
                      placeholder="Create a password"
                      id="userId"></Form.Control>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <Form.Label>Your church's name:</Form.Label>
              </Col>
              <Col xs={12} >
                <Form.Control type="text" 
                      placeholder="church name"
                      id="userChurch"></Form.Control>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <Form.Label>City :</Form.Label>
              </Col>
              <Col xs={12} >
                <Form.Control type="text" 
                      placeholder="city"
                      id="userCity"></Form.Control>
              </Col>
          </Row>
          <Row>
              <Col className="signupButton text-center pt-2 pb-2">
                <Link to="/favourites">
                  <Button  type="submit">
                    Sign up 
                  </Button>
                </Link>
              </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <p>Already have account <Link to="/login">Login here</Link></p>
            </Col>
          </Row> 
          <Row>
            <Col className="social text-center">
              <hr></hr>
              <p>Or just sign in with your social account</p>
               <Row>
               <Col className="socialIcons text-center">
                  
                    <Button><FaGoogle /></Button>                  
                
                  
                
                    <Button clasName="mr-3"><FaTwitter /></Button>
                   

               
                    <Button><FaFacebookF /></Button>
                   
               
                  
                 </Col>
               </Row>
              
            </Col>

          </Row>
          </Form> 
          </Container>       
          </Container>
    </>


)
export default SignUp