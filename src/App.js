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
          <Row className="show-grid" style={{background: 'url("' + process.env.PUBLIC_URL + '/images/layer1.jpeg") no-repeat center center fixed', backgroundSize: 'cover', minHeight: '800px'}}>
            <Col xs={6} md={4}>
              <h2 className="title-layer1">Designs your eyeballs</h2>
              <h2 className="title-layer1">will thank you for</h2>
              <Button style={btnCustomStyle} bsStyle="primary" className='button-layer1' >Get started today</Button>
              <p>lkdjfkj fsj sdf lsad fls fll flsf sl flskf  rfflsa jf kls</p>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
