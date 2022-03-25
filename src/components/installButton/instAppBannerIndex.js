import * as React from "react"
import { useAddToHomescreenPrompt } from "../../hooks/useAddTOHomescreenPrompt"

import "../../pages/index.css"
import GetAppIcon from "@material-ui/icons/GetApp"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import { Container, Row, Col, Card, Alert } from "react-bootstrap"

export default function InstallPwa() {
	const [prompt, promptToInstall] = useAddToHomescreenPrompt()
	const [isVisible, setVisibleState] = React.useState(false)

	const hide = () => setVisibleState(false)

	React.useEffect(() => {
		if (prompt) {
			setVisibleState(true)
		}
	}, [prompt])

	if (!isVisible) {
		return <div />
	}

	return (
		// <div onClick={hide} className="installAppBtn">
		// 	<button onClick={promptToInstall}>
		// 		<GetAppIcon />
        // 		Install
      	// 	</button>
        // </div>
        
        <Row>
            <Col className="bannerInstall align-self-center">
                <Alert show={hide}>
                    <p>
                        For long use Intall App
						<Button onClick={() => setVisibleState(false)}>
                            <CloseIcon />
                        </Button>
                        <Button className="mr-2" onClick={promptToInstall}>
                            <GetAppIcon />
                        </Button>
                    </p>
                </Alert>
            </Col>
        </Row>

	)
}