import React, {useEffect} from "react"
import Layout from "../components/layout"
import { Container ,Row,Col} from "react-bootstrap";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
import Card from 'react-bootstrap/Card'
import Footer from '../components/footer';
import "./category.css";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AllSongs({ data }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  console.log(data)
  
  return (
      <>
      <Layout />
      
        <Container fluid className="catBg">
        <Container>
            {/* songs list */}
            <h2 className="text-center text-white pt-5">Song List</h2>
            <Row  
                className="songL pt-5">
                {data.allMarkdownRemark.edges.map(({node}) =>(
                <Col  sm="6" md="3" className="mb-2" >
                <Card data-aos="zoom-in" 
                data-aos-delay="20"
                data-aos-duration="300"
                >
                  <Card.Body>
                    <Link to={node.fields.slug}>
                      <Card.Title>{node.frontmatter.title}</Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">{node.frontmatter.artist}</Card.Subtitle>
                  </Card.Body>
                </Card>
                </Col>

              ))}
            </Row>
            </Container>
            </Container>
            <Footer />
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`