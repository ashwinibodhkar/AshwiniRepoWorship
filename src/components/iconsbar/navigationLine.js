import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person'
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import HeartIcon from '@material-ui/icons/Favorite'
import Searchjs from "../searchBar/search";
import Login from '../searchBar/searchwidget'
import "./navigationList.css"
import { Person } from '@material-ui/icons';


const iconsbar = () => (
    
    <div >
         
         <Row className="bottomBar">
              <Col >
                <Link to="/">
                  <HomeIcon  />
                  <p>Home</p>
                </Link>
              </Col>
              <Col  >
                <HeartIcon />
                <p>Favourites</p>
              </Col>
              <Col >
                {/* <Link to={}> */}
                <Searchjs />
                <p>Search</p>
                  
                  
                {/* </Link> */}
              </Col>
             
              <Col >
              <Link to="/allsongs">
                <QueueMusicIcon  />
                <p>All List</p>
                </Link>
              </Col>
              <Col>
                <Login />
                <p>Login</p>
              </Col>

            </Row>
    
</div>

)


export default iconsbar
