  
import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import HeartIcon from '@material-ui/icons/Favorite'
import Searchjs from "../searchBar/search";
import "./navigationList.css"



const iconsbar = () => (
    
    <div>
      <Row className="bottomBar">
      <Col >
        <Link to="/">
          <HomeIcon  />
          <p>Home</p>
        </Link>
      </Col>
      <Col>
        <Link to="/user/favourites">
          <HeartIcon />
          <p>Favourites</p>
        </Link>
      </Col>
      <Col >
        <Searchjs />
        <p>Search</p>
      </Col>
      
      <Col >
      <Link to="/allsongs">
        <QueueMusicIcon  />
        <p>All List</p>
        </Link>
      </Col>
      
    </Row>
    
  </div>

)


export default iconsbar

