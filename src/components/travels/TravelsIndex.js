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
      .get('/api/travels')
      .then(res => this.setState({ travels: res.data }))
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
              <div key={travel._id} >
                <Link to={`/travels/${travel._id}`}>
                  <h1>{travel.country}</h1>
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
