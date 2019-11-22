const axios = require('axios');
const { config } = require('../config/index');

const apiMapsKey = config.apiKeyMaps;

class GoogleMapsLib {
  constructor() {
    this.urlDistance = 'https://maps.googleapis.com/maps/api/distancematrix/json';
    this.urlGeocode = 'https://maps.googleapis.com/maps/api/geocode/json';
  }

  getGoogleMapsLocation = ({ address }) => {
    return (
      axios.get(`${this.urlGeocode}?address=${address}&key=${apiMapsKey}`).then((response) => {
        const locationInfo = response.data.results[0];
        const placeId = locationInfo.place_id;
        const coord = locationInfo.geometry.location;
        return { placeId, coord };
      })
    );
  };

  parseLatLngLocation = async (location) => {
    const { address } = location;
    let { lat, lng } = location;
    if (address) {
      const googleLocation = await this.getGoogleMapsLocation({ 'address': address });
      lat = googleLocation.coord.lat;
      lng = googleLocation.coord.lng;
    }
    return { lat, lng };
  };

  latLngToString = ({ lat, lng }) => {
    return `${lat},${lng}`;
  };

  getDistance = ({ origin, destination }) => {
    return (
      axios.get(`${this.urlDistance}?origins=${origin}&destinations=${destination}&key=${apiMapsKey}`).then((res) => {
        const distance = res.data.rows.map((element) => {
          return element.elements[0];
        });
        return distance;
      })
    );
  };
}

module.exports = GoogleMapsLib;
