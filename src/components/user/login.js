import React, { useRef, useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import './signup.css'
import { AuthContext } from "../../contexts/AuthContext"

import { Row,Col,Container, Form} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Layout from '../layout';
import { FaGoogle,FaFacebookF,FaTwitter} from "react-icons/fa";
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login, googleLogin,facebookLogin } = useContext(AuthContext)
    

    async function handleSubmit(e){
        e.preventDefault()
        
        
            try{
                setLoading(true)
                await login(emailRef.current.value, passwordRef.current.value)
                navigate('/');
                setError('')
                console.log('Sign in succesfull')
            }catch(error){
                setError('Failed to sign in')
            }
    
        

        setLoading(false)
    }

    async function handleGoogleLogin(){
        try{
            setLoading(true)
            await googleLogin()
            navigate("/")
            setError("")
            console.log("Google Sign in succesful")
        }
        catch(error){
            console.log("google login failed")
        }
    }
    
    async function handleFacebookLogin(){
        try{
            setLoading(true)
            await facebookLogin()
            navigate("/")
            setError("")
            console.log("Facebook Sign in succesful")
        }
        catch(error){
            console.log("Facebook login failed")
        }
    }

    return (
      <>
        <Container fluid className="userInput">
          <Container className="cont">
            <h1 className="text-center text-white pt-5 pb-3">Login</h1>
            <Form onSubmit={handleSubmit}>
              {error}
              <Row>
                <Col xs={12} md={6} className="text-center">
                    <Form.Label>What's your email :</Form.Label>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        ref={emailRef}
                        required
                    ></Form.Control>
                </Col>
              </Row>

                <Row>
                    <Col xs={12} md={6} className="text-center">
                        <Form.Label>Your password :</Form.Label>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Control 
                            type="password" 
                            placeholder="Your password"
                            id="userId"
                            ref={passwordRef} 
                            required>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col className="signupButton text-center py-1">
                        <Link to="/favourites">
                            <Button  
                                type="submit"
                                disabled={loading}
                            >
                                Login
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <p>Don't have account <Link to="/user/signup">Sign up here</Link></p>
                    </Col>
                </Row>
              
                <Row>
                    <Col className="social text-center">
                    <hr></hr>
                    <p>Or just Login with your social account</p>
                    <Row>
                        <Col className="socialIcons text-center">
                            <Button disabled={loading} onClick={handleGoogleLogin} ><FaGoogle /></Button>                  
                            <Button disabled={loading} onClick={handleFacebookLogin}><FaFacebookF /></Button>
                        </Col>
                    </Row>
                    
                    </Col>
                </Row> 
              
              
            </Form>
          </Container>
        </Container>
      </>
    )
}