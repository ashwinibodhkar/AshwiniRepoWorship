import React, { useRef, useState, useContext } from 'react'
import { Link, navigate } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import './signup.css'
import { AuthContext, useAuth  } from "../../contexts/AuthContext"
import { Row,Col,Container, Form} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Layout from '../layout';
import { FaGoogle,FaFacebookF,FaTwitter,FaAngleDoubleLeft} from "react-icons/fa";
import ButtonGroup from'@material-ui/core/ButtonGroup';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const nameRef = useRef()
    const cityRef = useRef()
    const churchNameRef = useRef()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { signup, currentUser, googleLogin,facebookLogin } = useContext(AuthContext)
    

    async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            setError('Passwords do not match')
        }
        else{
            try{
                setLoading(true);
                await signup(emailRef.current.value, passwordRef.current.value);
                setError('')
                navigate('/')
            }catch(error){
                setError('Failed to signup')
            }
        }
        

        setLoading(false)
    }

    function usersCollection(uid, name, city){
        console.log("New User uid: ", uid)
        //console.log("currentUser email: ", email)
        console.log("currentuser name: ", name)
        console.log("currentuser city: ", city)
        // firebase.firestore().collection('users').doc(currentUser.uid).set({
        //     name: name,
        //     city: city
        // }).then(() => {
        //     console.log('user added to collection')
        // }).catch(function(error) {
        //     console.error("Error creating document: ", error);
        // })
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
            <Container fluid className="userInput pt-1 pb-5">
                <Container className="cont ">

                    <Row>
                        <Col>
                            <h6 ><FaAngleDoubleLeft /><Link to="/"> Home</Link></h6>
                        </Col>
                    </Row>         
                    <h1 className="text-center text-white pt-2 pb-3">Sign up</h1>

                    <Form onSubmit={handleSubmit}>
                        {error}

                        <Row>
                            <Col xs={12}  >
                                <Form.Label>What should we call you : </Form.Label>
                            </Col>
                            <Col xs={12} >                    
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your name"
                                    id="userName"
                                    ref={nameRef} 
                                    required
                                >
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} >
                                <Form.Label>What's your email :</Form.Label>
                            </Col>
                            <Col xs={12} >
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email"
                                    id="userEmail"
                                    ref={emailRef} 
                                >  
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} >
                                <Form.Label>City :</Form.Label>
                            </Col>
                            <Col xs={12} >
                                <Form.Control type="text" 
                                    placeholder="city"
                                    id="userCity"
                                    ref={cityRef} 
                                    required>
                                    
                                </Form.Control>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col xs={12} >
                                <Form.Label>Your church's name:</Form.Label>
                            </Col>
                            <Col xs={12} >
                                <Form.Control 
                                    type="text" 
                                    placeholder="church name"
                                    id="userChurch"
                                    ref={churchNameRef} 
                                >

                                </Form.Control>
                            </Col>
                        </Row>
                        

                        <Row>
                            <Col xs={12} >
                                <Form.Label>Create a password :</Form.Label>
                            </Col>
                            <Col xs={12} >
                                <Form.Control 
                                    type="password" 
                                    placeholder="Create a password"
                                    id="userId"
                                    ref={passwordRef}
                                >

                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} >
                                <Form.Label>Re-Enter password :</Form.Label>
                            </Col>
                            <Col xs={12} >
                                <Form.Control 
                                    type="password" 
                                    placeholder="Re-Enter password"
                                    id="userId"
                                    ref={confirmPasswordRef}
                                >

                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="signupButton text-center pt-2 pb-2">
                                <Link to="/favourites">
                                <Button  
                                    type="submit"
                                    disabled={loading}
                                >
                                    Sign up 
                                </Button>
                                </Link>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <p>Already have account <Link to="/user/login">Login here</Link></p>
                            </Col>
                        </Row> 

                        <Row>
                            <Col className="social text-center">
                            <hr></hr>
                            <p>Or just sign in with your social account</p>
                            <Row>
                                <Col className="socialIcons text-center">
                                
                                    <Button disabled={loading} onClick={handleGoogleLogin}><FaGoogle /></Button>                  
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