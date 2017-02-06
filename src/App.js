import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import './App.css';

class App extends Component {
  render() {

    return (

        <Grid fluid style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + '/images/layer1.jpeg")', backgroundSize: 'cover', minHeight: '800px'}}>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Button bsStyle="success">Get started today</Button>
            </Col>
          </Row>
        </Grid>

    );
  }
}

export default App;
