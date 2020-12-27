import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { FaArrowUp } from "react-icons/fa";
import Img from 'gatsby-image'
import Iconsbar from "../components/iconsbar/navigationLine";
import './category.css'



const ArtistPage = ({data,title}) => (
 
  <div>
    <SEO title="Artist Page" />
    {/* */}
   
    <Iconsbar />
    <Container fluid className="catBg  ">           
      <Container>
        <div >
          <Row >
            <Col >
              <h2 className="pt-5 text-center text-white">ABOUT ARTIST</h2>
            </Col>
          </Row>
          <Row>
            <Col className="mainCard text-center">
            <ul type="none" className="p-0">
              {data.allMarkdownRemark.edges.map(({node}) => (
                  <Col lg={3} className="catCard ">
                  <li >
                  <Img fluid={node.frontmatter.featureImage.childImageSharp.fluid} />
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  
                  </li>
                  </Col>
                ))}
              </ul>            
            </Col>
          </Row>
          
        </div>      
      </Container>
      
    </Container>  
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/artist/"}},
                      sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            artist
            featureImage{
              childImageSharp{
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`