import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import Footer from '../components/footer';
import { FaArrowUp } from "react-icons/fa";







const ArtistPage = ({data,title}) => (
 
  <div>
    <SEO title="Artist Page" />
    {/* */}
    <Layout />
    <Container fluid className="catBg  ">           
      <Container>
        <div >
          <Row >
            <Col >
              <h2 className="pt-5 text-center text-white">ARTIST</h2>
            </Col>
          </Row>
          <Row>
            <Col className="mainCard text-center">
            <ul type="none" className="p-0">
              {data.allMarkdownRemark.edges.map(({node}) => (
                  <Col lg={3} className="catCard">
                  <li >
                    
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  
                  </li>
                  </Col>
                ))}
              </ul>            
            </Col>
          </Row>
          <Row>
            <Col className="backHome text-right pt-5  ">
              <p><Link to="/"> Back to Home <FaArrowUp size={15}color="yellow" ></FaArrowUp></Link></p>
            </Col>
          </Row>
        </div>      
      </Container>
      
    </Container>
    <Footer />
    

   
  </div>
    
  
)

export default ArtistPage



export const ArtistQuery = graphql`

  query{
    site{
      siteMetadata{
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/artists/"}}) {
      edges {
        node {
          frontmatter {
            title
            excerpt
          }
          fields {
            slug
          }
        }
      }      
    }
  }  
`