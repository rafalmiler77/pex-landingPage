import React from 'react';
import { Grid } from 'react-bootstrap'
import { NavbarView } from './navbar-view'
import { LayerOneView } from './layerOne-view'
import { LayerTwoView } from './layerTwo-darkblue-view'
import { LayerThreeView } from './layerThree-pinkTrees-view'
import { LayerFourView } from './layerFour-view'
import { LayerFiveView } from './layerFive-mountainViolet-view'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <NavbarView/>
        <LayerOneView/>
        <LayerTwoView/>
        <LayerThreeView/>
        <LayerFourView/>
        <LayerFiveView/>
      </Grid>
    );
  }
}

export default App;
