import React  from "react";
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';


import { Row,Col,Card, Container,Carousel } from 'react-bootstrap'
 import DanceSongs from "../../images/DANCE for the LORD.mp4"
import chordsClick from "../../images/allSongs.mp4"
import './gif.css';
import aniVideo from "../../images/_favourite worshipper.mp4";

const gif = () => (


    <div>
      <Container fluid>
        <Container className="videoSlider">
          <Row>
            <Col >
              <Carousel>
                <Carousel.Item interval={3000}>
                  <video autoPlay loop muted>
                    <source src={chordsClick} type="video/mp4" />
                  </video>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                  <video autoPlay loop muted>
                    <source src={DanceSongs} type="video/mp4" />
                  </video>
                </Carousel.Item>
                
                <Carousel.Item interval={4000}>
                  <video autoPlay loop muted>
                    <source src={aniVideo} type="video/mp4" />
                  </video>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        
        </Container>    
      </Container>    
    </div>

)


export default gif
  