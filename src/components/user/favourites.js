 
import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import firebase from "gatsby-plugin-firebase"
import { Index } from "lunr"
import './signup.css';
import Iconsbar from '../iconsbar/navigationLine'
import AddIcon from '@material-ui/icons/Add';
import { Row,Col,Container, Form} from "react-bootstrap";
import Layout from "../layout"
import SEO from "../seo"
import Img from "gatsby-image"
import GatsbyImage from "gatsby-image"
//import SetFavourites from '../components/setFavourites'

const Favourites = () => {

    const { LunrIndex } = useStaticQuery(graphql`
        query {
            LunrIndex
        }
    `)

    const index = Index.load(LunrIndex.index)
    const { store } = LunrIndex

    const { currentUser } = useContext(AuthContext)
    //const [name, setName] = useState()
    const [city, setCity] = useState()
    const [favArrayItems, setFavArrayItems] = useState([])

    var favIds = [] //* storing all the favourite ids from firestore collection
    var favArray = [];
    var userFavData = []
    var userFavs = []
    var dbRef;
   
        if(currentUser){
            //? getting all the data from firebase users collection
            dbRef = firebase.firestore().collection("users").doc(currentUser.uid)
        }
        
    

    

    // const getUserDetails = dbRef.get().then(doc => {
    //     setName(doc.data().name)
    //     setCity(doc.data().city)
    // })

    //console.log("Username: ",currentUser.displayName)

    useEffect(() => {
        if(currentUser != null){
            dbRef.get().then((doc) => {
                const firebaseUserFavIds = doc.data()
                if(firebaseUserFavIds.favouriteIds){
                    userFavData = firebaseUserFavIds.favouriteIds
                    userFavData.forEach(id => {
                        setFavArrayItems(favArrayItems => [...favArrayItems,id])
                    })
                    
                }else(
                    console.log("no favourites available")
                )
            })
        }
        
    },[])

    var results = [] //* in result array we get all the ref values for ids passed from favs and push in ref array
    var refArray = [] 
    var finalResult = [] //* store all the ref values and getting result from it.

    if(favArrayItems.length){
        favArrayItems.forEach(id => {
            results = index.search(id).map(({ ref }) => {
            return refArray.push(ref)
          })
        })
    
        finalResult = refArray.map(ref => {
            return {
                slug: ref,
                ...store[ref],
            }
        })
    }
    
    //console.log("user: ", (currentUser.displayName.split(' '))[0])
    //const UserName = (currentUser.displayName.split(' '))[0]

    console.log("user: ",currentUser)
    return (
        <>
            <SEO title="Favourites"/>
            <Layout/>
            <Container className="catBg ">
                
                
                    {currentUser && (
                        <>
                            <Row>
                                <Col xs={12} className="pt-5 pb-4 text-white text-center">
                                    <h4>{(currentUser.displayName.split(' '))[0]}'s Favourites</h4>
                                </Col>
                            </Row>
                            
                            
                            {finalResult.length ? (
                                finalResult.map(post => {
                                    return (
                                        <Row>
                                            <Col className="favList pt-2  my-2 text-white text-center ">
                                                <article key={post.slug}>
                                                    <h6 className="favTitle"><Link to={post.slug}>{post.title}</Link></h6>
                                                    <p className="favArtist">{post.artist}</p>
                                                    <Img src={post.featureImage}></Img>
                                                </article>
                                            </Col>
                                        </Row>
                                    )
                                })
                            ) : (
                                <Row>
                                    <Col xs={12} className="py-5 text-white text-center">
                                        <h6><span role="img" aria-label="">&#128543;</span>seems like you don't have any song in your list</h6>
                                        <p className="text-center"><Link to="/allsongs">Create your List</Link></p>
                                    </Col>
                                </Row>
                            )}
                            
                        </>
                    )}

                    {!currentUser && (
                        <Row>
                             <Col xs={12} className=" my-5 text-white text-center">
                                <h6><span role="img" aria-label="">&#128543;</span>You are not logged in.</h6>
                                <h5 className="text-center"><Link to="/user/login">Login To Check Your Favourites</Link></h5>
                            </Col>
                            
                            
                        </Row>
                    )}
            </Container>
            <Iconsbar/>
        </>
    )
}

export default Favourites
