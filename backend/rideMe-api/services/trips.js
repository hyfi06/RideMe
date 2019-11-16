const MongoLib = require('../lib/mongo');

class TripsServices {
  constructor() {
    this.collection = 'trips';
    this.mongoDB = new MongoLib();
  }

  async createDriver({ driver }) {
    const createdDriverId = await this.mongoDB.create(this.collection, driver);
    return createdDriverId;
  }


  async getDrivers({ lat, lng, range = 0.01 }) {
    let query = {};

    if (!!lat && !!lng) {
      query = {
        'coord.lat': {
          $gte: parseFloat(lat) - range,
          $lte: parseFloat(lat) + range,
        },
        'coord.lng': {
          $gte: parseFloat(lng) - range,
          $lte: parseFloat(lng) + range,
        },
      };
    }

    const drivers = await this.mongoDB.getAll(this.collection, query);

    return drivers || [];
  };

  async getDriver({ driverId }) {
    const driver = await this.mongoDB.get(this.collection, driverId);
    return driver || {};
  };


  async updateDriver({ driverId, driver } = {}) {
    const updatedDriverId = await this.mongoDB.update(this.collection, driverId, driver);
    return updatedDriverId;
  }

}

module.exports = DriversServices;
