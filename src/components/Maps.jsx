import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../assets/styles/components/map.scss';

class MapContainer extends React.Component {
  render() {
    return (
      <div className='map-containers'>
        <Map
          google={google}
          zoom={15}
          initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
        >
          <Marker
            position={{ lat: 19.4267261, lng: -99.1718706 }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
