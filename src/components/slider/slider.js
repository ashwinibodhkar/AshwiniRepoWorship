import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import slide1 from "../../images/15.jpg";
import './slider.css' 

const slider = () => (
    
    <div>
        <Carousel className="slide">
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />            
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />            
          </Carousel.Item>
        </Carousel>

        
    </div>

)


export default slider