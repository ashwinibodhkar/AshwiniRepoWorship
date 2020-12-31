
import { useAddToHomescreenPrompt } from '../hooks/useAddTOHomescreenPrompt';
import React,{useEffect,useState}  from "react";
import {Row,Col, Alert} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close'
import GetAppIcon from '@material-ui/icons/GetApp'
import '../pages/index.css';
export default function InstallPwa() {
  const [show, setShow] = useState(true);
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );

  if (!isVisible) {
    return <div />;
  }

  return (
    <div >
      {/* {/* <button onClick={hide}>Close</button>
      Hello! Wanna add to homescreen? */}
      {/* <button onClick={promptToInstall}>Install free app</button> */}
      <Row>
        <Col className="bannerInstall align-self-center" style={{background : '#fff',color: "#000",height: "200px"}}>
        <Alert show={show}  >  
        <p>For long use Install App
        <Button  onClick={() => setShow(false)} >
          <CloseIcon />
        </Button>
        <Button  onClick={promptToInstall} className="mr-2">
          <GetAppIcon />
        </Button> 
        </p>
      </Alert>
        </Col>
      </Row>
     
    </div>
    
  );
}