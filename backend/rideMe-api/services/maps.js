const axios = require('axios');
const { config } = require('../config/index');

const apiMapsKey = config.apiKeyMaps;

const getDistance = async ({ origin, destination }) => {
  const distance = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiMapsKey}`);

  return distance.rows.elements;
};

module.exports = { getDistance };
