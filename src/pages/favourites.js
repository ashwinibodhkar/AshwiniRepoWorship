import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container, Media} from "react-bootstrap";
import './signupcss.css';
import bridge from "../images/bridge.jpg"
import Iconsbar from "../components/iconsbar/navigationLine";
const Favourites
 = () => (  
    <>   
     <Container>
        <h2 className="text-center text-white py-5">Favourites</h2>
        <Row>
            <Col xs={12} md={4} className="favMedia text-white">
            <Media>
                <img
                width={64}
                height={64}
                className=" mr-3"
                src={bridge}
                alt="Generic placeholder"
                />
                <Media.Body className="align-self-center">
                <Link to="/allsongs">
                    <h5 >Create Playlist</h5>
                </Link>                
                </Media.Body>
            </Media>
            </Col>
        </Row>
     </Container>
     <Iconsbar />
    </>


)
export default Favourites
