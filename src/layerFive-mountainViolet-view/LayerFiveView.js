/**
 * Created by rafael on 09.02.17.
 */
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './LayerFiveView.css';

class LayerFiveView extends React.Component {
  render() {
    return (
      <Row className="show-grid" style={{
        background: 'url("' + process.env.PUBLIC_URL + '/images/layer2.jpeg") no-repeat center center',
        backgroundSize: 'cover',
        minHeight: '800px'
      }}>
        <Col xs={6}>

          <p>lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>
        </Col>
        <Row className="violetInMountains">
          <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h3>Experience the rush today</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled</p>
            <Button bsStyle="primary" className='buttonLayerFive buttonCustomShape'>Get started today</Button>
            <p className="textUnderButton2">lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>

          </Col>
        </Row>
      </Row>
    )
  }
}

export default LayerFiveView