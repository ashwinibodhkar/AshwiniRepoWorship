import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar, Container,Row,Col} from 'react-bootstrap';
import { Link } from 'gatsby';
import PersonIcon from '@material-ui/icons/Person'
// import Login from '../loginPage/signup'
import Ham from '../drawer';
const Header = ({ siteTitle },{subtitle}) => (
 
  <Container fluid className="headPart ">
    <Container className="midContainer">
      <Row >
        <Col>   
          <Navbar  variant="dark" expand="lg" className="navWidth p-0">
            <Link to="/">
              <Navbar.Brand href="#home">
                <h3>tune</h3><h4>Worship</h4>
              </Navbar.Brand>
            </Link>
            
            <PersonIcon />             
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