import React from 'react'

import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col, Container} from 'react-bootstrap'
import Searchjs from "../searchBar/search";
import './chordsPageSearchbar.css'

const chordsPageSearchbar = () => (
    <div >
        <Container fluid>
        <Row>
            <Col className="searchBarChords">
                <Searchjs /> 
            </Col>
        </Row>
        </Container>
    </div>

)


export default chordsPageSearchbar
