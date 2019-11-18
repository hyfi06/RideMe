import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/RouteTime.scss';

class RouteTime extends Component {
  state = {
    price: 0,
    time: 0
  };

  componentDidMount() {
    this.setState({
      price: this.price(
        this.props.originReducer.origin.lat,
        this.props.originReducer.origin.lng,
        this.props.destinyReducer.destiny.lat,
        this.props.destinyReducer.destiny.lng,
        'K'
      )
    });
    this.setState({
      time: this.time(
        this.props.originReducer.origin.lat,
        this.props.originReducer.origin.lng,
        this.props.destinyReducer.destiny.lat,
        this.props.destinyReducer.destiny.lng,
        'K'
      )
    });
  }

  price(lat1, lon1, lat2, lon2, unit) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515 * 15;
      if (unit === 'K') {
        dist = dist * 1.609344;
      }
      if (unit === 'N') {
        dist = dist * 0.8684;
      }
      return dist.toFixed(2);
    }
  }

  time(lat1, lon1, lat2, lon2, unit) {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515 * 3;
      if (unit === 'K') {
        dist = dist * 1.609344;
      }
      if (unit === 'N') {
        dist = dist * 0.8684;
      }
      return dist.toFixed(0);
    }
  }

  render() {
    return (
      <div className='price'>
        <h2 className='price__title'>Precio del viaje</h2>
        <h3 className='price__value'>${this.state.price}</h3>
        <h2 className='price__title'>Tiempo aproximado</h2>
        <h3 className='price__value'>{this.state.time} min.</h3>
        <Link to='/ride'>
          <button className='price__button' type='button'>
            Confirmar viaje
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers;
};

export default connect(mapStateToProps)(RouteTime);
