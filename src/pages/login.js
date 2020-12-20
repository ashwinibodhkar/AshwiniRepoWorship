import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signup.css';


const Login
 = () => (  
    <>   
     <Container fluid className="userInput py-5">
        <Container className="cont">
           <Row>
              <Col className="text-center py-5">
                  <h1>Login</h1>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6} className="text-center">
                <label>What's your email :</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="email" 
                      placeholder="Enter your email"
                      id="userEmail"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} md={6} className="text-center">
                <label>Your password :</label>
              </Col>
              <Col xs={12} md={6}>
                <input type="password" 
                      placeholder="Your password"
                      id="userId"></input>
              </Col>
          </Row>
          
          <Row>
              <Col className="signupButton text-center py-5">
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
          </Container>
       
          </Container>
    </>


)
export default Login
