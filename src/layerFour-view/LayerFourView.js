/**
 * Created by rafael on 09.02.17.
 */
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './LayerFourView.css';

class LayerFourView extends React.Component {
  render() {
    return (
      <Row id="howItWorks" className="whiteLayerFour">
        <Col xs={6} xsOffset={6} sm={6} smOffset={6} md={6} mdOffset={6} lg={4} lgOffset={6}>
          <h4>A heading is what you need here</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled</p>
          <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
        </Col>
      </Row>
    )
  }
}

export default LayerFourView