import React from 'react';
import Tappable from 'react-tappable';

import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: "100px",
    paddingBottom: "100px",
    // background: "linear-gradient(white, #1C6BA0, white)"
    background: "linear-gradient(white, red, white)"
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
    title: 'Poseidon',
  },
  {
    img: '1',
    title: 'Offline',
  },
  {
    img: '2',
    title: 'Inactive',
  },
  {
    img: '3',
    title: 'Adjust CRON',
  },
  {
    img: '4',
    title: 'Adjust Replicas',
  },
  {
    img: '5',
    title: 'Activity Log',
  }
]

const PoseidonMenu = React.createClass({

  displayName: 'PoseidonMenu',

  getInitialState() {
    console.log("Getting initial state...")
    return {
      la: true,
    };
  },

  render() {
    return (
      <div className="PoseidonMenu" style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
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

module.exports = PoseidonMenu;
