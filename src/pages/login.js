import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signupcss.css';
import Layout from '../components/layout';
import { FaGoogle,FaFacebookF,FaTwitter,FaAngleDoubleLeft} from "react-icons/fa";
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
          </Container>
       
          </Container>
    </>


)
export default Login
