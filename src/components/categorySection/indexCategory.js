import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card ,Col} from 'react-bootstrap'
import ThankYou from "../../images/THANK YOU (1).jpg"
import dance from "../../images/Dance (1) (1).jpg"
import easter from "../../images/easter (1).jpg"
import freedom from "../../images/freedom1.png"
import bridge from "../../images/bridge (1).jpg"
import {  FaAngleDoubleRight} from "react-icons/fa"
import "./indexCategory.css"


const category = () => (
    
        <div>
        <Row className="categoryBox">
            <Col xs={6} id="catCards"  >
            <Link to="/category/thanks/">
                    <Card >
                   
                        <Card.Img variant="top" src={ThankYou} />
                        <h6 className="text-white">Thank Youdgghfffffffffffffffffff</h6> 
                        
                    
                    </Card>
                    </Link> 
            </Col> 
            <Col xs={6} id="catCards"  >
                <Link to="/category/dance/">
                    <Card >
                        <Card.Img variant="top" src={dance} />                 
                        <h6 className="text-white">Thank You</h6> 
                        {/* <h3>Dance</h3>  */}
                    </Card>
                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
                
                <Link to="/category/worship">
                <Card >  
                        <Card.Img variant="top" src={easter} />                    
                <h6 className="text-white">Thank You</h6> </Card> 

                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
            <Link to="/category/freedom/">
                <Card >
                     <Card.Img variant="top" src={freedom} />                 
                    <h6 className="text-white">Thank You</h6> {
                    /* <h3>Freedom</h3>  */}
                    </Card>
                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
                <Link to="/category/bridge-music/">
                <Card >
                     <Card.Img variant="top" src={bridge} />
                     <h6 className="text-white">Thank You</h6> 
                     </Card>                                      {/* <h3>Bridge<br></br> Music</h3>  */}
                </Link>
            </Col>
            
            {/* <button xs={6} className="categoryBtn text-center ">
                <Link to="/category">                
                    <FaAngleDoubleRight size={40} ></FaAngleDoubleRight>                
                </Link>
            </button> */}
        </Row>              
        </div>  

)


export default category
