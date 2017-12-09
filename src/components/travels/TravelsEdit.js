
import React from 'react';
import Axios from 'axios';

import TravelsForm from './TravelsForm';

class TravelsEdit extends React.Component {
  state = {
    
    travel: {
      budget: '',
      startTravelDate: '',
      endTravelDate: '',
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

  componentDidMount() {
    Axios
      .get(`/api/travels/${this.props.match.params.id}`)
      .then(res => this.setState({ travel: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const travel = Object.assign({}, this.state.travel, { [name]: value });
    this.setState({ travel });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/travels/${this.props.match.params.id}`, this.state.travel)
      .then(() => this.props.history.push(`/travels/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <TravelsForm
        travel={this.state.travel}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default TravelsEdit;
