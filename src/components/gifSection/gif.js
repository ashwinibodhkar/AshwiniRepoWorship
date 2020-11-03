import React  from "react";
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';


import { Row,Col,Card } from 'react-bootstrap'
 import DanceSongs from "../../images/DANCE for the LORD.mp4"
import chordsClick from "../../images/allSongs.mp4"
import './gif.css';
import aniVideo from "../../images/_favourite worshipper.mp4";

const gif = () => (


    <div>
        <Row className="feature py-4" >
              <Col  xs={12} md={6} className="text-center">
                
              <Link to="/artist">
                <Card  
                data-aos="fade-down" data-aos-delay="20"
                      data-aos-duration="300"
                      >
                  <video autoPlay loop muted>
                    <source src={aniVideo} type="video/mp4" />
                  </video>                  
                </Card>
              </Link>
              
              </Col>
              <Col xs={12} md={6} className="artist align-self-center text-white text-center">
                <h2  
                data-aos="fade-up" data-aos-delay="30"
                      data-aos-duration="500"
                      > Artist</h2>
              </Col>
            </Row>
          
          
            <Row className="feature py-4  ">
              <Col xs={12} md={6} className="align-self-center text-white text-center">
                <h2 
                data-aos="fade-right" data-aos-delay="30"
                      data-aos-duration="500"
                  >Dance Songs</h2>
              </Col>
              <Col   xs={12} md={6} className="text-center">
              <Link to="/category/dance/">
                <Card 
                data-aos="fade-down" data-aos-delay="20"
                      data-aos-duration="300"
                      >
                 <video autoPlay loop muted>
                    <source src={DanceSongs} type="video/mp4" />
                  </video>
                 </Card>
              </Link>
              </Col>
            </Row>
           
           
            <Row className="feature py-4">
              <Col   xs={12} md={6} className="text-center">
              <Link to="/allsongs">
                <Card 
                data-aos="fade-down" data-aos-delay="20"
                      data-aos-duration="300"
                      >
                   <video autoPlay loop muted>
                    <source src={chordsClick} type="video/mp4" />
                  </video>
                </Card>
              </Link>
              </Col>
              <Col xs={12} md={6} className="align-self-center text-white text-center">
                <h2 
                data-aos="fade-up" data-aos-delay="20"
                      data-aos-duration="200" 
                     >Worship Songs</h2>
              </Col>            
            </Row>
    </div>

)


export default gif
  