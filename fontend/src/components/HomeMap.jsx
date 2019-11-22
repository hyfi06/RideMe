import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import destinypin from '../assets/static/destinypin.png';
import pin from '../assets/static/pin.png';

const containerStyle = {
  height: '100%',
  width: '75%'
};

let currentLat;
let currentLng;

function setPosition(position) {
  currentLat = position.coords.latitude;
  currentLng = position.coords.longitude;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setPosition);
}

export class _HomeMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: currentLat,
        lng: currentLng
      }
    };
  }

  render() {
    const { currentLocation } = this.state;
    const { google } = this.props;

    return (
      <Map
        google={google}
        containerStyle={containerStyle}
        zoom={15}
        center={currentLocation}
        initialCenter={currentLocation}
      >
        {this.props.originReducer.origin ? (
          <Marker position={this.props.originReducer.origin} icon={pin} />
        ) : (
          ''
        )}
        {this.props.destinyReducer.destiny ? (
          <Marker
            position={this.props.destinyReducer.destiny}
            icon={destinypin}
          />
        ) : (
          ''
        )}
      </Map>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers;
};

const HomeMap = connect(mapStateToProps)(_HomeMap);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(HomeMap);
