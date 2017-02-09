import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {NavbarView} from './navbar-view'
import { LayerOneView } from './layerOne-view'
import { LayerTwoView } from './layerTwo-darkblue-view'
import { LayerThreeView } from './layerThree-pinkTrees-view'
import { LayerFourView } from './layerFour-view'
import './App.css';

class App extends Component {
  render() {

    return (

      <Grid fluid>
        <NavbarView/>

        <LayerOneView/>
        <LayerTwoView/>
        <LayerThreeView/>
        <LayerFourView/>

        <Row className="show-grid" style={{
          background: 'url("' + process.env.PUBLIC_URL + '/images/layer2.jpeg") no-repeat center center',
          backgroundSize: 'cover',
          minHeight: '800px'
        }}>
          <Col xs={6}>

            <p>lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>
          </Col>
          <Row className="rectInLayer2">
            <Col xs={10} xsOffset={1} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
              <h3>Experience the rush today</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled</p>
              <Button bsStyle="primary" className='button-layer2 buttonCustomShape'>Get started today</Button>
              <p className="textUnderButton2">lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>

            </Col>
          </Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
