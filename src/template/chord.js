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
import { FaCaretUp, FaCaretDown, FaBookOpen, FaSearchPlus, FaSearchMinus,FaYoutube} from "react-icons/fa";
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
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import Search from '../components/searchBar/search';
import UpArrowIcon from '@material-ui/icons/ExpandLess'
import DownArrowIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

//for more button
const useStyles = makeStyles((theme) => ({
  root: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'absolute',
    bottom : 0,
    left: 13,
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(3),
    
    
  },
  radioGroup: {
    margin: theme.spacing(1, 0),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));



export default function Template({data,location}){
 
  const post = data.markdownRemark;
  const featuredImage = post.frontmatter.featureImage.childImageSharp.fixed
  const keyExists = post.frontmatter.key;

  const [key, setKey]  = useState(Chord.parse(keyExists));
  const [song] = useState(new ChordSheetJS.ChordProParser().parse(post.internal.content))
  
  //for reseting 
  const [count, setCount] = useState(0)

  //for adjusting font size
  const [Fsize, SetFsize] = useState(16)

  //const urlValue = typeof window !== 'undefined' ? window.location.href : '';
  const {siteUrl} = useSiteMetadata();


//floating button
  const classes = useStyles();
  const [direction] = React.useState('up');
  const [open, setOpen] = React.useState(false);
  const [hidden] = React.useState(false);

  const handleTClose = () => {
    setOpen(false);
  };

  const handleTOpen = () => {
    setOpen(true);
  };

  //for changing backround of title
  const [bgTitle,setBgtitle] = useState(false);

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

  //more button content(speedDial)
  const actions = [
    { icon: <Search />, name: 'Search' },  
    { icon: <ShareIcon onClick={handleShow}/>, name: 'Share' },
    
  ];

  return( 
    <>
    <Layout />
     <SEO
          title={post.frontmatter.title}
          image={featuredImage}
          pathname={`${siteUrl}${location.pathname}`}
     />   
    
    {/* top image section */}
    <Container fluid className="bgChordPage">      
      <div className="chordImg" id="trans">         
        <FeatureImage  fixed={featuredImage} /> 
        <Container >   
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
          <Col xs={12} md={6} className="topFeature text-white " id="top">
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
                  <i> Listen to {post.frontmatter.title} </i>
              </Link>
            </h6>
            <h6>
            <p><HeartIcon /> Make it favourite</p>
            </h6>  
          </Col>
        </Row>
      </Container>

      {/* chords bottom bar */}
      <Container fluid>
        <Row>       
          <Col >
            <Row  className="bottomStickyBar  text-center">               
              <Col  className="px-0 ">
                <FaCaretUp onClick={() => trpUp()} size="25" className="mb-2" />
                <FaCaretDown onClick={() => trpDown()} size="25" className="mb-2" />
                <p>Transpose</p>
              </Col>

              <Col  className="px-0">
                <h5 onClick={() => FlatOrSharp()}>b/# </h5>
                <p >Flat/Sharp</p>
              </Col >
                
              <Col  className="text-center p-0">   
                <div class="flip-switch flip-switch-icon"  >
                  <input type="checkbox" id="c2" />
                  <label for="c2"  id="bnId"></label>
                </div> 
                <p>Chords<br></br> Show/Hide</p>                                      
              </Col> 

              <Col  className="px-0 text-center">                  
                  <FaSearchPlus onClick={() => SetFsize(Fsize+2)} size="26" height="30" xs={6} className="my-1 px-1"></FaSearchPlus>  
                  <FaSearchMinus onClick={() => SetFsize(Fsize-2)} size="26" height="30" xs={6} className="my-1 px-1" /> 
                  <p>Zoom</p>
              </Col>

              <Col  className="pl-0">
              <div className={classes.root}>
                <div className={classes.exampleWrapper}>
                    <SpeedDial
                    ariaLabel="SpeedDial example"
                    
                    hidden={hidden}
                    icon={<SpeedDialIcon />}
                    onClose={handleTClose}
                    onOpen={handleTOpen}
                    open={open}
                    direction={direction}
                    
                    >
                    {actions.map((action) => (
                        <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={handleTClose}
                        />
                    ))}
                    </SpeedDial>
                    <p>more</p>
                </div>
              </div>                
              </Col>
            </Row>
            {/* after clicking more share icons list */}
            <Row>
              <Col> 
                <Modal size="sm" show={show} onHide={handleClose}  centered className="shareButtons" >
                  <Modal.Body className="m-0 " closeButton>
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

            {/* navigation up down button */}
            <Link to="#top">
              <Row className="upButton">
                <Col>                
                  <Button >
                    <UpArrowIcon />
                  </Button>                  
                </Col>
              </Row>
            </Link>

            <Link to="#vid">
              <Row className="DownButton">
                <Col>                
                  <Button >
                    <DownArrowIcon />
                  </Button>                     
                </Col>
              </Row>
            </Link>             
          </Col>
        </Row>
      </Container>
      {/* song Lyrics section */}
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