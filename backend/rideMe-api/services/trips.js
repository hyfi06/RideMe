const MongoLib = require('../lib/mongo');
const drivers = require('./drivers');

class TripsServices {
  constructor() {
    this.collection = 'trips';
    this.mongoDB = new MongoLib();
  }

  async createTrip({ origin, destination }) {
    let trip = {
      'origin': origin,
      'destination': destination,
      'status': 'requested',
    };
    const ;
    const nearDrivers = await drivers.getDrivers({});
    const createdTripId = await this.mongoDB.create(this.collection, trip);
    return createdTripId;
  }

  async getTrip({ tripId }) {
    const trip = await this.mongoDB.get(this.collection, tripId);
    return trip || {};
  };

  async getUserTrips({ userId }) {
    let query = {};

    if (userId) {
      query = {
        'user': userId,
        'status': 'end',
      };
    }

    const userTrips = await this.mongoDB.getAll(this.collection, query);

    return userTrips || [];
  };

  async updateTrip({ tripId, trip } = {}) {
    const updatedTripId = await this.mongoDB.update(this.collection, tripId, trip);
    return updatedTripId;
  }
}

module.exports = TripsServices;
