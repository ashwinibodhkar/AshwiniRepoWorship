import React ,{useState,useEffect} from "react"
import { graphql } from "gatsby"
import FeatureImage from '../components/FeatureImage'
import Layout from "../components/layout"
import { Container,Row,Col} from 'react-bootstrap'
import "./artist-tem.css"
import Footer from "../components/footer"
import {FaSearchPlus, FaSearchMinus} from "react-icons/fa";
import { FacebookShareButton,FacebookIcon, 
         WhatsappShareButton,  WhatsappIcon, 
         FacebookMessengerShareButton,FacebookMessengerIcon } from 'react-share';
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/use-site-metadata"
import Helmet from 'react-helmet';
import Aos from "aos";
import "aos/dist/aos.css";


const ArtistTemplate = ({data, location}) => {
    const post = data.markdownRemark
    const featuredImage = post.frontmatter.featureImage.childImageSharp.fixed
    const [Fsize, SetFsize] = useState(18)
    //const urlValue = typeof window !== 'undefined' ? window.location.href : '';
    const {siteUrl} = useSiteMetadata();
    
    //Aos animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

    return (        
        <div>   
          <Helmet>
            <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
          </Helmet>
          <SEO
          title={post.frontmatter.title}
          image={featuredImage}
          pathname={`${siteUrl}${location.pathname}`}
          />       
          <Layout />  
            <Container fluid className="artBg">       
              <Container>
                <Row>
                  <Col className="sizeButton text-right">
                    <button  
                      onClick={() => SetFsize(Fsize+2)}> <FaSearchPlus size="25"></FaSearchPlus> </button>  
                    <button  
                      onClick={() => SetFsize(Fsize-2)}> <FaSearchMinus size="25" /> </button> 
                  </Col>
                </Row>
                <Row className="artDesc">
                  <Col>
                    <h2>{post.frontmatter.title}</h2>
                  </Col>
                </Row>

                <Row className="pb-5">
                  <Col data-aos="fade-down" data-aos-delay="20" data-aos-duration="500" md="5" className="artImage mt-3 p-0" >
                    <FeatureImage fixed={featuredImage}/>
                  </Col>                                   
                  <Col md="7" id="target">
                    <p>
                      <div data-aos="fade-up" data-aos-delay="20" data-aos-duration="500" className="ArtistContent" 
                      style={{fontSize: Fsize +'px'}}
                      dangerouslySetInnerHTML={{ __html: post.internal.content }} />
                      </p>
                  </Col>                  
                </Row>
                <Row>
                  <Col className="FontIcon text-right">
                    <FacebookShareButton 
                      url={`${siteUrl}${location.pathname}`}
                      quote={"View Lyrics With Original Chords"}
                      title={post.frontmatter.title}
                    >
                      <FacebookIcon size={36} />
                    </FacebookShareButton>

                    <FacebookMessengerShareButton 
                        url={`${siteUrl}${location.pathname}`}
                        title={post.frontmatter.title}
                      >
                      <FacebookMessengerIcon size={36}/>
                    </FacebookMessengerShareButton>

                    <WhatsappShareButton 
                        url={`${siteUrl}${location.pathname}`} 
                        title={post.frontmatter.title} 
                      >
                        <WhatsappIcon size={36} />
                    </WhatsappShareButton>
                  
                  </Col>
                </Row>
              </Container>
            </Container>
          <Footer />    

        
        </div>
        
    )
}

export default ArtistTemplate

export const query = graphql`

  query ArtistQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }, fileAbsolutePath: {regex: "/artists/"}) {
      frontmatter {
        title
        excerpt
        featureImage{
          childImageSharp{
            fixed{
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      internal {
        content
      }
    }
    site{
      siteMetadata{
        title
      }
    }
  }
`