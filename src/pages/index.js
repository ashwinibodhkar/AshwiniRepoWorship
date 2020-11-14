import React,{useEffect}  from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row,Col,CardDeck,Card} from "react-bootstrap";
import "./index.css"
import Aos from "aos"
import "aos/dist/aos.css"


import Footer from '../components/footer';


import Logo from "../images/logo.png"
import Slider from '../components/slider/slider';
import Gif from '../components/gifSection/gif';
import Category from '../components/categorySection/category';
import "animate.css/animate.min.css";

import FeatureImage from '../components/FeatureImage';



export default function BlogIndex ({data}){
 
  // const post = data.allMarkdownRemark;
  // const featuredImage = post.frontmatter.featureImage.childImageSharp.fixed

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return(
        <>
    <Layout />
    
      <SEO title="Lets-Worship"
           image={Logo} />
            <Container fluid className="back p-0">
          
              <Slider />          
              
              {/* category section */}
           
               <Row  className="category">
                <Col className="text-center">
                  <h1>Category</h1>
                </Col>
              </Row>
              <Category />
              
          
            </Container>

          <Container fluid className="section">
            <h1>Directly Go with Your Favourites</h1>
         
            <Gif />
          </Container>
           
            
         
        
        
          <Container fluid className="songsList">
            <Container>        
              <h1 className="text-white text-center">some tracks for you</h1>                          
            <Row  className="songL">
            <CardDeck>
              {data.allMarkdownRemark.edges.map(({node}) =>(
               
                  <Col  
                   xs="12" md="3" >
                    <Card  data-aos="fade-up"  data-aos-delay="40"
                    data-aos-duration="700" className="cr">
                      {/* <Card.Img><FeatureImage  fixed={featuredImage} /></Card.Img> */}
                      <Card.Body>
                        <Link to={node.fields.slug}>
                          <Card.Title><h5>{node.frontmatter.title}</h5></Card.Title>
                        </Link>
                        <Card.Subtitle className=" text-muted"><h6>{node.frontmatter.artist}</h6></Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
            

              ))}
            </CardDeck>
            </Row>
            <Row>
              <Col className="allLink py-5 text-center">                
                <Link style={{textAlign: "center"}}to="/allsongs">
                  <button>
                    Go to all songs
                  </button>
                </Link>
              </Col>
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
            key
            featureImage{
              childImageSharp{
                fixed{
                  ...GatsbyImageSharpFixed
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