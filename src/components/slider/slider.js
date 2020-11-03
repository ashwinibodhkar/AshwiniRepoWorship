import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card,Carousel } from 'react-bootstrap'
import slide1 from "../../images/16.jpg"
import slide2 from "../../images/18.jpg"
import Search from '../search';

import "./slider.css";

const slider = () => (
    
    <div>
        <Container fluid >
          <Row>
            <Col xs={12} className="slider p-0">
              <Card>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  
                </Carousel.Item>          
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={slide2}
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
              </Card>
            </Col>
          </Row>
        </Container>
    </div>

)


export default slider