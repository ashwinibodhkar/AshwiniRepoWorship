import React, {useEffect} from "react"
import Layout from "../components/layout"
import { Container ,Row,Col} from "react-bootstrap";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
import Card from 'react-bootstrap/Card'
import "./category.css";
import "aos/dist/aos.css";
import Aos from "aos";

import Img from 'gatsby-image'
import Iconsbar from "../components/iconsbar/navigationLine";

export default function AllSongs({ data }) {
  // const { edges: posts } = data.allMarkdownRemark;
  //const featuredImage = post.frontmatter.featureImage.childImageSharp.fixed

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  console.log(data)
  
  return (
      <>
      <Layout />
      <Iconsbar />
        <Container fluid className="catBg">
          <Container>
            {/* songs list */}
            <h2 className="text-center text-white pt-5">Song List</h2>
            <Row className="songL pt-5">
              {data.allMarkdownRemark.edges.map(({node}) =>(
              <Col  xs="12" md="3" className="mb-2" >
                <Card data-aos="zoom-in" 
                data-aos-delay="20"
                data-aos-duration="300"
                >
                  <Row>
                    <Col xs={5} md={5} className="align-self-center pl-0">
                    <Img fluid={node.frontmatter.featureImage.childImageSharp.fluid} />
                    </Col>
                    <Col xs={7} md={7} className="align-self-center">
                        <Link to={node.fields.slug}>
                            <Card.Title>{node.frontmatter.title}</Card.Title>
                          </Link>
                          <Card.Subtitle className="mb-2 text-muted">{node.frontmatter.artist}</Card.Subtitle>
                    </Col>
                  </Row>                                                     
                </Card>
              </Col>

              ))}
            </Row>
          </Container>
         
        </Container>
            
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "\/sheets/"}},
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