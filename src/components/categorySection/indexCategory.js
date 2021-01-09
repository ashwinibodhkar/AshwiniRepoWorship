import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'
import ThankYou from "../../images/THANK YOU (1).jpg"
import dance from "../../images/Dance (1) (1).jpg"
import easter from "../../images/easter (1).jpg"
import freedom from "../../images/freedom1.png"
import bridge from "../../images/bridge (1).jpg"
import {  FaAngleDoubleRight} from "react-icons/fa"
import "./indexCategory.css"


const category = () => (
    
    <div className="container">         
        <Row className="categoryBox">
            <Card xs={6}  >
                <Link to="/category/thanks/">
                    <Card.Img variant="top" src={ThankYou} />
                    <h3>Thanks</h3>   
                            
                </Link>
            </Card> 
            <Card xs={6}  >
                <Link to="/category/dance/">
                
                    <Card.Img variant="top" src={dance} />                 
                    <h3>Dance</h3> 
                </Link>
            </Card>
            <Card xs={6}  >
            <Link to="/category/worship">
                
                    <Card.Img variant="top" src={easter} />                 
                    <h3>Easter</h3> 
                </Link>
            </Card>
            <Card xs={6}  >
            <Link to="/category/freedom/">
                
                    <Card.Img variant="top" src={freedom} />                 
                    <h3>Freedom</h3> 
                </Link>
            </Card>
            <Card xs={6}  >
                <Link to="/category/bridge-music/">
                
                    <Card.Img variant="top" src={bridge} />                 
                    <h3>Bridge<br></br> Music</h3> 
                </Link>
            </Card>
            
            <button xs={6} className="categoryBtn text-center ">
                <Link to="/category">                
                    <FaAngleDoubleRight size={40} ></FaAngleDoubleRight>                
                </Link>
            </button>
        </Row>              
    </div>

)


export default category
