import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Card} from 'react-bootstrap'
import ThankYou from "../../images/nach.jpg"
import dance from "../../../content/image/cameron-mendes.jpg";
import easter from "../../../content/image/kinneth.jpg"
import freedom from "../../../content/image/amit.jpg"
import bridge from "../../images/nach.jpg"

import "./artistName.css"


const artist = () => (
    
    <div >
         
    <Row className="artistInline">
   
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
    

    
    
  
</Row>
    
</div>

)


export default artist
