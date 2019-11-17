const MongoLib = require('../lib/mongo');
const GoogleMapsLib = require('../lib/googleMaps');
const DriversService = require('../services/drivers');

const driversService = new DriversService();
const gooMapLib = new GoogleMapsLib();
class TripsServices {
  constructor() {
    this.collection = 'trips';
    this.mongoDB = new MongoLib();
  }

  async test({ origin, destination }) {
    const coordOrigin = await gooMapLib.parseLatLngLocation(origin);
    const coordDestination = await gooMapLib.parseLatLngLocation(destination);

    const trip = {
      'origin': coordOrigin,
      // 'destination': parseLatLngLocation(destination),
      'status': 'requested',
    };

    const nearDrivers = await driversService.getDrivers(trip.origin);
    // const minTimeArriveDriver = ;
    const nearDriversDistance = nearDrivers.map(async (nearDriver) => {
      const distance = await gooMapLib.getDistance({
        'origin': gooMapLib.parseLatLngToString(nearDriver.coord),
        'destination': gooMapLib.parseLatLngToString(trip.origin),
      });
      return { ...nearDriver, distance };
    });

    // const createdTripId = await this.mongoDB.create(this.collection, trip);
    // return createdTripId;
    this;
    return { ...trip, nearDrivers };
  }

  async createTrip({ origin, destination }) {
    const coordOrigin = await gooMapLib.parseLatLngLocation(origin);
    const coordDestination = await gooMapLib.parseLatLngLocation(destination);

    const trip = {
      'origin': coordOrigin,
      // 'destination': parseLatLngLocation(destination),
      'status': 'requested',
    };
    this;
    return trip;
  }

  // async getTrip({ tripId }) {
  //   const trip = await this.mongoDB.get(this.collection, tripId);
  //   return trip || {};
  // };

  // async getUserTrips({ userId }) {
  //   let query = {};

  //   if (userId) {
  //     query = {
  //       'user': userId,
  //       'status': 'end',
  //     };
  //   }

  //   const userTrips = await this.mongoDB.getAll(this.collection, query);

  //   return userTrips || [];
  // };

  // async updateTrip({ tripId, trip } = {}) {
  //   const updatedTripId = await this.mongoDB.update(this.collection, tripId, trip);
  //   return updatedTripId;
  // }
}

module.exports = TripsServices;
