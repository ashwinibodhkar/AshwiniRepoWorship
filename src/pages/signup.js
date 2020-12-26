import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import './signupcss.css';
import Layout from '../components/layout';
import { FaGoogle,FaFacebookF,FaTwitter,FaAngleDoubleLeft} from "react-icons/fa";
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
          <Row>
              <Col className="text-center ">
                  <h1>Sign up</h1>
              </Col>
          </Row>
          <Row>
            <Col xs={12}  className="">
              <label>What should we call you : </label>
            </Col>
            <Col xs={12} >                    
              <input type="text" 
                    placeholder="Enter your name"
                    id="userName"></input>
            </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <label>What's your email :</label>
              </Col>
              <Col xs={12} >
                <input type="email" 
                      placeholder="Enter your email"
                      id="userEmail"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <label>Create a password :</label>
              </Col>
              <Col xs={12} >
                <input type="password" 
                      placeholder="Create a password"
                      id="userId"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <label>Your church's name:</label>
              </Col>
              <Col xs={12} >
                <input type="text" 
                      placeholder="church name"
                      id="userChurch"></input>
              </Col>
          </Row>
          <Row>
              <Col xs={12} >
                <label>City :</label>
              </Col>
              <Col xs={12} >
                <input type="text" 
                      placeholder="city"
                      id="userCity"></input>
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
                 <Col className="SocialIcons text-center">
                  <h3><FaGoogle /><FaFacebookF /><FaTwitter /></h3>
                 </Col>
               </Row>
              
            </Col>

          </Row> 
          </Container>       
          </Container>
    </>


)
export default SignUp