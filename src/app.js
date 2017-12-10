import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, } from 'material-ui/styles';
import Navbar from './components/utility/Navbar';


import Routes from './components/utility/Routes';

//
// const theme = createMuiTheme({
//   palette: {
//     primaryColor: teal200,
//     accent1Color: amber600
//   }
// });


class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider >
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


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
