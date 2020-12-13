import React,{useEffect,useState}  from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container ,Row,Col,Card,Toast,Alert} from "react-bootstrap";
import "./index.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Img from 'gatsby-image'
import Slider from '../components/slider/slider'
import Logo from "../images/logo.png"
import Trending from '../components/trending/trending'
import Category from '../components/categorySection/category';
import Artist from '../components/artist/artistName'; 
import Iconsbar from "../components/iconsbar/navigationLine";
import {  FaAngleDoubleRight} from "react-icons/fa"
import AboutArtist from "../components/aboutArtist/testimony";
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close'
import GetAppIcon from '@material-ui/icons/GetApp'
export default function BlogIndex ({data}){
  const [show, setShow] = useState(true);
  

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return(
        <>
    <Layout />
    
      <SEO title="Lets-Worship"
           image={Logo} />
          
          <Container fluid className="bgpage">
           <Row>
             <Col className="bannerInstall align-self-center">
              <Alert show={show} >  
              <p>For long use Intall App
              <Button  onClick={() => setShow(false)} >
                <CloseIcon />
              </Button>
              <Button  className="mr-2">
                <GetAppIcon />
              </Button> 
              </p>
                 
                </Alert>
             </Col>
           </Row>
            {/* top slider section */}
            <Row>
              <Col >
                <Slider />            
              </Col>
            </Row>
            {/* category section */}
            <Container>
              <Row>
                <Col className="pt-5 text-white">
                  <h2>Category</h2>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col className="px-0 py-3">
                <Category />
              </Col>
            </Row>
            {/* trending section */}
            <Container>
              <Row>
                <Col className="pt-4 text-white">
                  <h2>Trending songs</h2>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col>
                <Trending />
              </Col>
            </Row>
            {/* artist testimony section */}
            <Container>
              <Row>
                <Col xs={8} className="pt-4 px-0 text-white">
                  <h2>About Artist</h2>
                </Col>
                <Col xs={4} className="text-right align-self-center">
                  <Link to="/artist">
                      <FaAngleDoubleRight size={22} color={'#fff'}></FaAngleDoubleRight>
                  </Link>
                </Col> 
              </Row>
            </Container>
            <Row>
              <Col>
                <AboutArtist />
              </Col>
            </Row>
           
            {/* Artist section */}
            <Container>
              <Row>
                <Col xs={6} className="pt-4 px-0 text-white">
                  <h2>Artist</h2>
                </Col>
                <Col xs={6} className="text-right align-self-center">
                  <Link to="/allartist">
                      <FaAngleDoubleRight size={22} color={'#fff'}></FaAngleDoubleRight>
                  </Link>
                </Col>   
              </Row>
              <Row>
                <Col>
                  <Artist />
                </Col>
              </Row>
            
            {/* all songs */}
            <Row>
                <Col className="pt-5 text-white">
                  <h2>Some Tracks For You</h2>
                </Col>
              </Row>
              <Row className="songL py-5 ">
                {data.allMarkdownRemark.edges.map(({node}) =>(
                  <Col  xs="12" md="3" className="mb-2 " >
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
            <Iconsbar/>
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
            key
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