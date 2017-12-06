import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={user.name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="surname"
          placeholder="surname"
          onChange={handleChange}
          value={user.surname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
