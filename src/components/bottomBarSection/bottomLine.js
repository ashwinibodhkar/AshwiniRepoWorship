import React from 'react'
import Link from "gatsby"
import "./bottomLine.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

//import PushNotifications from './PushNotifications'
const barbottom = () => (
    
    <div>
        <Row className="bottomBar">
              <Col xs={4}>
                <Link to="/">
                  <HomeIcon style={{ color: '#fff' }} />
                  <p>Home</p>
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="">
                  <SearchIcon style={{ color: '#fff' }} />
                  <p>Search</p>
                </Link>
              </Col>
              <Col xs={4}>
              <Link to="/allsongs">
                <QueueMusicIcon style={{ color: '#fff' }} />
                <p>All List</p>
                </Link>
              </Col>
            </Row>

        {/* <PushNotifications/> */}
    </div>

)


export default barbottom