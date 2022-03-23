import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import slide1 from "../../images/12.png";
import slide2 from "../../images/13.png";
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
            <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
          <div className='mom'>
          <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
          <div className='mom'>
          <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
          <div className='mom'>
          <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
          <div className='mom'>
          <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
          <div className='mom'>
          <ProgressiveImage src={slide1} placeholder={slide2} />
          </div>
        </Slider>

       
                
    </div>

)

       
export default slider  
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "15%",
  slidesToShow: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 8000
  
};