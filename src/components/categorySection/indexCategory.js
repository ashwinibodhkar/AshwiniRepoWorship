import React from 'react'
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'
import ChristmasThumb from '../../images/christmas-thumbnail.png'
import ThankYou from "../../images/THANK YOU.jpg"
import dance from "../../images/Dance (1).jpg"
import easter from "../../images/easter.jpg"
import freedom from "../../images/freedom1.png"
import bridge from "../../images/bridge.jpg"
import cassette from "../../images/cassette.jpg"
import Slider from "react-slick";
import {  FaAngleDoubleRight} from "react-icons/fa"
import "./indexCategory.css"


const category = () => (
    
        <div>
            <Slider {...settings} className="">
                <div className="catCards">
                    <img src={ThankYou} alt="" />
                    <p >Thank Youdgghfffffffffffffffffff</p> 
                </div>
                <div className="catCards">
                    <img src={dance} alt="" />
                    <p >Dance</p> 
                </div>
                <div className="catCards">
                    <img src={easter} alt="" />
                    <p >Thank Youdgghfffffffffffffffffff</p> 
                </div>
                <div className="catCards">
                    <img src={freedom} alt="" />
                    <p >Thank Youdgghfffffffffffffffffff</p> 
                </div>
                <div className="catCards">
                    <img src={bridge} alt="" />
                    <p >Thank Youdgghfffffffffffffffffff</p> 
                </div>
                <div className="catCards">
                    <img src={cassette } alt="" />
                    <p >Thank Youdgghfffffffffffffffffff</p> 
                </div>

            </Slider>
        {/* <Row className="categoryBox">
            <Col xs={6} id="catCards"  >
            <Link to="/category/thanks/">
                    <Card >
                   
                        <Card.Img variant="top" src={ThankYou} />
                        <h6 >Thank Youdgghfffffffffffffffffff</h6> 
                        
                    
                    </Card>
                    </Link> 
            </Col> 
            <Col xs={6} id="catCards"  >
                <Link to="/category/dance/">
                    <Card >
                        <Card.Img variant="top" src={dance} />                 
                        <h6 >Thank You</h6> 
                        {/* <h3>Dance</h3> 
                    </Card>
                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
                
                <Link to="/category/worship">
                <Card >  
                        <Card.Img variant="top" src={easter} />                    
                <h6 >Thank You</h6> </Card> 

                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
            <Link to="/category/freedom/">
                <Card >
                     <Card.Img variant="top" src={freedom} />                 
                    <h6 >Thank You</h6> {
                    /* <h3>Freedom</h3>  
                    </Card>
                </Link>
            </Col>
            <Col xs={6} id="catCards"  >
                <Link to="/category/bridge-music/">
                <Card >
                     <Card.Img variant="top" src={bridge} />
                     <h6 >Thank You</h6> 
                     </Card>                                     
                </Link>
            </Col>
            
            {/* <button xs={6} className="categoryBtn text-center ">
                <Link to="/category">                
                    <FaAngleDoubleRight size={40} ></FaAngleDoubleRight>                
                </Link>
            </button> 
        </Row>               */}
        </div>  

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
              infinite: false,
              dots: true
            }
          }
    ]
    };
