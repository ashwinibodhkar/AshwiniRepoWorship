import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Carousel } from 'react-bootstrap'
import slide1 from "../../images/pexels-suvan-chowdhury-144428.jpg"
// import slide2 from "../../images/pexels-thibault-trillet-167491.jpg"
import Search from '../search';

import "./slider.css";

const slider = () => (
    
    <div>
        <Container fluid >
          <Row>
            <Col xs={12} className=" p-0">
              <div className="slider">
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  
                </Carousel.Item>          
               
                         
              </Carousel>
              <Row>
                <Col className="topHeadi">
                  <h1>Lets Worship Together</h1>
                  <div className="search-box" >
                          <Search/>
                  </div>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Container>
    </div>

)


export default slider