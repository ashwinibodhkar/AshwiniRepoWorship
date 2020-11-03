import React from "react"
import { Row,Col } from "react-bootstrap"
import "./video.css"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Row>
    <Col className="text-center">
      <div className="video">
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </Col>
  </Row>
  
)
export default Video