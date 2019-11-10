const MongoLib = require('../lib/mongo');
const { driversMock } = require('../utils/MOCK_DRIVERS_v2');

class DriversServices {
  constructor() {
    this.collection = 'drivers';
    this.mongoDB = new MongoLib();
  }

  async getDriversMock() {
    this.mongo = false;
    const drivers = await Promise.resolve(driversMock);
    return drivers || [];
  };

  async getNearbyDriversMock({ lat, lng }, resolution = 0.01) {
    this.mongo = false;
    const drivers = await Promise.resolve(driversMock);
    return drivers.filter((driver) => {
      return (
        parseFloat(driver.coord.lat) > parseFloat(lat) - resolution &&
        parseFloat(driver.coord.lat) < parseFloat(lat) + resolution &&
        parseFloat(driver.coord.lng) > parseFloat(lng) - resolution &&
        parseFloat(driver.coord.lng) < parseFloat(lng) + resolution
      );
    });
  };

  async getDrivers() {
    const drivers = await this.mongoDB.getAll(this.collection);
    return drivers || [];
  };

  async getDriver({ driverId }) {
    const driver = await this.mongoDB.get(this.collection, driverId);
    return driver || {};
  };

  async getNearbyDrivers({ lat, lng }, range = 0.01) {
    const query = {
      'coord.lat': {
        $gte: parseFloat(lat) - range,
        $lte: parseFloat(lat) + range,
      },
      "coord.lng": {
        $gte: parseFloat(lng) - range,
        $lte: parseFloat(lng) + range,
      },
    };

    const drivers = await this.mongoDB.getAll(this.collection, query);

    return drivers || [];
  };

  async createDriver({ driver }) {
    const createdDriverId = await this.mongoDB.create(this.collection, driver);
    return createdDriverId;
  }

  async updateDriver({ driverId, driver } = {}) {
    const updatedDriverId = await this.mongoDB.update(this.collection, driverId, driver);
    return updatedDriverId;
  }

  async deleteDriver({ driverId }) {
    const deletedDriverId = await this.mongoDB.delete(this.collection, driverId);
    return deletedDriverId;
  };
}

module.exports = DriversServices;
