import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utility/Routes';

import Navbar from './components/utility/Navbar';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import orange from 'material-ui/colors/orange';
// import green from 'material-ui/colors/green';
// import red from 'material-ui/colors/red';
// import grey from 'material-ui/colors/grey'
// import deepPurple from 'material-ui/colors/deepPurple';


import { grey, red, green } from 'material-ui/colors';


// import Button from 'material-ui/Button';
import './scss/style.scss';

const accent = grey['50']; // ---> #fafafa

const theme = createMuiTheme({
  palette: {
    primary: {
      ...grey,
      500: accent
    },// Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red
  }
});

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="container">
            <Navbar />
            <main>
              <Routes />
            </main>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
