import React from "react"
import {Link} from 'gatsby';
import { Row,Col,Container} from "react-bootstrap";
import './signupcss.css';

import Iconsbar from "../components/iconsbar/navigationLine";
import AddIcon from '@material-ui/icons/Add';



const Favourites
 = () => (  
 
    <>   
     <Container className="catBg">
        <h2 className=" text-center text-white py-5">Favourites</h2>
        <Row>
            <Col xs={12} className="favList text-white text-center">
                <h6><span role="img" aria-label="">&#128543;</span>seems like you don't have any song in your list</h6>
                <h5 className="text-center"><Link to="/allsongs">Create your List</Link></h5>
            </Col>
            <Col className="favList text-white text-center mt-3">
                <h4>You have 5 songs in your List</h4>
                {/* list */}
                <Link to ="/allsongs "><p><AddIcon /> Add songs</p></Link>
            </Col>
        </Row>
        
     </Container>
     <Iconsbar />
    </>


)
export default Favourites
