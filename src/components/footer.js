import React from 'react'
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap'
//import PushNotifications from './PushNotifications'
const footer = () => (
    
    <div>
        <Container fluid className="footer">
            <Row className="row align-items-end py-3">
                <Col className="text-center">
                     <p>letsworship.in</p>
                </Col>
                                       
            </Row>
        </Container>

        {/* <PushNotifications/> */}
    </div>

)


export default footer