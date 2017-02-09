/**
 * Created by rafael on 09.02.17.
 */
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './LayerOneView.css';

class LayerOneView extends React.Component {
  render() {
    return (
    <Row className="show-grid" style={{
      background: 'url("' + process.env.PUBLIC_URL + '/images/layer1.jpeg") no-repeat center center',
      backgroundSize: 'cover',
      minHeight: '800px'
    }}>
      <Col className='firstLayer' xs={6}>
        <h2 className="title-layer1">Designs your eyeballs</h2>
        <h2 className="title-layer1">will thank you for</h2>
        <Button bsStyle="primary" className='button-layer1 buttonCustomShape'>Get started today</Button>
        <p className="textUnderButton">lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>
      </Col>
    </Row>
    )
  }
}

export default LayerOneView