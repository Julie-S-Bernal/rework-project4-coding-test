import React     from 'react';
import RegisterForm from './RegisterForm';
import Axios     from 'axios';

import Auth from '../../lib/Auth';


class Register extends React.Component {
  state = {

    user: {
      name: '',
      surname: '',
      email: '',
      password: '',
      // passwordConfirmation: '',
      homeCountry: '',
      homeCurrency: '',
      salary: '',
      monthlySalary: '2',
      livingExpensesYear: '',
      livingExpensesMonth: ''
    }
  };
  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

    handleSubmit = (e) => {
      e.preventDefault();

      Axios
        .post('/api/register', this.state.user)
        .then(res => {
          Auth.setToken(res.data.token);
          this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }

    render() {
      return (
        <RegisterForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
}

export default Register;
