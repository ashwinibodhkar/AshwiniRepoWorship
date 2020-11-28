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
import Iconsbar from "../components/iconsbar/navigationLine";
const ArtistPage = ({
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
    <Iconsbar />
    <Container fluid className="catBg px-0 ">           
      <Container>
        <div>
          <Row >
            <Col className="text-center text-white py-5">
            <h2 >Artist</h2>
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
      
    </Container>
  
  </div>
)

export default ArtistPage

export const pageQuery = graphql`
query{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sheets/"}}) {
      group(field: frontmatter___artist) {
        fieldValue
        totalCount
        
      }
    }
  }
`