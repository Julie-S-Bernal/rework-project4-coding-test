import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';
import Card from '../utility/Card';
import Auth from '../../lib/Auth';


class TravelsIndex extends React.Component {
  state = {
    travels: []
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${Auth.getPayload().userId}`)
      .then(res => this.setState({ travels: res.data.travels }))
      .catch(err => console.log(err));
  }

  data = {
    image: 'http://fillmurray.com/300/300'
  }

  render() {

    return (
      <div>
        <div className="row">
          <h1> WELCOME BACK</h1>

          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/travels/new" className="main-button">
              <h1>Create new travel</h1>

            </Link>}{ Auth.isAuthenticated() && <Link to="/travels/form" className="main-button">
            </Link>}
          </div>

          {this.state.travels.map(travel => {
            return(
              <Card key={travel.id} image={travel.country.image} name={travel.country.name} url={`/travels/${travel.id}`} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TravelsIndex;
