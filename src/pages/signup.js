import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signupcss.css';


const SignUp = () => (  
    <>   
     <Container fluid className="userInput py-5">
        <Container className="cont ">
          
          <Row>
              <Col className="text-center py-5">
                  <h1>Sign up</h1>
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="">
              <label>What should we call you : </label>
            </Col>
            <Col xs={12} md={6}>                    
              <input type="text" 
                    placeholder="Enter your name"
                    id="userName"></input>
            </Col>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                <label>What's your email :</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="email" 
                      placeholder="Enter your email"
                      id="userEmail"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                <label>Create a password :</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="password" 
                      placeholder="Create a password"
                      id="userId"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                <label>Your church's name:</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="text" 
                      placeholder="church name"
                      id="userChurch"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                <label>City :</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="text" 
                      placeholder="city"
                      id="userCity"></input>
              </Col>
          </Row>
          <Row>
              <Col className="signupButton text-center py-5">
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
          </Container>
       
          </Container>
    </>


)
export default SignUp