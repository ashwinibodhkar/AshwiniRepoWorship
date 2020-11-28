import PropTypes from "prop-types"
import React from "react"

//import {toggleDrawer,Drawer,state,list,Button} from '@material-ui/core';
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar, Container,Row,Col} from 'react-bootstrap';
import SearchWrapper from '../searchBar/searchwrapper';
import { Link } from 'gatsby';

 import Account_circleIcon from '@material-ui/icons/Person';

const Header = ({ siteTitle },{subtitle}) => (
 
  <Container fluid className="headPart ">
  <Container className="midContainer">
    <Row >
    <Col xs={4} className="text-white pl-0">
      <Account_circleIcon />
     </Col>
      <Col xs={8} className="p-0">   
        <Navbar  variant="dark" expand="lg" className="navWidth p-0">
         
          <Link to="/">
            <Navbar.Brand href="#home">
              <h3>tune</h3><h4>Worship</h4>
            </Navbar.Brand>
          </Link> 
               
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navBg">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allsongs">All Songs</Nav.Link>   
            <Nav.Link href="/artist">About Artist</Nav.Link>
            <Nav.Link href="/category">Categories</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>    
          </Nav>          
        </Navbar.Collapse>
      
        {/* <Button startIcon={<AddIcon />} variant="contained" color="secondary">
          Hello
          </Button> 
           */}
        
                           
      </Navbar> 
      
       
      
    </Col>
   
  </Row>
      
  </Container>
  </Container>
  
)


Header.propTypes = {
  siteTitle: PropTypes.string,
  subtitle:PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subtitle:``,
}



  
export default Header