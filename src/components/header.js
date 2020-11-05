import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar, Container,Row,Col} from 'react-bootstrap';
import SearchWrapper from '../components/searchwrapper';
import { Link } from 'gatsby';
// import ExampleCss from "./exampleCss";


const Header = ({ siteTitle },{subtitle}) => (
  <Container fluid className="headPart py-3">
  <Container className="midContainer">
    
    <Row >
      <Col>
      
      
      <Navbar  variant="dark" expand="lg" className="navWidth p-0">
      <SearchWrapper />
        <Link to="/">
          <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
        </Link> 
               
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allsongs">All Songs</Nav.Link>   
            <Nav.Link href="/artist">Artist</Nav.Link>
            <Nav.Link href="/category">Categories</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>    
          </Nav>          
        </Navbar.Collapse>                    
      </Navbar> 
      <div className="outside">
      <SearchWrapper  />  
      </div>   
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