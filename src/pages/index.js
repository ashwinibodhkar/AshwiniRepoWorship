// import React ,{useEffect} from "react";
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container ,Row,Col,CardDeck} from "react-bootstrap";
// import "./index.css"
// import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'
// import Footer from '../components/footer';
// import { FaArrowCircleRight } from "react-icons/fa"
// import Slider from '../components/slider/slider';
// //import SearchWrapper from '../components/searchwrapper';
// import ClickSongGif from "../images/click-for-chords.gif"
// import DanceForLord from "../images/DANCE-for-the-LORD.gif"
// import Logo from "../images/logo.png"
// import TestimonyOfWorshipper from "../images/read-testimony-of-worshipper.gif"
// import "../components/search-form.css"
// import Search from '../components/search'
// import Aos from "aos"
// import "aos/dist/aos.css"

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
import Category from '../components/category/category';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';




export default function BlogIndex ({data}){
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
           
          <Container className="section">
            <h1>Directly Go with Your Favourites</h1>
            <Gif />
            
          </Container>
        </Container>
        <Container fluid className="category">
            {/* category section */}
           
               <Row >
                <Col className="text-center">
                  <h1>Category</h1>
                </Col>
              </Row>
              <Category />
              
          </Container>
          <Container fluid className="songsList">
            <Container>
            <ScrollAnimation animateIn='bounceInRight'
              animateOut='bounceOutLeft'>
              <h1 >some songs for you</h1>
            </ScrollAnimation>
                          
            <Row  className="songL">
            <CardDeck>
              {data.allMarkdownRemark.edges.map(({node}) =>(
               
                  <Col  
                   xs="12" md="3" >
                    <Card  data-aos="fade-up"  data-aos-delay="40"
                    data-aos-duration="700" className="cr">
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
        {/* <Container fluid className="hero">
          
          <Container >
            <Row >
              <Col data-aos="zoom-in"> 
            
                <h3>Let's Worship Together</h3>
                  <div className="search-box" >
                      <Search/>
                  </div>  
                    
              </Col>
            </Row>
          </Container>
        </Container> */}
            
        {/* slider section  */}
        {/* <Container fluid className="index_bg" style={{background: "#000"}}>
          <Container >
            <Row>
              <Col data-aos="zoom-in "
    
               className="slider">                
                <Carousel>
                  <Carousel.Item>                      
                    <Link to="/allsongs"> 
                      <img src={ClickSongGif}  alt="easter"></img>
                    </Link>                
                  </Carousel.Item>
                  <Carousel.Item>
                      <Link to="/category/dance/">
                        <img  src={DanceForLord} alt="Cinque Terre" ></img>
                      </Link>  
                  </Carousel.Item>
                  <Carousel.Item>                     
                    <Link to="/artist">
                      <img   src={TestimonyOfWorshipper} alt="Cinque Terre" ></img> 
                    </Link>                                            
                  </Carousel.Item>
                </Carousel>               
              </Col>
            </Row> 
          </Container>
        </Container>

        <Container fluid style={{background: " rgb(45,44,44)"}} className="pb-5">
          <Container >   
     
            {/* categories   */}
            {/* <Row>
              <Col >
                <div className="category">
                  <h2> Categories</h2>
                </div>
              </Col>
            </Row>
            <div className="types text-center"> */} 
             
              {/* //thanks */}
              {/* <div data-aos="fade-left"  data-aos-delay="20"
                      data-aos-duration="200" className="types_items " >
               <Link to="/category/thanks/">
                <Card className="F_card pb-5 " >
                  <Card.Body >
                    <Card.Title className="mb-2 pb-5 text-center ">
                      <h2>Thanks</h2>
                    </Card.Title>     
                  </Card.Body>
                </Card>
                </Link>
              </div> */}

              {/* //dance */}
              {/* <div data-aos="fade-left" data-aos-delay="20"
                      data-aos-duration="200"  className="types_items " >
              <Link to="/category/dance/">
                <Card className="L_card pb-5 " >
                  <Card.Body >
                    <Card.Title className="mb-2 pb-5 text-center" >
                      <h2>Dance</h2>
                    </Card.Title>
                  </Card.Body>
                </Card>
                </Link>
              </div> */}

              {/* Worship */}
              {/* <div data-aos="fade-left" data-aos-delay="20"
                      data-aos-duration="200"  className="types_items" >
                <Link to="/category/worship">
                <Card className="S_card pb-5 ">
                  <Card.Body >
                    <Card.Title className="mb-2 pb-5 text-center">
                      <h2>Easter</h2>
                    </Card.Title>
                  </Card.Body>
                </Card>
                </Link>
              </div> */}

              {/* Freedom */}
              {/* <div data-aos="fade-left" data-aos-delay="20"
                      data-aos-duration="200"  className="types_items" >
                <Link to="/category/freedom/">
                <Card className="T_card  pb-5 ">
                  <Card.Body>
                    <Card.Title className="mb-2 pb-5 text-center">
                      <h2>Freedom</h2>
                    </Card.Title>   
                  </Card.Body>
                </Card>
                </Link>
              </div> */}

              {/* Bridge Music */}
              {/* <div data-aos="fade-left" data-aos-delay="20"
                      data-aos-duration="200"  className="types_items" >
                <Link to="/category/bridge-music/">
                <Card className="E_card  pb-5 ">
                  <Card.Body>
                    <Card.Title className="mb-2 pb-5 text-center">
                      <h2>Bridge Music</h2>
                    </Card.Title>                     
                  </Card.Body>
                </Card>
                </Link>
              </div>

              <button>
                <Link to="/category">
                  <FaArrowCircleRight size={60} color="black"></FaArrowCircleRight>
                </Link>
              </button>             
            </div>
          </Container>
        </Container>
        <Container fluid style={{background: "#000"}}>
          <Container>
            <br>
            </br>
            <br></br>
             */}
            {/* songs list */}
            
            {/* <Row  className="songList">
            <CardDeck>
              {data.allMarkdownRemark.edges.map(({node}) =>(
               
                  <Col  
                   xs="12" md="3" >
                    <Card data-aos="fade-up" className="cr">
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
                  <button  
                    data-aos="fade-right" 
                    data-aos-offset="200"
                    data-aos-delay="30"
                    data-aos-duration="700">
                    Go to all songs
                  </button>
                </Link>
              </Col>
            </Row>
             
          </Container>  
        </Container> */}
    
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
          }
          fields {
            slug
          }
        }
      }
    }
  }
`