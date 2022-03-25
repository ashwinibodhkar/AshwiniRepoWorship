import React, { useEffect, useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./index.css"
import Aos from "aos"
import "aos/dist/aos.css"
import Img from "gatsby-image"
import Slider from "../components/slider/slider"
import Logo from "../images/logo.png"
import Trending from "../components/trending/trending"
import Category from "../components/categorySection/indexCategory"
import Artist from "../components/artist/artistName"
import Iconsbar from "../components/iconsbar/navigationLine"
import { FaAngleDoubleRight } from "react-icons/fa"
import AboutArtist from "../components/aboutArtist/testimony"
import Button from "@material-ui/core/Button"
import NewArrivals from "../components/newArrivals/newArrivals"

import PushNotification from "../components/PushNotifications"
// import NewArrivals from "../components/newArrivals/newArrivals"


export default function BlogIndex({ data }) {

	//for setting install banner on build
	const [checkInstalled, setCheckInstalled] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(display-mode: standalone)').matches) {  
			console.log("this app is in standalone mode")
			setCheckInstalled(true)
		}
	})

	useEffect(() => {
		Aos.init({ duration: 1000 })
	}, [])

	//console.log("check seo: ", data.site.siteMetadata.title)
	return (
		<>
			<Layout />
			<SEO 
				title="Home"
				image={Logo} 
				description={data.site.siteMetadata.description}
			/>
			<Container fluid className="bgPage">
				{/* Install Banner */}
				{/* <Skel /> */}
				
				{ checkInstalled === false ? 
					// <Row>
					// 	<Col className="bannerInstall align-self-center">
					// 		<Alert show={show}>
					// 			<p>
					// 				For long use Intall App
					// 				<Button onClick={() => setShow(false)}>
					// 					<CloseIcon />
					// 				</Button>
					// 				<Button className="mr-2">
					// 					<GetAppIcon />
					// 				</Button>
					// 			</p>
					// 		</Alert>
					// 	</Col>
					// </Row>
					<instAppBannerIndex/>
					: <div></div>
				}
				
				{/* top slider section */}
				<Row>
					<Col>
						<Slider />
					</Col>
				</Row>

				{/* New Arrivals */}
				<Container>
					<section>
						<Row>
							<Col className="text-white">
								<h2>Exclusive Songs</h2>
							</Col>
							<Col style={{textAlign:'right', color:"#a4a4a4", margin:'auto'}}>
								<h6>See More</h6>
							</Col>
						</Row>
					
						<Row>
							<Col >
								<NewArrivals/>
							</Col>
						</Row>
					</section>
				{/* category section */}
			
				<section>
					<Row>
						<Col className=" text-white">
							<h2>Category</h2>
						</Col>
						<Col style={{textAlign:'right', color:"#a4a4a4",margin:'auto'}}>
							<h6>See More</h6>
						</Col>
					</Row>
				
				<Row >
					<Col >
						<Category />
					</Col>
				</Row>
				</section>
				{/* trending section */}
				<section>
					<Row>
						<Col className=" text-white">
							<h2>Trending songs</h2>
						</Col>
					</Row>
				</section>
				<Row>
					<Col>
						<Trending />
					</Col>
				</Row>
				{/* artist testimony section */}
				<section>
					<Row>
						<Col xs={8} className=" text-white">
							<h2>About Artist</h2>
						</Col>
						<Col xs={4} className="text-right align-self-center">
							<Link to="/artist">
								<FaAngleDoubleRight
									size={22}
									color={"#fff"}
								></FaAngleDoubleRight>
							</Link>
						</Col>
					</Row>
				</section>
				<Row>
					<Col>
						<AboutArtist />
					</Col>
				</Row>

				{/* Artist section */}
				<section>
					<Row>
						<Col xs={8} className=" text-white">
							<h2>Songs By Artist</h2>
						</Col>
						<Col xs={4} className="text-right align-self-center">
							<Link to="/songsbyartist">
								<FaAngleDoubleRight
									size={22}
									color={"#fff"}
								></FaAngleDoubleRight>
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
						<Col className=" text-white">
							<h2>Some Tracks For You</h2>
						</Col>
					</Row>
					<Row className="songList ">
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<Col xs="12" md="3" className="mb-2 ">
								<Card
									data-aos="zoom-in"
									data-aos-delay="20"
									data-aos-duration="300"
								>
									<Row>
										<Col xs={5} md={5} className="align-self-center ">
											<Img
												fluid={
													node.frontmatter.featureImage.childImageSharp.fluid
												}
											/>
										</Col>
										<Col xs={7} md={7} className="align-self-center">
											<Link to={node.fields.slug}>
												<Card.Title>{node.frontmatter.title}</Card.Title>
											</Link>
											<Card.Subtitle className="mb-2 text-muted">
												{node.frontmatter.artist}
											</Card.Subtitle>
										</Col>
									</Row>
								</Card>
							</Col>
						))}
					</Row>
					<Row className="allSongsBtn pb-5 text-center">
						<Col>
							<Button><Link style={{color: 'white'}} to="/allsongs">Goto All Songs</Link></Button>
						</Col>
					</Row>
					
				</section>
				</Container>
				<Iconsbar />
			</Container>
			<PushNotification/>
		</>
	)
}

export const query = graphql`
  	{
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/sheets/" } }
			sort: { fields: [frontmatter___title], order: ASC },
			limit: 50
		) 
		{
			edges 
			{
				node 
				{
					id
					frontmatter 
					{
						title
						artist
						key
						featureImage 
						{
							childImageSharp 
							{
								fluid(maxWidth: 500, quality: 100) 
								{
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
		site 
		{
			siteMetadata 
			{
				title
				description
			}
		}
  	}
`