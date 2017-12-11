import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import moment from 'moment';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryPie} from 'victory';

// http://formidable.com/open-source/victory/docs/
const sampleData = [
  {day: 1, earnings: 200},
  {day: 2, earnings: 16500},
  {day: 3, earnings: 14250},
  {day: 4, earnings: 19000}
];


class TravelsShow extends React.Component {

  state = {
    travel: null,
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

  newBudget =() => {

    const budgetSum = this.state.travel.hotelCost +  this.state.travel.extra + this.state.travel.foodCost + this.state.travel.transportation + this.state.travel.travelCost;
    console.log('this is', budgetSum);
    return(budgetSum);

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
    if (!this.state.travel) return null;
    return(
      <div className="row">
        <div>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryBar
              style={{ data: { fill: '#AEEA00' } }}
              data={sampleData}
              x="quarter"
              y="earnings"
            />
          </VictoryChart>
        </div>
        <div>
          <VictoryPie
            colorScale={['#880E4F', '#2E7D32','#AEEA00', '#F50057', '#827717'  ]}
            data={[
              { x: `${this.state.travel.foodCost}`, y: 40 },
              { x: `${this.state.travel.hotelCost}`, y: 40 },
              { x: `${this.state.travel.extra}`, y: 55 },
              { x: `${this.state.travel.travelCost}`, y: 35 },
              { x: `${this.state.travel.transportation}`, y: 40 }
            ]}
          />
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
          <h4>  {this.newBudget()}</h4>
          <Link to={`/travels/${this.state.travel._id}/edit`} >
            Edit
          </Link>
          <button className="main-button" onClick={this.deleteTravel}>
          delete
          </button>
        </div>
      </div>
    );
  }
}

export default TravelsShow;
