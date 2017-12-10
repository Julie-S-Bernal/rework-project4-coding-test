import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';


class TravelsShow extends React.Component {

  state = {
    travel: {},
    rate: 1,
    user: {}
  }

  deleteTravel = () => {
    Axios
      .delete(`/api/travels/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const userMeta = Auth.getPayload();

    Axios.all([
      Axios.get(`/api/travels/${this.props.match.params.id}`),
      Axios.get(`/api/user/${userMeta.userId}`)
    ])
    .then(Axios.spread( (travel, user) => {
      this.setState({
        ...this.state,
        travel: travel.data,
        user: user.data
      });
      Axios
        .get('https://www.alphavantage.co/query', {
          params: {
            function: 'CURRENCY_EXCHANGE_RATE',
            from_currency: this.state.user.homeCurrency, //this.props.user.currency,
            to_currency: this.state.travel.currency,//this.props.travel.currency,
            apikey: 'USD&OZZ3948H22SG8ADG'

          }
        })
        .then(response => {
          const rate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
          this.setState({...this.state, rate});
        })
        .catch(err => console.log(err));
    }))
    .catch(err => console.log(err));
  }

  componentWillMount() {

  }


  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>{ this.state.travel.country}</h3>
          <h4>{ this.state.travel.startTravelDate }</h4>
          <h4>{ this.state.travel.budget } {this.state.user.homeCurrency}</h4>
          <h4>{ this.state.travel.budget * this.state.rate } {this.state.travel.currency}</h4>
          <button className="standard-button">
            <Link to={`/travels/${this.state.travel.id}/edit`} >
              Edit
            </Link>
          </button>
          <button className="main-button" onClick={this.deleteTravel}>
          delete
          </button>
        </div>
      </div>
    );
  }
}

export default TravelsShow;
