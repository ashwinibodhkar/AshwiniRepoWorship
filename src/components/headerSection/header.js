import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container,Row,Col} from 'react-bootstrap';
import Drawer from './drawer';

const Header = () => (
 
  <Container fluid className="headPart">
    <Container>
      <Row >
        <Col>         
          <Navbar  variant="dark" expand="lg" className="navWidth p-0">
            {/* sidebar */}
            <Drawer /> 
            {/* logo */}
              <Navbar.Brand href="#home">
                <h3>tune</h3><h4>Worship</h4>
              </Navbar.Brand>
              
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