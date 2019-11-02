import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../assets/styles/components/map.scss';

const style = {
  height: 'inherit',
  width: '100%',
};

class MapContainer extends React.Component {
  render() {
    return (
      <section className='map-container'>
        <Map
          google={google}
          zoom={15}
          style={style}
          initialCenter={{ lat: 19.4267261, lng: -99.1718706 }}
        />
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapContainer);
