import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container, Form} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signupcss.css';
import Layout from '../components/layout';
import { FaGoogle,FaFacebookF,FaTwitter} from "react-icons/fa";
import ButtonGroup from '@material-ui/core/ButtonGroup'

const Login
 = () => (  
    <>   
    <Layout />
     <Container fluid className="userInput py-4">
        <Container className="cont">
           <Row>
              <Col className="text-center ">
                  <h1>Login</h1>
              </Col>
          </Row>
          <Form >

          
          <Row>
              <Col xs={12} md={6} className="text-center">
                <Form.Label>What's your email :</Form.Label>
              </Col>
              <Col xs={12} md={6}>
                <Form.Control type="email" 
                      placeholder="Enter your email"
                      id="userEmail" required></Form.Control>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6} className="text-center">
                <Form.Label>Your password :</Form.Label>
              </Col>
              <Col xs={12} md={6}>
                <Form.Control type="password" 
                      placeholder="Your password"
                      id="userId" required></Form.Control>
              </Col>
          </Row>
          
          <Row>
              <Col className="signupButton text-center py-1">
                <Link to="/favourites">
                  <Button  type="submit">
                    Login
                  </Button>
                </Link>
              </Col>
          </Row>
          <Row>
            <Col className="text-center">
            <p>Don't have account <Link to="/signup">Sign up here</Link></p>
            </Col>
          </Row> 
          <Row>
            <Col className="social text-center">
              <hr></hr>
              <p>Or just Login with your social account</p>
               <Row>
                 <Col className="SocialIcons text-center">
                  <ButtonGroup disableElevation variant="contained"  >
                    <Button><FaGoogle /></Button>
                    <Button>Google</Button>
                  </ButtonGroup>
                  
                  <ButtonGroup disableElevation variant="contained" className="my-3 mx-3">
                    <Button><FaTwitter /></Button>
                    <Button>Twitter</Button>
                  </ButtonGroup>

                  <ButtonGroup disableElevation variant="contained" >
                    <Button><FaFacebookF /></Button>
                    <Button>Facebook</Button>
                  </ButtonGroup>
                  
                 </Col>
               </Row>
              
            </Col>

          </Row> 
          </Form>
          </Container>
       
          </Container>
    </>


)
export default Login
