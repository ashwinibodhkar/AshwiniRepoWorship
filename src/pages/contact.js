import React from 'react';
import {Form, Col, Row, Container} from "react-bootstrap";
import Layout from '../components/layout';
import "./contact.css";
import Iconsbar from "../components/iconsbar/navigationLine";
import Button from '@material-ui/core/Button'
const ContactForm = () => (
  <>
  
<Layout/>
<div className="bgcontainer">
  <Container>
    <Form class="form" name="contact" 
          method="POST" target="_blank" 
          action="https://formsubmit.co/letsworshipnagpur@gmail.com">
        <h2 className="text-center text-white py-5"> Contact Us</h2>  
      <div className="outlineForm pb-5 mb-5">
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" required/>
      </Form.Group>
      
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" name="message" placeholder="Request a song or suggest an improvment"/>
      </Form.Group>
      <Row>
        <Col className="text-center">
          <Button  type="submit" >
        Submit
      </Button>
        </Col>
      </Row>
      
      </div>
    </Form>
  </Container>
  <Iconsbar/>
</div>
</>
)

export default ContactForm

