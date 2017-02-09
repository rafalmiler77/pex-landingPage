/**
 * Created by rafael on 09.02.17.
 */
import React from 'react'
import { Row } from 'react-bootstrap'
import './LayerThreeView.css';

class LayerThreeView extends React.Component {
  render() {
    return (
      <Row className="show-grid" style={{
        background: 'url("' + process.env.PUBLIC_URL + '/images/layer3.jpeg") no-repeat center center',
        backgroundSize: 'cover',
        height: '300px'
      }}>
      </Row>
    )
  }
}

export default LayerThreeView