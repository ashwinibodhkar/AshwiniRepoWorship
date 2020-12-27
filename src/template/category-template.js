import React from "react"

// Components
import { Link, graphql } from "gatsby"
import "./category-tem.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap'
import Iconsbar from "../components/iconsbar/navigationLine";

import Layout from "../components/layout";

const Tags = ({ pageContext, data,title }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} Song${
    totalCount === 1 ? "" : "s"
  } in "${tag}"`

  return (
    <div>
      <Layout />
      <Iconsbar />
      <Container fluid className="bgCategory px-0">           
      <Container>
        <div className="categoryCont">
          <Row className="description">
            <Col className="py-5 text-center text-white">
            <h1>{tagHeader}</h1>
            </Col>
          </Row>
          <Row className="categoryList pb-5">
            <Col >
              {data.allMarkdownRemark.edges.map(({node}) => (
                <ul type="none">
                  <li>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </li>
                </ul>                
              ))}                          
            </Col>
          </Row>
          <Row>
            <Col className="text-right pt-4">
            <p><Link to="/category">All categories</Link></p>
            </Col>
          </Row>
        </div>      
      </Container>      
    </Container>
   
     
    </div>
  )
}


export default Tags

export const pageQuery = graphql`
  query Category($tag: [String]){
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/sheets/"}, 
    							frontmatter: {tags: {in: $tag}}},) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    site{
      siteMetadata{
        title
      }
    }
  }
`