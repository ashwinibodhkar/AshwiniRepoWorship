import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card } from 'react-bootstrap'
import sheldon from "../../../content/image/sheldon.jpg"
import amit from "../../../content/image/amit1.jpg"
import yeshua from "../../../content/image/cameron-mendes.jpg"
import bridge from "../../../content/image/bridgeMusic.jpg"

import "./testimony.css"


const aboutArtist = () => (
    
    <div className="container" >
         
    <Row className="testimonyInline">
   
    <Card xs={4}  >
        <Link to="/Sheldon-Bangera/">
            <Card.Img variant="top" src={sheldon} /> 
            <h6 className="text-white">sheldon bangera</h6>                   
        </Link>
    </Card>
    
 
    <Card xs={4}>
        <Link to="/Amit-Kamble/">
            <Card.Img variant="top" src={amit} /> 
            <h6 className="text-white">Amit Kamble</h6>              
        </Link>
    </Card>
    

    <Card xs={4} >
        <Link to="Yeshua%20Ministries/"> 
             <Card.Img variant="top" src={yeshua} />
             <h6 className="text-white">yeshua ministries</h6>                
        </Link>
    </Card>
    

    <Card xs={4}>
        <Link to="/Bridge-Music/">
            <Card.Img variant="top" src={bridge} /> 
            <h6 className="text-white">Bridge Music</h6>                
        </Link>
    </Card>
    

    
  
</Row>
    
</div>

)


export default aboutArtist
