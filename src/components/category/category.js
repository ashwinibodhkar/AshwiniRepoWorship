import React from 'react'
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card } from 'react-bootstrap'
import ThankYou from "../../images/thank-you.jpg"
import dance from "../../images/dance.jpg"
import easter from "../../images/easter.jpg"
import freedom from "../../images/freedom1.jpg"
import bridge from "../../images/bridge.jpg"
import { FaArrowCircleRight } from "react-icons/fa"
import "./category.css"


const category = () => (
    
    <div>
         
              <Row className="categoryBox">
                <Col>
                  <Link to="/category/thanks/">
                    <Card className="card1">
                   
                      <Card.Img variant="top" src={ThankYou} />   
                    </Card>              
                  </Link>

                  <Link to="/category/dance/">
                    <Card>
                      <Card.Img variant="top" src={dance} />                 
                    </Card>
                  </Link>

                  <Link to="/category/worship">
                    <Card>
                       <Card.Img variant="top" src={easter} />                 
                    </Card>
                  </Link>

                  <Link to="/category/freedom/">
                    <Card>
                        <Card.Img variant="top" src={freedom} />                 
                    </Card>
                  </Link>
                  
                  <Link to="/category/bridge-music/">
                    <Card>
                       <Card.Img variant="top" src={bridge} />                 
                    </Card>
                  </Link>
                  <button>
                <Link to="/category">
                  <FaArrowCircleRight size={60} color="black"></FaArrowCircleRight>
                </Link>
              </button>  
                </Col>
              </Row> 
    </div>

)


export default category
