import React from 'react';
import currencyList from '../../lib/currencyList';
import {TextField} from 'material-ui';
import Select from 'material-ui/Select';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';



const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (


    <form className ="registerForm"  onSubmit={handleSubmit}>

      <div className="form-group wrapping">
        <div className="register-container">
          <div className ="wrapper-register">
        <TextField
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={user.name}
          className="form-control"
        />

      <div className="form-group">
        <TextField
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
          value={user.lastName}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="text"
          name="homeCountry"
          placeholder="Country of residence"
          onChange={handleChange}
          value={user.homeCountry}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <FormControl>
          <InputLabel htmlFor="currency-code-native">Currency</InputLabel>
          <Select
            native
            value={user.homeCurrency.code}
            onChange={handleChange}
            className="form-control"
            input={<Input name="currency" id="currency-code-native" />}
          >
            {currencyList.map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
          </Select>
        </FormControl>
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
      <div className="form-group">
        <TextField
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.password_confirmation}
          className="form-control"
        />
      </div>

      <Button type="submit" className="btn btn-primary buttonColor"><span className ="login">Register</span></Button>
    </div>
    </div>
    </div>
    </form>
  );

};

export default RegisterForm;
