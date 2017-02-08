/**
 * Created by rafael on 08.02.17.
 */
import React, {Component} from 'react';
import {Nav, NavItem, Navbar, FormGroup, FormControl} from 'react-bootstrap'

import './NavbarView.css';

class NavbarView extends Component {
  render() {

    return (

          <Navbar className="navbarCustomStyle" fixedTop={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><span className="pex">pex</span> <span className="afterPex">Photoshop Website Template</span></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight={true} activeKey={1}>
              <NavItem eventKey={1} href="#about">About</NavItem>
              <NavItem eventKey={2} href="#howItWorks">How it works</NavItem>
              <NavItem eventKey={3} href="#services">Services</NavItem>
              <NavItem eventKey={4} href="#faq">FAQ</NavItem>
              <NavItem eventKey={5} href="#contact">Contact</NavItem>
              <Navbar.Form pullRight>
                <FormGroup>
                  <FormControl className='CustomSearchForm' type="text" placeholder="Search Website" />
                </FormGroup>
                {' '}
              </Navbar.Form>
            </Nav>
          </Navbar>
    )
  }
}
      export default NavbarView