/**
 * Created by rafael on 09.02.17.
 */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './LayerTwoView.css';

class LayerTwoView extends React.Component {
  render() {
    return (
      <Row className="LayerTwoDarkblue">
        <div className="moveUpText">
          <Col xs={4} xsOffset={2} md={3} mdOffset={3}>
            <h4>A fantastic heading</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled</p>
            <h4 className="stayLowText">Blaz robar for president</h4>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.</p>
          </Col>
          <Col xs={4} md={3}>
            <h4>Good day blokes</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled</p>
            <h4 className="stayLowText">Vote for Robar</h4>
            <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.</p>
          </Col>
        </div>
      </Row>
    )
  }
}

export default LayerTwoView