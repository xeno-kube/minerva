import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MConsole from './components/MConsole';


import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = React.createClass({
  getInitialState() {
    //return StepStore.getState();
    return {
      animationName: 'push',
    }
  },
  componentWillMount() {
    // Lifecycle function that is triggered just before a component mounts
  },
  componentWillUnmount() {
    // Lifecycle function that is triggered just before a component unmounts
  },
  render() {
    const { animationName } = this.state;
    return (
      <div>
        <CSSTransitionGroup transitionName={ animationName }
            transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
            {/* Remove the below component and its children */}
            {/* and replace with your own */}
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
              <MConsole />
            </MuiThemeProvider>
        </CSSTransitionGroup>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
