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

  render() {
    return(
      <div className="row">

        <div className="image-tile col-md-6">
          <img src={this.state.travel.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{ this.state.travel.title }</h3>
          <h4>{ this.state.travel.category }</h4>
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
