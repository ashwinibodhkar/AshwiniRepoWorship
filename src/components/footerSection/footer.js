import React from 'react'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap'
//import PushNotifications from './PushNotifications'
import HomeIcon from '@material-ui/icons/Home';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import SearchWrapper from "../searchBar/searchwrapper";

import Link from 'gatsby';
import $ from "jquery";

const footer = () => (
    <div>
    <Row className="bottomBar">
    <Col xs={4}>
      <Link to="/">
        <HomeIcon style={{ color: '#fff' }} />
        <p>Home</p>
      </Link>
    </Col>
    <Col xs={4}>
      {/* <Link to={}> */}
      <SearchWrapper />
      <p>Search</p>
        
        
      {/* </Link> */}
    </Col>
    <Col xs={4}>
    <Link to="/allsongs">
      <QueueMusicIcon style={{ color: '#fff' }} />
      <p>All List</p>
      </Link>
    </Col>
  </Row>
   
</div>
              
           
       
   

)


export default footer