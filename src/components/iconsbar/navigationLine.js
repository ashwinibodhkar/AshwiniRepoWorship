import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Searchjs from "../searchBar/search";

import "./navigationList.css"


const iconsbar = () => (
    
    <div >
         
         <Row className="bottomBar">
              <Col xs={4}>
                <Link to="/">
                  <HomeIcon style={{ color: '#fff' }} />
                  <p>Home</p>
                </Link>
              </Col>
              <Col xs={4}>
                {/* <Link to={}> */}
                <Searchjs />
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


export default iconsbar
