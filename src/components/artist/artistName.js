import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card} from 'react-bootstrap'
import ThankYou from "../../images/nach.jpg"
import dance from "../../../content/image/cameron-mendes.jpg";
import easter from "../../../content/image/kinneth.jpg"
import freedom from "../../../content/image/amit.jpg"
import mark from "../../../content/image/mark.jpg"
import Slider from "react-slick";



import "./artistName.css"


const artist = () => (
    <div >  

        <Slider {...settings} className="">
            <Link to="/category/thanks/">
                <div className="artistCards">
                    <img src={ThankYou} alt="" />
                    <p >sheldon bangera</p> 
                </div>
            </Link>

            <Link to="/category/dance/">
                <div className="artistCards">
                    <img src={dance} alt="" />
                    <p >Yeshua ministries</p> 
                </div>
            </Link>

            <Link to="/category/worship">
                <div className="artistCards">
                    <img src={easter} alt="" />
                    <p >Kinneth Silway</p> 
                </div>
            </Link>

            <Link to="/category/freedom/">
                <div className="artistCards">
                    <img src={freedom} alt="" />
                    <p >Amit Kamble</p> 
                </div>
            </Link>

            <Link to="/category/freedom/">
                <div className="artistCards">
                    <img src={mark} alt="" />
                    <p >Mark Tribhuvan</p> 
                </div>
            </Link>

           

        </Slider>     
        {/* <Row className="artistInline">   
            <Card xs={4}  >
                <Link to="/category/sheldon-bangera">
                    <Card.Img variant="top" src={ThankYou} /> 
                    <h6 className="text-white">sheldon bangera</h6>                   
                </Link>
            </Card>
            
        
            <Card xs={4}>
                <Link to="/category/dance/">
                    <Card.Img variant="top" src={dance} /> 
                    <h6 className="text-white">Yeshua ministries</h6>              
                </Link>
            </Card>
            

            <Card xs={4} >
                <Link to="/category/worship"> 
                    <Card.Img variant="top" src={easter} />
                    <h6 className="text-white">Kinneth Silway</h6>                
                </Link>
            </Card>
            

            <Card xs={4}>
                <Link to="/category/freedom/">
                    <Card.Img variant="top" src={freedom} /> 
                    <h6 className="text-white">Amit Kamble</h6>                
                </Link>
            </Card> 
        </Row>     */}
    </div>

)


export default artist
const settings = {
    className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 5,
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
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false
              
            }
          }
    ]
    };