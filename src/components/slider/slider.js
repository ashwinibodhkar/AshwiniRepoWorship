import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import slide1 from "../../images/slide11.jpg";
import slide2 from "../../images/slide21.jpg";
import slide3 from "../../images/testimoniesLink1.jpg";
import slide4 from "../../images/slide41.jpg";
import slide5 from "../../images/slide51.jpg";
import './slider.css' 
import { Link } from 'gatsby';

const slider = () => (
    
    <div>
        <Carousel className="slide">
          <Carousel.Item interval={3000}>
            <Link to="/allsongs">
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              /> 
            </Link>           
          </Carousel.Item>
          
          <Carousel.Item interval={3000}>
            <Link to="/allsongs">
              <img
                className="d-block w-100"
                src={slide2}
                alt="First slide"
              /> 
            </Link>           
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Link to="/artist">
              <img
                className="d-block w-100"
                src={slide3}
                alt="First slide"
              /> 
            </Link>           
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Link to="/category/holy-communion">
              <img
                className="d-block w-100"
                src={slide4}
                alt="First slide"
              /> 
            </Link>           
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slide5}
              alt="First slide"
            />            
          </Carousel.Item>
        </Carousel>        
    </div>

)


export default slider