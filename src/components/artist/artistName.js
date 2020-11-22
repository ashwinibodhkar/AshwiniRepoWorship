import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card} from 'react-bootstrap'
import ThankYou from "../../images/nach.jpg"
import dance from "../../images/nach.jpg"
import easter from "../../images/nach.jpg"
import freedom from "../../images/nach.jpg"
import bridge from "../../images/nach.jpg"

import "./artistName.css"


const artist = () => (
    
    <div >
         
    <Row className="artistInline">
   
    <Card xs={4}  >
        <Link to="/category/thanks/">
            <Card.Img variant="top" src={ThankYou} /> 
            <h6 className="text-white">sheldon bangera</h6>                   
        </Link>
    </Card>
    
 
    <Card xs={4}>
        <Link to="/category/dance/">
            <Card.Img variant="top" src={dance} /> 
            <h6 className="text-white">sheldon bangera</h6>              
        </Link>
    </Card>
    

    <Card xs={4} >
        <Link to="/category/worship"> 
             <Card.Img variant="top" src={easter} />
             <h6 className="text-white">sheldon bangera</h6>                
        </Link>
    </Card>
    

    <Card xs={4}>
        <Link to="/category/freedom/">
            <Card.Img variant="top" src={freedom} /> 
            <h6 className="text-white">sheldon bangera</h6>                
        </Link>
    </Card>
    

    <Card xs={4}>
        <Link to="/category/bridge-music/">
            <Card.Img variant="top" src={bridge} /> 
            <h6 className="text-white">sheldon bangera</h6>                  
        </Link>
    </Card>
    
  
</Row>
    
</div>

)


export default artist
