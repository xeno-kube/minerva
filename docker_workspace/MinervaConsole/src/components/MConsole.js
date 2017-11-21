import React from 'react';
import Tappable from 'react-tappable';

import SmoothScroll from 'smoothscroll';

import MinervaMenu from './MinervaMenu';
import HephaestusMenu from './HephaestusMenu';
import HadesMenu from './HadesMenu';
import ArtemisMenu from './ArtemisMenu';
import PoseidonMenu from './PoseidonMenu';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import {GridList, GridTile} from 'material-ui/GridList';

const MConsole = React.createClass({

  displayName: 'MConsole',

  getInitialState() {
    console.log("Getting initial state...")
    return {
      drawer_open: true,
    };
  },

  handleTouchMinerva: function(e) {
    // console.log("touchTap", e);
    var dest = document.querySelector('div.MinervaMenu');
    SmoothScroll(dest);
  },

  handleTouchHephaestus: function(e) {
    // console.log("touchTap", e);
    var dest = document.querySelector('div.HephaestusMenu');
    SmoothScroll(dest);
  },

  handleTouchHades: function(e) {
    // console.log("touchTap", e);
    var dest = document.querySelector('div.HadesMenu');
    SmoothScroll(dest);
  },

  handleTouchArtemis: function(e) {
    // console.log("touchTap", e);
    var dest = document.querySelector('div.ArtemisMenu');
    SmoothScroll(dest);
  },

  handleTouchPoseidon: function(e) {
    // console.log("touchTap", e);
    var dest = document.querySelector('div.PoseidonMenu');
    SmoothScroll(dest);
  },

  render() {
    return (
      <div className="MConsole">
        <Drawer open={true} docked={true}>
          <List>
            <div style={{height:'100px', marginTop:"35px", marginLeft:"50px"}}>
              <h3>Minerva console</h3>
              <p>Version 1.0.0</p>
            </div>
            <Divider inset={true}/>
            <Subheader inset={true}>Xeno-kube Modules</Subheader>
            <ListItem insetChildren={true} primaryText="Minerva" onTouchTap={this.handleTouchMinerva}/>
            <ListItem insetChildren={true} primaryText="Hephaestus" onTouchTap={this.handleTouchHephaestus}/>
            <ListItem insetChildren={true} primaryText="Hades" onTouchTap={this.handleTouchHades}/>
            <ListItem insetChildren={true} primaryText="Artemis" onTouchTap={this.handleTouchArtemis}/>
            <ListItem insetChildren={true} primaryText="Poseidon" onTouchTap={this.handleTouchPoseidon}/>
          </List>
        </Drawer>
        <MinervaMenu />
        <HephaestusMenu />
        <HadesMenu />
        <ArtemisMenu />
        <PoseidonMenu />

      </div>
    );
  },
});

module.exports = MConsole;
