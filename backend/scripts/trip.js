const DriversServices = require('../services/drivers');
const TripEvent = require('../events/trips').default;
class TripTest {
  constructor () {
    this.tripEvent = new TripEvent;
  }
}

module.exports = TripTest;
