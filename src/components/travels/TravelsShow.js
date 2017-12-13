import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import moment from 'moment';
import {VictoryChart, VictoryBar, VictoryTheme, VictoryPie} from 'victory';
import CostsForm from './CostsForm';
import LiveRates from './LiveRates';

import BackButton from '../utility/BackButton';

// http://formidable.com/open-source/victory/docs/

class TravelsShow extends React.Component {

  state = {
    travel: null,
    rate: 1,
    user: {},
    convertingMoney: ''
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

  newBudget = () => {
    const budgetSum = this.state.travel.hotelCost +  this.state.travel.extra + this.state.travel.foodCost + this.state.travel.transportation + this.state.travel.travelCost;
    const days = this.getTravelLengthInDays();
    this.setState({ totBudgetWithRate: budgetSum * this.state.rate, homeBudget: budgetSum, travelLength: days });
    return budgetSum;
  }

  handleChange = ({ target: { name, value } }) => {
    const travel = Object.assign({}, this.state.travel, { [name]: value });
    this.setState({ travel: travel });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/travels/${this.state.travel.id}`, this.state.travel)
      .then(res => this.setState({ travel: res.data }))
      .catch(err => console.log(err));
  }

  handleExchangeChange = (e) => {
    this.setState({ convertingMoney: e.target.value });
  }

  handleExchangeSubmit = (e) => {
    e.preventDefault();
    const rate = this.state.convertingMoney * this.state.rate;
    this.setState({ convertedMoney: rate, convertingMoney: '' });
  }


  componentDidMount() {
    const userMeta = Auth.getPayload();

    Axios.all([
      Axios.get(`/api/travels/${this.props.match.params.id}`),
      Axios.get(`/api/users/${userMeta.userId}`)
    ]).then(
      Axios.spread( (travel, user) => {
        this.setState({
          ...this.state,
          travel: travel.data,
          user: user.data
        }, () => {
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
              this.setState({ ...this.state, rate }, () => this.newBudget());
            })
            .catch(err => console.log(err));
        });


      }))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.travel) return null;
    //
    var sum = this.state.travel.foodCostValues.reduce((a, b) => a + b);
    var avg = sum / this.state.travel.foodCostValues.length;

    var extraSum = this.state.travel.extraCostValues.reduce((a, b) => a + b);
    var avgExtra = extraSum / this.state.travel.extraCostValues.length;

    var transSum = this.state.travel.transportationCostValues.reduce((a, b) => a + b);
    var avgTrans = transSum / this.state.travel.transportationCostValues.length;

    //
    const sampleData = [
      { quarter: 'Average Food Cost', earning: avg },
      { quarter: 'Initial Food Cost', earning: this.state.travel.foodCostValues[0] },
      { quarter: 'Average Extra Cost', earning: avgExtra },
      { quarter: 'Initial Extra cost', earning: this.state.travel.extraCostValues[0] },
      { quarter: 'Average Transportation Food Cost', earning: avgTrans },
      { quarter: 'Initial Transportation Food Cost', earning: this.state.travel.transportationCostValues[0] }
    ];
    return(
      <div className="row">
        <div>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
            style={{ border: { stroke: 'black' }, labels: {fontSize: 10 } }}
          >
            <VictoryBar
              style={{ data: { fill: '#AEEA00' },labels: {fontSize: 10 } }}
              data={sampleData}

              x="quarter"
              y="earning"
            />
          </VictoryChart>
        </div>
        <div>
          <VictoryPie

            colorScale={['#880E4F', '#2E7D32','#AEEA00', '#F50057', '#827717'  ]}

            data={[
              { x: 'food cost', y: parseInt(this.state.travel.foodCost), label: `Food ${this.state.travel.foodCost}` },
              { x: 'hotel cost', y: parseInt(this.state.travel.hotelCost), label: `Hotel ${this.state.travel.hotelCost}` },
              { x: 'extra', y: parseInt(this.state.travel.extra), label: `Extra ${this.state.travel.extra}`},
              { x: 'travel cost', y: parseInt(this.state.travel.travelCost), label: `Travel  ${this.state.travel.travelCost}`},
              { x: 'transportation', y: parseInt(this.state.travel.transportation), label: `Transportation ${this.state.travel.transportation}` }
            ]}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => {

                    return [{
                      target: 'labels',
                      mutation: (props) => {
                        return props.text === 'clicked' ?
                          null : { text: 'clicked' };
                      }
                    }];
                  }
                }
              }
            ]}
          />
        </div>
        <div className="col-md-6">

          <h3>Country name:{ this.state.travel.country.name}</h3>
          <h4>start date:{ moment(this.state.travel.startTravelDate).format('YYYY MM DD') }</h4>
          <h4>end date:{ moment(this.state.travel.endTravelDate).format('YYYY MM DD') }</h4>
          { !this.state.homeBudget && <p>LOADING....</p>}
          { this.state.homeBudget && [
            <h4 key={1}>total budget without exchanged rate:{ this.state.homeBudget } {this.state.user.homeCurrency}</h4>,
            <h4 key={2}>total budget multiplied by exchanged rate:{ parseFloat((this.state.totBudgetWithRate).toFixed(2)) } {this.state.travel.currency}</h4>,
            <h4 key={3}>length of travel: {this.state.travelLength}</h4>,
            <h4 key={4}>per day budget home {this.state.homeBudget / this.state.travelLength } {this.state.user.homeCurrency}</h4>,
            <h4 key={5}>per day budget exchanged { parseFloat((this.state.totBudgetWithRate / this.state.travelLength).toFixed(2)) } {this.state.travel.currency}</h4>
          ]}
          <h4> I AM  THE DIFFERENCE {avg - this.state.travel.foodCostValues[0] }</h4>
          <h4> I AM  THE DIFFERENCE {avgExtra - this.state.travel.extraCostValues[0] }</h4>
          <h4> I AM  THE DIFFERENCE {avgTrans  - this.state.travel.transportationCostValues[0] }</h4>
          <CostsForm
            travel={this.state.travel}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <LiveRates
            convertingMoney={this.state.convertingMoney}
            handleExchangeChange={this.handleExchangeChange}
            handleExchangeSubmit={this.handleExchangeSubmit}
          />
          <p>{ this.state.convertedMoney }</p>
          <Link to={`/travels/${this.state.travel.id}/edit`} >
            Edit
          </Link>
          <button className="main-button" onClick={this.deleteTravel}>
          delete
          </button>
          <BackButton />
        </div>
      </div>
    );
  }
}

export default TravelsShow;
