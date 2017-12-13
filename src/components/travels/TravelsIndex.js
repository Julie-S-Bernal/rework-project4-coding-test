import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';


import Auth     from '../../lib/Auth';

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

  render() {
    return (
      <div>
        <div className="row">
          <h1> WELCOME BACK</h1>
          <div className="page-banner col-md-12">
            <button className="main-button">
              { Auth.isAuthenticated() && <Link to="/travels/new" className="main-button">
                <h1>Create new travel</h1>
              </Link>}{ Auth.isAuthenticated() && <Link to="/travels/form" className="main-button">
              </Link>}
            </button>
          </div>
          {this.state.travels.map(travel => {
            return(
              <div key={travel.id} >
                <Link to={`/travels/${travel.id}`}>
                  <h1>{travel.country.name}</h1>
                  <img src={travel.country.image} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TravelsIndex;
