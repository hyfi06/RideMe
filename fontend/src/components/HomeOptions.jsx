import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as originActions from '../actions/originActions';
import '../assets/styles/components/HomeOptions.scss';

class HomeOptions extends Component {
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    }
  }

  setPosition = position => {
    let currentLat = position.coords.latitude;
    let currentLng = position.coords.longitude;
    this.props.originRequest({ lat: currentLat, lng: currentLng });
  };

  render() {
    return (
      <div className='homeOptions'>
        <Link className='homeOptions-item link' to='/ride'>
          Pide un ride
        </Link>
        <Link className='homeOptions-item link' to='/home'>
          Mi perfil
        </Link>
        <Link className='homeOptions-item link' to='/home'>
          Lugares Frecuentes
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers;
};

export default connect(mapStateToProps, originActions)(HomeOptions);
