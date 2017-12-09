import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import moment from 'moment';
import TravelsForm from './TravelsForm';

class TravelsNew extends React.Component {
  state = {
    travel: {
      budget: '',
      startTravelDate: moment.now(),
      endTravelDate: moment.now(),
      travelDuration: '',
      country: '',
      currency: '',
      hotelCost: '',
      travelCost: '',
      extra: '',
      foodCost: '',
      transportation: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const travel = Object.assign({}, this.state.travel, { [name]: value });
    this.setState({ travel });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/travels', this.state.travel, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <TravelsForm
        handleSubmit={ this.handleSubmit }
        handleChange={ this.handleChange }
        travel={ this.state.travel }
      />
    );
  }
}

export default TravelsNew;
