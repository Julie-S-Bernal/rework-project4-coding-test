import React     from 'react';
import RegisterForm from './RegisterForm';
import Axios     from 'axios';

import Auth from '../../lib/Auth';


class Register extends React.Component {
  state = {

    user: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      homeCountry: '',
      homeCurrency: ''

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
      <div>
        <RegisterForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
          <div className="registerBackground">
          </div>
          </div>

      );
    }
}

export default Register;
