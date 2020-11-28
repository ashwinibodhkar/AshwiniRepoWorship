import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'

import {  FaAngleDoubleRight} from "react-icons/fa"
import "./trending.css";
import rajKare from '../../images/tu-raj-kare.jpg';
import Pyarkaru from '../../../content/image/Pyar-Karu-Shelly-Reddy.jpg'
import chattan from '../../../content/image/chattan.jpg';
import mazayeshu from '../../../content/image/maza-yeshu-mark-tribhuvan.jpg';
import sangtere from '../../../content/image/Sang-Tere1.png';
const category = () => (
    
    <div className="container">
         
              <Row className="trend">
              <Card xs={6}  >
                  <Link to="/category/thanks/">
                      <Card.Img variant="top" src={Pyarkaru} />
                         
                                
                  </Link>
              </Card> 
              <Card xs={6}  >
                  <Link to="/chattan">                    
                      <Card.Img variant="top" src={chattan} />                 
                  </Link>
              </Card>
              <Card xs={6}  >
              <Link to="/Maazha-Yeshu-Mark-Tribhuvan">
                   
                       <Card.Img variant="top" src={mazayeshu} />                 
                      
                  </Link>
              </Card>
              <Card xs={6}  >
              <Link to="/Sang%20Tere%20by%20Bridge%20Music">
                    
                        <Card.Img variant="top" src={sangtere} />                 
                        
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
