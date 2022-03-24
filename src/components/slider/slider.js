import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import slide1 from "../../images/slide21.jpg";
import slide2 from "../../images/slide11.jpg";
// import slide2 from "../../images/slide21.jpg";
import slide3 from "../../images/testimoniesLink1.jpg";
import slide4 from "../../images/slide41.jpg";
import slide5 from "../../images/slide51.jpg";
import ProgressiveImage from '../ProgressiveImage';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.css' 
import { render } from 'react-dom';
import { Link } from 'gatsby';



const slider = () => (
 
  
    
    <div>
      <Slider {...settings}>
          <div className='mom'>
            <img src={slide3} alt="" />
          </div>
          <div className='mom'>
          <img src={slide4} alt="" />
          </div>
          <div className='mom'>
          <img src={slide5} alt="" />
          </div>
          <div className='mom'>
          <img src={slide1} alt="" />
          </div>
          <div className='mom'>
          <img src={slide2} alt="" />
          </div>
          
        </Slider>

       
                
    </div>

)

       
export default slider  
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20%",
  slidesToShow: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 8000
  
};