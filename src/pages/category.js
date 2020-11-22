import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Container, Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import "./category.css"
import { FaArrowUp } from "react-icons/fa"

import "../components/FeatureImage"
import HomeIcon from '@material-ui/icons/Home';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import SearchWrapper from "../components/searchBar/searchwrapper";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  }) => (
  <div>
    <Helmet title={title} />
    <Layout />
    <Container fluid className="catBg px-0 ">           
      <Container>
        <div>
          <Row >
            <Col className="text-center text-white py-5">
            <h2 >CATEGORY</h2>
            </Col>
          </Row>
          <Row>
            <Col className="mainCard text-center">
              <ul type="none" className="p-0">
                {group.map(tag => (
                  <Link to={`/category/${kebabCase(tag.fieldValue)}/`}>
                  <Col lg={3} className="catCard">
                  <li key={tag.fieldValue}>
                    
                      {tag.fieldValue} ({tag.totalCount})
                    
                  </li>
                  </Col>
                  </Link>
                ))}
              </ul>            
            </Col>
          </Row>
          <Row>
            <Col className="backHome text-right py-5">
            <p><Link to="/"> Back to Home <FaArrowUp size={15}color="yellow" ></FaArrowUp></Link></p>
            </Col>
          </Row>
        </div>      
      </Container>
      {/* sticky bottom banner */}
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

    </Container>
  
  </div>
)

export default TagsPage

export const pageQuery = graphql`
query{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sheets/"}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`