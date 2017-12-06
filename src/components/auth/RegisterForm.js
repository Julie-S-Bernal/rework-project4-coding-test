import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
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
          placeholder="Surname"
          onChange={handleChange}
          value={user.surname}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      {/* <div className="form-group">
        <input
          type="text"
          name="Country of residence"
          placeholder="Country of residence"
          onChange={handleChange}
          value={user.country_of_residence}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="currency"
          placeholder="currency"
          onChange={handleChange}
          value={user.default_currency}
          className="form-control"
        />
      </div> */}
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
      <div className="form-group">
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.password_confirmation}
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
