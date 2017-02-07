import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import './App.css';

class App extends Component {
  render() {

      let btnCustomStyle={
        "backgroundImage" : "none",
        "backgroundColor" : "#8600cb"
      };
    return (

        <Grid fluid>
          <Row className="show-grid" style={{background: 'url("' + process.env.PUBLIC_URL + '/images/layer1.jpeg") no-repeat center center', backgroundSize: 'cover', minHeight: '800px'}}>
            <Col xs={6}>
              <h2 className="title-layer1">Designs your eyeballs</h2>
              <h2 className="title-layer1">will thank you for</h2>
              <Button style={btnCustomStyle} bsStyle="primary" className='button-layer1' >Get started today</Button>
              <p>lkdjfkj fsj sdf lsad fls fll flsf sl flskf  rfflsa jf kls</p>
            </Col>
          </Row>
          <Row>
            <Col xs={3} xsOffset={3}>
              <h4>A fantastic heading</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              <h4>Blaz robar for president</h4>
              <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
            <Col xs={3}>
              <h4>Good day blokes</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
              <h4>Vote for Robar</h4>
              <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
