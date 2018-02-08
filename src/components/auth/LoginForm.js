import React from 'react';
import {TextField} from 'material-ui';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';



const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (

    <form className ="loginForm" onSubmit={handleSubmit}>

      <div className="form-container">
        <div className ="wrapper">
        <div className="form-group">
          <TextField
            type="text"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>
        <div className="forgot-wrap">
        <Link className="forgot" to = "/index">Forgot Password </Link>
      </div>
        <div className="login-button">
        <Button type="submit" className="btn btn-primary" ><span className ="login">Login</span></Button>
      </div>
      <div className="register-wrap">
        <Link to="/Register"><a className="register">New here? Create an account.</a></Link>
      </div>
      </div>
    </div>
    </form>

  );
};

export default LoginForm;
