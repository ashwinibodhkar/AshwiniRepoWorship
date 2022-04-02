import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'
import {  FaAngleDoubleRight} from "react-icons/fa"

import rajKare from '../../images/tu-raj-kare.jpg';
import Pyarkaru from '../../../content/image/Pyar-Karu-Shelly-Reddy.jpg'
import chattan from '../../../content/image/chattan.jpg';
import mazayeshu from '../../../content/image/maza-yeshu-mark-tribhuvan.jpg';
import sangtere from '../../../content/image/Sang-Tere1.png';
import Slider from "react-slick";

import "../categorySection/indexCategory.css"

const category = () => (
    <div>
        <Slider {...settings} className="">
                <Link to="/category/thanks/">
                    <div className="catCards">
                        <img src={Pyarkaru} alt="" />
                        <h6>Pyar karu</h6> 
                        <p>Shelly Reddy</p>
                    </div>
                </Link>

                <Link to="/chattan">
                    <div className="catCards">
                        <img src={chattan} alt="" />
                        <h6>chattan</h6> 
                        <p>Bridge Music</p>
                    </div>
                </Link>

                <Link to="/Maazha-Yeshu-Mark-Tribhuvan">
                    <div className="catCards">
                        <img src={mazayeshu} alt="" />
                        <h6>Maazha Yeshu</h6> 
                        <p>Mark Tribhuvan</p>
                    </div>
                </Link>

                <Link to="/Sang%20Tere%20by%20Bridge%20Music">
                    <div className="catCards">
                        <img src={sangtere} alt="" />
                        <h6>sang tere</h6> 
                        <p>Bridge Music</p>
                    </div>
                </Link>

                <Link to="/category/bridge-music/">
                    <div className="catCards">
                        <img src={rajKare} alt="" />
                        <h6>raj Kare</h6> 
                        <p>Jaago Music</p>
                    </div>
                </Link>

                
            </Slider>
    </div>
    
    // <div className="container"> 
    //     <Row className="trend">
    //         <Card xs={6}  >
    //             <Link to="/category/thanks/">
    //                 <Card.Img variant="top" src={Pyarkaru} />                 
    //             </Link>
    //         </Card> 
    //         <Card xs={6}  >
    //             <Link to="/chattan">                    
    //                 <Card.Img variant="top" src={chattan} />                 
    //             </Link>
    //         </Card>
    //         <Card xs={6}  >
    //         <Link to="/Maazha-Yeshu-Mark-Tribhuvan">                
    //                 <Card.Img variant="top" src={mazayeshu} />                    
    //             </Link>
    //         </Card>
    //         <Card xs={6}  >
    //         <Link to="/Sang%20Tere%20by%20Bridge%20Music">
                
    //                 <Card.Img variant="top" src={sangtere} />                 
                    
    //             </Link>
    //         </Card>
    //         <Card xs={6}  >
    //             <Link to="/category/bridge-music/">
                
    //                 <Card.Img variant="top" src={rajKare} />                 
                    
    //             </Link>
    //         </Card>
            
    //         <button xs={6} className="trendBtn text-center ">
    //             <Link to="/category">
                
    //             <FaAngleDoubleRight size={40} ></FaAngleDoubleRight>
                
    //             </Link>
    //         </button>
    //     </Row>              
    // </div>

)


export default category
const settings = {
    className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      responsive: [
        {
            breakpoint: 824,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false
            
            }
          }
    ]
    };
