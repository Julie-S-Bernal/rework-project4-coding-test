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
                <h1>Prepare your travel</h1>
              </Link>}{ Auth.isAuthenticated() && <Link to="/travels/form" className="main-button">
              </Link>}
            </button>
          </div>
          <div className="page-banner col-md-12">
            <button className="main-button">
              { Auth.isAuthenticated() && <Link to="/travels/new" className="main-button">
                <h1>Current Travel</h1>
              </Link>}{ Auth.isAuthenticated() && <Link to="/travels/form2" className="main-button">
              </Link>}
            </button>
          </div>
          {this.state.travels.map(travel => {
            return(
              <div key={travel.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/travels/${travel.id}`}>
                  <h1 src={travel.name} />
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
