import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import moment from 'moment';
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory';

// http://formidable.com/open-source/victory/docs/
const sampleData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


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

  getTravelLengthInDays = () => {
    const days = moment(this.state.travel.endTravelDate).diff(moment(this.state.travel.startTravelDate) , 'days');
    return days;
  }
  divideBudget = () => {
    //the one below gets me the right date, better way to rewritte it?
    const days = moment(this.state.travel.endTravelDate).diff(moment(this.state.travel.startTravelDate) , 'days');
    console.log('divide budget', this.state.travel.budget);
    const result = this.state.travel.budget / days;
    return result;
  }


  componentDidMount() {
    const userMeta = Auth.getPayload();

    Axios.all([
      Axios.get(`/api/travels/${this.props.match.params.id}`),
      Axios.get(`/api/user/${userMeta.userId}`)
    ]).then(
      Axios.spread( (travel, user) => {
        this.setState({
          ...this.state,
          travel: travel.data,
          user: user.data
        });

        Axios.get(
          'https://www.alphavantage.co/query', {
            params: {
              function: 'CURRENCY_EXCHANGE_RATE',
              from_currency: this.state.user.homeCurrency, //this.props.user.currency,
              to_currency: this.state.travel.currency,//this.props.travel.currency,
              apikey: 'USD&OZZ3948H22SG8ADG'
            }
          }
        ).then(
          response => {
            const rate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
            this.setState({...this.state, rate});
          })
          .catch(err => console.log(err));
        }))
        .catch(err => console.log(err));
      }

  render() {
    return(
      <div className="row">
        <div>
          <VictoryChart
            theme={VictoryTheme.material}
          domainPadding={20}
          >
            <VictoryBar
              style={{ data: { fill: "#c43a31" } }}
              data={sampleData}
              x="quarter"
              y="earnings"
            />
          </VictoryChart>
        </div>
        <div className="col-md-6">
          <h3>{ this.state.travel.country}</h3>
          <h4>{ moment(this.state.travel.startTravelDate).format('YYYY MM DD') }</h4>
          <h4>{ moment(this.state.travel.endTravelDate).format('YYYY MM DD') }</h4>
          <h4>{ this.state.travel.budget } {this.state.user.homeCurrency}</h4>
          <h4>{ this.state.travel.budget * this.state.rate } {this.state.travel.currency}</h4>
          <h4>Budget per day:{ this.state.travel.budget } /  </h4>
          <h4>
            {this.getTravelLengthInDays()}
          </h4>
          <h4>divide budget {this.divideBudget()} {this.state.user.homeCurrency}</h4>
          <h4>divide budget {this.divideBudget() * this.state.rate} {this.state.travel.currency}</h4>

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
