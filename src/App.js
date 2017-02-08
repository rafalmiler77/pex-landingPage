import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {Nav, NavItem, Navbar} from 'react-bootstrap'

import './App.css';

class App extends Component {
  render() {

    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }
    return (

      <Grid fluid>

        <Row className="show-grid" style={{
          background: 'url("' + process.env.PUBLIC_URL + '/images/layer1.jpeg") no-repeat center center',
          backgroundSize: 'cover',
          minHeight: '800px'
        }}>

          <Navbar className="navbarCustomStyle">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><span className="pex">pex</span> <span className="afterPex">Photoshop Website Template</span></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight={true} activeKey={1} onSelect={handleSelect}>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem eventKey={2} href="#">How it works</NavItem>
              <NavItem eventKey={3} href="#">Services</NavItem>
              <NavItem eventKey={4} href="#">FAQ</NavItem>
              <NavItem eventKey={5} href="#">Contact</NavItem>
            </Nav>
          </Navbar>

          <Col className='firstLayer' xs={6}>
            <h2 className="title-layer1">Designs your eyeballs</h2>
            <h2 className="title-layer1">will thank you for</h2>
            <Button bsStyle="primary" className='button-layer1 buttonCustomShape'>Get started today</Button>
            <p className="textUnderButton" >lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>
          </Col>
        </Row>
        <Row className="rectAfterLayer1">
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
              <p className="textUnderButton2" >lkdjfkj fsj sdf lsad fls fll flsf sl flskf rfflsa jf kls</p>

            </Col>
          </Row>
        </Row>
        <Row className="whiteLayer">
          <Col xs={8} xsOffset={1} sm={6} smOffset={1}  md={4} mdOffset={2} lg={4} lgOffset={2}>
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
        <Row className="show-grid" style={{
          background: 'url("' + process.env.PUBLIC_URL + '/images/layer3.jpeg") no-repeat center center',
          backgroundSize: 'cover',
          minHeight: '300px'
        }}>
        </Row>
      </Grid>
    );
  }
}

export default App;
