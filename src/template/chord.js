import React, {useState, useEffect} from 'react';
import Chord from 'chordjs';
import { Link,graphql } from 'gatsby';
import ChordSheetJS from 'chordsheetjs';
import $ from 'jquery';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,OverlayTrigger,Tooltip,Toast,Modal} from 'react-bootstrap'
import "./chord.css"
import "./chord.scss"
import { FaCaretUp, FaCaretDown, FaBookOpen, FaSearchPlus, FaSearchMinus,FaYoutube,FaArrowUp  } from "react-icons/fa";
import '../components/hideShowChordEye.scss';
import FeatureImage from '../components/FeatureImage';
import Video from "../components/videoSection/video"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/use-site-metadata"
import 'react-h5-audio-player/lib/styles.css';
import { FacebookShareButton,FacebookIcon, 
         WhatsappShareButton,  WhatsappIcon, 
         FacebookMessengerShareButton,FacebookMessengerIcon } from 'react-share';
import Aos from "aos";
import "aos/dist/aos.css";
import ShareIcon from '@material-ui/icons/Share';
import Fab from '@material-ui/core/Fab';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search'
// import "../components/likeSongHeart.scss";
import SearchWidget from '../components/searchBar/searchwidget';
export default function Template({data,location}){
 
  const post = data.markdownRemark;
  const featuredImage = post.frontmatter.featureImage.childImageSharp.fixed
  const keyExists = post.frontmatter.key;

  const [key, setKey]  = useState(Chord.parse(keyExists));
  const [song] = useState(new ChordSheetJS.ChordProParser().parse(post.internal.content))
  
  //for reseting 
  const [count, setCount] = useState(0)

  //for adjusting font size
  const [Fsize, SetFsize] = useState(18)

  //const urlValue = typeof window !== 'undefined' ? window.location.href : '';
  const {siteUrl} = useSiteMetadata();

  //for setting pad

  //const [pad, setpad] = useState(post.frontmatter.WorshipPad);

  //for changing backround of title
  const [bgTitle,setBgtitle] = useState(false);


  // //for setting speed
  // const [speedVal, setspeedVal] = useState("");
  // const [valFromClick, setvalFromClick] = useState("");

  //Aos animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  
  //transpose up
  function trpUp() {

    //checking times a button is clicked
    setCount(count+1);

    setKey(key.transposeUp())
    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if(chord){
          chord = chord.transposeUp()
          item.chords = chord
        }
      })
    })
  }

  //transpose down
  function trpDown() {

    //checking times a button is clicked
    setCount(count-1);

    setKey(key.transposeDown())
    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if(chord){
          chord = chord.transposeDown()
          item.chords = chord
        }
      })
    })
  }


  //switch modifier
  function FlatOrSharp() {
    setKey(key.switchModifier())
    song.lines.forEach(line => {
      line.items.forEach(item => {
        let chord = Chord.parse(item.chords)
        if (chord) {
          chord = chord.switchModifier()
          item.chords = chord
        }
      })
    })
  }

  // function reset(){
  //   //console.log(-count);
  //   setKey(key.transpose(-count))
  //   song.lines.forEach(line => {
  //     line.items.forEach(item => {
  //       let chord = Chord.parse(item.chords)
  //       if(chord){
  //         chord = chord.transpose(count)
  //         item.chords = chord
  //       }
  //     })
  //   })
  // }


  //share Icons 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useEffect hook used to automate scrolling using defined speed
  useEffect(() => {
    $(document).ready(function(){
      
      //hide show chords
      $("#bnId").click(function(){
        $(".chord").toggle();
      })
    
      var interval;
      var Notscrolling = true;
    
      $("#ToggleScroll").click(function(){
    
        var speedNum = $("#ScrollSpeed").val();
        if(speedNum !=='' && $.isNumeric(speedNum)){
    
          //if the page is not scrolling make it scroll
          if(Notscrolling){
            function scroll(speed) {
              console.log("speed in function "+ speed)
              $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, speed
              // function(){
              //   $(this).animate({scrollTop: 0}, speed);
              // }
              );
            }
            //var speedNum = $("#ScrollSpeed").val();
            var speed = Number(speedNum)
            scroll(speed)
            console.log("speed in at scroll function"+ speed)
            interval = setInterval(function(){scroll(speed)}, speed);
            console.log("start")
            Notscrolling = false;
          }
          //stop scrolling the page
          else{
            $('html, body').stop()
            clearInterval(interval);
            console.log("stop")
            Notscrolling = true;
          }
        }
        else{
          alert("Please enter speed in numeric value");
        }
      })
    });
    //jquery code ends here
  }, [] );
  
  //convert song to html
  const htmlChordSheet = new ChordSheetJS.HtmlTableFormatter().format(song)

  //change backround of title
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBgtitle(window.scrollY >= 300);
    });
}, []);


  return( 
    <>
     
    <Layout />
     {/* <Helmet>
            <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
            <meta property="og:title" content="My Awesome Website" />
            <meta property="og:description" content="This website is so awesome that I really don't think you can handle how much awesome that is happening here." />
            <meta property="og:image" content={featuredImage}/>
     </Helmet> */}

     <SEO
          title={post.frontmatter.title}
          image={featuredImage}
          pathname={`${siteUrl}${location.pathname}`}
     />   
    
    {/* top image section */}
    <Container fluid className="BgChordPage">
      
      <div className="chordImg" id="trans">         
        <FeatureImage  fixed={featuredImage} /> 
        <Container className="imgTextStick">   
          <Row className="imgText ">
            <Col>
              <h1 >{post.frontmatter.title}</h1>
              <p >{post.frontmatter.artist}</p> 
            </Col>
          </Row>   
          
        </Container>  
          
      </div>
      {/* top title backround change */}
      <Row className={bgTitle ? 'bgTitle active' : 'bgTitle'} >
        <Col xs={7} className="pr-0 py-1 align-self-center">
          <h6 className="m-0">{post.frontmatter.title}</h6>
          <p className="m-0">{post.frontmatter.artist}</p> 
        </Col>
        <Col xs={3} className="key text-right p-0 align-self-center">
          <p className="m-0" >key {key.toString()}</p>
        </Col>
        <Col xs={2} className="align-self-center">
          
          <HeartIcon />
        </Col>
      </Row>
      
      {/* top feature Content */}
      <Container className="BgContainerChord ">     
        <Row >
         
          <Col xs={12} md={6} className="topFeature text-white ">
            <h4 >Key of {key.toString()}</h4>
            <OverlayTrigger                     
              overlay={<Tooltip  > 
                        <Toast style={{background: "rgb(83, 83, 83)",opacity: "1.5",color: "#fff",fontSize : "18px"}} >
                          <Toast.Header>                                  
                          </Toast.Header>
                          <Toast.Body style={{background: "#000"}}> {post.frontmatter.verseD}</Toast.Body>
                        </Toast>
                      </Tooltip>} 
            >
              <span className="d-inline-block bibleIcon">                    
                <FaBookOpen border={2} color="rgba(250, 247, 63, 0.897)"></FaBookOpen> {post.frontmatter.verseT}                    
              </span>
            </OverlayTrigger>
            <h6 >
              <Link to="#vid">
                <FaYoutube size="25" color="red"></FaYoutube>
                  <i className="videoPlay"> Listen to {post.frontmatter.title} </i>
              </Link>
            </h6>  
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>       
          <Col className="stick">
            <Row  className="transpose  text-center">               
              <Col xs={3} className="px-0 ">
                <FaCaretUp onClick={() => trpUp()} size="25" className="mb-2" />
                <FaCaretDown onClick={() => trpDown()} size="25" className="mb-2" />
                
                <p>Transpose</p>
              </Col>
              <Col xs={3} className="px-0">
                <h5 onClick={() => FlatOrSharp()}>b/# </h5>
                <p >Flat/Sharp</p>
                
              </Col >
                
              {/* <Col xs={4} className="mt-2" style={{color: "#ff2b6e"}}>
                <SearchWrapper />
                <p>Search</p> 
              </Col>            */}
              <Col xs={3} className="text-center p-0">   
                
                  <div class="flip-switch flip-switch-icon"  >
                    <input type="checkbox" id="c2" />
                    <label for="c2"  id="bnId"></label>
                  </div> 
                  <p>Chords<br></br> Show/Hide</p>
                                      
              </Col>                        
              <Col xs={3} className="px-0 text-center">                  
                  <FaSearchPlus onClick={() => SetFsize(Fsize+2)} size="26" height="30" xs={6} className="my-1 px-1"></FaSearchPlus>  
                  <FaSearchMinus onClick={() => SetFsize(Fsize-2)} size="26" height="30" xs={6} className="my-1 px-1" /> 
                  <p>Zoom</p>
              </Col>
            </Row>
            <Row className="searchicon">
              <Col>
                <SearchWidget />
              </Col>
            </Row>
            <Row className="sharelinkIcon ">
              <Col className=" ">
             
             
                <Fab color="secondary" aria-label="edit">
                  <ShareIcon onClick={handleShow} style={{ color: '#fff' }} />
                </Fab>
                <Modal show={show} onHide={handleClose}   centered >
            
                  <Modal.Body className="m-0" closeButton>
                    <FacebookShareButton            
                      url={`${siteUrl}${location.pathname}`}
                      title={post.frontmatter.title}
                      description= {post.frontmatter.title} 
                      background="transparent"            
                    >
                    <FacebookIcon size={36}/>
                   
                    </FacebookShareButton>
                    <br></br>
                    <FacebookMessengerShareButton                   
                        url={`${siteUrl}${location.pathname}`}
                        title={post.frontmatter.title}
                      >
                    <FacebookMessengerIcon size={36}/>
                    </FacebookMessengerShareButton>
                    <br>
                    </br>
                    <WhatsappShareButton                  
                        url={`${siteUrl}${location.pathname}`} 
                        title={post.frontmatter.title} 
                        separator=":: "
                    >
                      
                    <WhatsappIcon size={36} />
                    </WhatsappShareButton>
                  </Modal.Body>
                </Modal>            
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pb-5 mb-5">
          <Col xs={12} md={5} >
            <div style={{textAlign: "center"}}>
              <pre> 
                <div
                  className="song" id="songD"
                  style={{fontSize: Fsize +'px'}}
                  dangerouslySetInnerHTML={{ __html: htmlChordSheet }}
                /> 
              </pre>
            </div>  
          </Col>               
          <Col xs={12} md={7} className="align-self-center"  id="vid">
            <Video style={{background: "blue",border:"2px solid #fff"}}
              videoSrcURL={post.frontmatter.videoSrcURL}
              videoTitle={post.frontmatter.videoTitle}
            />
          </Col>
        </Row>
                    
      </Container>
    </Container>    
    </>
  )  
}

export const query = graphql`
  query SongQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }, fileAbsolutePath: {regex: "/sheets/"}) {
      frontmatter {
        title
        artist
        key
        
        verseT
        verseD
        videoSrcURL
        videoTitle
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