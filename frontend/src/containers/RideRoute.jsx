import React from 'react';
import Vertical from '../layouts/Vertical';
import User from '../components/User';
import { withScriptjs } from 'react-google-maps';
import RouteMap from '../components/RouteMap';
import RouteTime from '../components/RouteTime';

const RideRoute = () => {
  const MapLoader = withScriptjs(RouteMap);

  return (
    <div className='verticalContent'>
      <Vertical>
        <User />
        <RouteTime />
      </Vertical>
      <MapLoader
        googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default RideRoute;
