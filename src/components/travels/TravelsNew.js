import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import moment from 'moment';
import TravelsForm from './TravelsForm';

class TravelsNew extends React.Component {
  state = {
    travel: {
      budget: 0,
      startTravelDate: moment(),
      endTravelDate: moment(),
      country: 'USA',
      currency: 'GBP',
      hotelCost: 0,
      travelCost: 0,
      extra: 0,
      foodCost: 0,
      transportation: 0
    }
  }

  handleChange = ({ target: { name, value }}) => {
    const travel = Object.assign({}, this.state.travel, { [name]: value });
    this.setState({ travel });
  }

  handleStartDateChange = (selectedDate) => {
    this.setState({
      ...this.state,
      travel: {
        ...this.travel,
        startTravelDate: selectedDate
      }
    });
  };

  handleEndDateChange = (selectedDate) => {
    this.setState({
      ...this.state,
      travel: {
        ...this.travel,
        endTravelDate: selectedDate
      }
    });
  };

  handleSubmit = (e) => {

    console.log(this.state.travel.startTravelDate.format('YYYY-MM-DD'));

    e.preventDefault();
    Axios
      .post('/api/travels', {
        ...this.state.travel,
        startTravelDate: this.state.travel.startTravelDate.format('YYYY-MM-DD'),
        endTravelDate: this.state.travel.endTravelDate.format('YYYY-MM-DD')
      }, {
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
        handleStartDateChange={ this.handleStartDateChange }
        handleEndDateChange={ this.handleEndDateChange}
        travel={ this.state.travel }
      />
    );
  }
}

export default TravelsNew;
