import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

import './App.css';

let img1= process.env.PUBLIC_URL
let img2= '/images/layer1.jpeg'

class App extends Component {
  render() {

    return (


        <Grid fluid style={{backgroundImage: 'url("' + img1 + img2 + '")', backgroundSize: 'cover', minHeight: '800px'}}>
          <Row   className="show-grid">
            <Col  xs={6} md={4}>
              <Button bsStyle="success">Get started today</Button>
            </Col>
          </Row>
          {/*<img src={img1 + img2}*/}
          />
        </Grid>

    );
  }
}

export default App;
{/*<img src={process.env.PUBLIC_URL + '/images/layer1.jpeg'}*/}
     {/*role="presentation"*/}
{/*/>*/}