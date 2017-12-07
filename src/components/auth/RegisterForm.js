// add money an user earn a year, all the stuff that is not going to change.
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
      <div className="form-group">
        <input
          type="text"
          name="homeCountry"
          placeholder="Country of residence"
          onChange={handleChange}
          value={user.homeCountry}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="homecurrency"
          placeholder="home Currency"
          onChange={handleChange}
          value={user.homeCurrency}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="salary"
          placeholder="salary"
          onChange={handleChange}
          value={user.salary}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="monthlySalary"
          placeholder="monthly Salary"
          onChange={handleChange}
          value={user.monthlySalary}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="livingExpensesYear"
          placeholder="Yearly Living Expenses"
          onChange={handleChange}
          value={user.livingExpensesYear}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="livingExpensesMonth"
          placeholder="Monthly Living Expenses "
          onChange={handleChange}
          value={user.livingExpensesMonth}
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
