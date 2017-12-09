import React                from 'react';
import { Link, withRouter } from 'react-router-dom';
import {AppBar, Tabs, Tab} from 'material-ui';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <AppBar title="Travel app">
      {/* <Tabs> */}
        { !Auth.isAuthenticated() && <Link to="/login" className="standard-button">Login</Link>}
        {' '}
        { !Auth.isAuthenticated() && <Link to="/register"   className="standard-button">Register</Link>}
        {' '}
        { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
        

      {/* </Tabs> */}
    </AppBar>
  );
};

export default withRouter(Navbar);
