import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'
import Aaradhna from "../../../content/image/Teri_Aradhana_Bridge_Music.jpg"
import Gaoon from "../../../content/image/gaaoon-hallelujah.jpg"
import Papa from "../../../content/image/papa.jpg"
import Zehnaseeb from "../../../content/image/zehenaseeb.jpg"
import YeshuMilGaya from "../../../content/image/yeshu-mil-gaya.png"
import {  FaAngleDoubleRight} from "react-icons/fa"
import Slider from "react-slick";
import "../categorySection/indexCategory.css"


export default function NewArrivals() {
   
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
        
    
    return(
        <div>
            <Slider {...settings} className="">
                <Link to="/Teri-Adradhna-Bridge-Music/">
                    <div className="catCards">
                        <img src={Aaradhna} alt="" />
                        <h6>Teri Aradhna Ho</h6> 
                        <p>Bridge Music</p>
                    </div>
                </Link>

                <Link to="/Gaaoon-Hallelujah-Nations-of-Worship/">
                    <div className="catCards">
                        <img src={Gaoon} alt="" />
                        <h6>Gaaoon Hallelujah</h6> 
                        <p> Nations of Worship</p>
                    </div>
                </Link>

                <Link to="/Papa-Bridge-music/">
                    <div className="catCards">
                        <img src={Papa} alt="" />
                        <h6>Papa</h6> 
                        <p>Bridge Music</p>
                    </div>
                </Link>

                <Link to="/Zehenaseeb-yeshua-ministries/">
                    <div className="catCards">
                        <img src={Zehnaseeb} alt="" />
                        <h6>Zehenaseeb</h6> 
                        <p>yeshua ministries</p>
                    </div>
                </Link>

                <Link to="/Yeshu-mil-gaya-Sheldon-Bangera/">
                    <div className="catCards">
                        <img src={YeshuMilGaya} alt="" />
                        <h6>Yeshu mil gaya</h6>
                        <p>Sheldon Bangera</p> 
                    </div>
                </Link>
               
            </Slider>
        </div>
        // <div className="container">         
        //     <Row className="categoryBox">
        //         <Card xs={6}  >
        //             <Link to="/Teri-Adradhna-Bridge-Music/">
        //                 <Card.Img variant="top" src={Aaradhna} />
        //                 <h3 className="exSongTitle">Aradhna</h3>   
                                
        //             </Link>
        //         </Card> 
        //         <Card xs={6}  >
        //             <Link to="/Gaaoon-Hallelujah-Nations-of-Worship/">
                    
        //                 <Card.Img variant="top" src={Gaoon} />                 
        //                 <h3 className="exSongTitle">Hallelujah</h3> 
        //             </Link>
        //         </Card>
        //         <Card xs={6}  >
        //         <Link to="/Papa-Bridge-music/">
                    
        //                 <Card.Img variant="top" src={Papa} />                 
        //                 <h3 className="exSongTitle">Papa</h3> 
        //             </Link>
        //         </Card>
        //         <Card xs={6}  >
        //         <Link to="/Zehenaseeb-yeshua-ministries/">
                    
        //                 <Card.Img variant="top" src={Zehnaseeb} />                 
        //                 <h3 className="exSongTitle">Zehenaseeb</h3> 
        //             </Link>
        //         </Card>
        //         <Card xs={6}  >
        //             <Link to="/Yeshu-mil-gaya-Sheldon-Bangera/">
                    
        //                 <Card.Img variant="top" src={YeshuMilGaya} />                 
        //                 <h3 className="exSongTitle">Mil Gaya</h3> 
        //             </Link>
        //         </Card>
                
        //         <button xs={6} className="categoryBtn text-center ">
        //             <Link to="/allsongs">                
        //                 <FaAngleDoubleRight size={40} ></FaAngleDoubleRight>                
        //             </Link>
        //         </button>
        //     </Row>              
        // </div>
    )

}
