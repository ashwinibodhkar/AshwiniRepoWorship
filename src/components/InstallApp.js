import React from 'react';
import { Button, Modal, Card, CardText, CardBody, CardTitle } from 'react-bootstrap';
import useIosInstallPrompt from '../hooks/useIosInstallPrompt'
import useWebInstallPrompt from '../hooks/useWebInstallPrompt'

export const InstallPWA = () => {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIosInstallPrompt();
  const [webInstallPrompt, handleWebInstallDeclined, handleWebInstallAccepted] = useWebInstallPrompt();

  if (!iosInstallPrompt && !webInstallPrompt) {
    return null;
  }
  return (
    <Modal isOpen centered>
      <Card>
        <img
          className="mx-auto"
          style={{
            borderTopRightRadius: '50%',
            borderTopLeftRadius: '50%',
            backgroundColor: '#fff',
            marginTop: '-50px'
          }}
          width="100px"
          src="content/images/appIcon-transparent.png"
          alt="Icon"
        />
        <CardBody>
          <CardTitle className="text-center">
            <h3>Install App</h3>
          </CardTitle>
          {iosInstallPrompt && (
            <>
              <CardText className="text-center">
                Tap
                <img
                  src="content/images/Navigation_Action_2x.png"
                  style={{ margin: 'auto 8px 8px' }}
                  className=""
                  alt="Add to homescreen"
                  width="20"
                />
                then &quot;Add to Home Screen&quot;
              </CardText>
              <div className="d-flex justify-content-center">
                <Button onClick={handleIOSInstallDeclined}>Close</Button>
              </div>
            </>
          )}
          {webInstallPrompt && (
            <div className="d-flex justify-content-around">
              <Button color="primary" onClick={handleWebInstallAccepted}>
                Install
              </Button>
              <Button onClick={handleWebInstallDeclined}>Close</Button>
            </div>
          )}
        </CardBody>
      </Card>
    </Modal>
  );
};