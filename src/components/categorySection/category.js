import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card } from 'react-bootstrap'
import ThankYou from "../../images/THANK YOU.jpg"
import dance from "../../images/Dance (1).jpg"
import easter from "../../images/easter.jpg"
import freedom from "../../images/bridgeMusic.jpg"
import bridge from "../../images/bridge.jpg"
import { FaAngleDoubleDown} from "react-icons/fa"
import "./category.css"
import Button from '@material-ui/core/Button';

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
              </Row>
              <Row>
                <Col className="categoryBtn text-center py-5">
                
                  <button >
                  <Link to="/category">
                    <p>See More</p>
                    <FaAngleDoubleDown size={40} ></FaAngleDoubleDown>
                  </Link>
                </button>  
                </Col>
              
                  
                
              </Row> 
    </div>

)


export default category
