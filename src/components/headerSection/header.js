import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Drawer from './drawer';
//import logo1 from '../../images/logo11.png';
import InstallPwa from '../InstallApp';
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {

	const[checkInstalled, setCheckInstalled] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(display-mode: standalone)').matches) {
			console.log("app installed")  
			setCheckInstalled(true)
		}
	})

	return(
		<Container fluid className="headPart">
			<Container>
				<Row >
					<Col>
						<Navbar variant="dark" expand="lg" className="navWidth p-0">
							{/* sidebar */}
							<Drawer />
							{/* logo */}
							<Navbar.Brand href="/" className="logo">
								<h3>tune</h3><h4>Worship</h4>
								{/* <img src={logo1}></img> */}
							</Navbar.Brand>
							<InstallPwa />
						</Navbar>

					</Col>
				</Row>
			</Container>

		</Container>
	)
}


Header.propTypes = {
	siteTitle: PropTypes.string,
	subtitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
	subtitle: ``,
}

export default Header