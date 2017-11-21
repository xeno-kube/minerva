import React from 'react';
import Tappable from 'react-tappable';

import {GridList, GridTile} from 'material-ui/GridList';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: "100px",
    paddingBottom: "100px",
    // background: "linear-gradient(white, #FF0066, white)"
    background: "linear-gradient(white, DarkSlateGray, white)"
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    marginLeft: "280px",
  },
  titleStyle: {
    color: 'white',
  },
  temp: {
    width: "250px"
  }
};

const tilesData = [
  {
    img: '0',
    title: 'Minerva',
  },
  {
    img: '1',
    title: 'Online',
  },
  {
    img: '2',
    title: 'Active',
  },
  {
    img: '3',
    title: 'Set Kubernetes Config',
  },
  {
    img: '4',
    title: 'Activity Log',
  }
]

const MinervaMenu = React.createClass({

  displayName: 'MinervaMenu',

  getInitialState() {
    console.log("Getting initial state...")
    return {
      open: false,
    };
  },

  handleTouch: function(e) {
    // console.log("touchTap", e);
    this.setState({open: !this.state.open});
  },

  render() {
    return (
      <div className="MinervaMenu" style={styles.root}>
        <Drawer width={"100%"} openSecondary={true} open={this.state.open} docked={false}>
          <TextField
            hintText="YAML format"
            floatingLabelText="~/.kube/config"
            multiLine={true}
            rows={2}
          /><br />
          <TextField
            hintText="Certificate"
            floatingLabelText="~/.kube/user.pem"
            multiLine={true}
            rows={2}
          /><br />
          <TextField
            hintText="Private Key"
            floatingLabelText="~/.kube/user-key.pem"
            multiLine={true}
            rows={2}
          /><br />
          <TextField
            hintText="Certificate"
            floatingLabelText="~/.kube/ca.pem"
            multiLine={true}
            rows={2}
          /><br /><br />
          <RaisedButton
            label="Cancel"
            onClick={this.handleTouch}
          />
          <RaisedButton
            label="Apply"
            onClick={this.handleTouch}
          />
        </Drawer>
        <GridList style={styles.gridList} cols={2.2}>
          <GridTile
            key="tee"
            title="Test"
            titleStyle={styles.titleStyle}
            onTouchTap={this.handleTouch}
          >
            <div style={styles.temp}>
              <p>ALPHA</p>
            </div>
          </GridTile>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              titleStyle={styles.titleStyle}
            >
              <div style={styles.temp}>
                <p>ALPHA</p>
              </div>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  },
});

module.exports = MinervaMenu;
