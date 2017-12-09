import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';


class TravelsShow extends React.Component {
  state = {
    travel: {}
  }

  deleteTravel = () => {
    Axios
      .delete(`/api/travels/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    Axios
      .get(`/api/travels/${this.props.match.params.id}`)
      .then(res => this.setState({ travel: res.data }))
      .catch(err => console.log(err));
  }

  componentWillMount() {
    Axios
      .get('https://www.alphavantage.co/query', {
        params: {
          function: 'CURRENCY_EXCHANGE_RATE',
          from_currency: 'JPY',
          to_currency: 'USD',
          apikey: 'USD&OZZ3948H22SG8ADG'
        }
      })
      .then(response => {
        console.log(response);
        // get user currency
        // replace from_currency with user currencyList
        // retrieve the new String to get currency exchange rates
        // get {budget} and multiply it by it
        // insert it in the HTML
        // 
      })
      .catch(err => console.log(err));
  }


  render() {
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>{ this.state.travel.country}</h3>
          <h4>{ this.state.travel.startTravelDate }</h4>
          <h4>{ this.state.travel.budget }</h4>
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
