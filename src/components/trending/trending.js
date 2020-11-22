import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'

import {  FaAngleDoubleRight} from "react-icons/fa"
import "./trending.css";
import rajKare from '../../images/tu-raj-kare.jpg';

const category = () => (
    
    <div className="container">
         
              <Row className="trend">
              <Card xs={6}  >
                  <Link to="/category/thanks/">
                      <Card.Img variant="top" src={rajKare} />
                         
                                
                  </Link>
              </Card> 
              <Card xs={6}  >
                  <Link to="/category/dance/">
                    
                      <Card.Img variant="top" src={rajKare} />                 
                     
                  </Link>
              </Card>
              <Card xs={6}  >
              <Link to="/category/worship">
                   
                       <Card.Img variant="top" src={rajKare} />                 
                      
                  </Link>
              </Card>
              <Card xs={6}  >
              <Link to="/category/freedom/">
                    
                        <Card.Img variant="top" src={rajKare} />                 
                        
                  </Link>
              </Card>
              <Card xs={6}  >
                  <Link to="/category/bridge-music/">
                    
                       <Card.Img variant="top" src={rajKare} />                 
                       
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
