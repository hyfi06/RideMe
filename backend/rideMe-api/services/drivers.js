// const MongoLib = require('../lib/mongo');
const { driversMock } = require('../utils/MOCK_DRIVERS_v2');

class DriversServices {
  // constructor() {
  //   this.collection = 'drivers';
  //   this.mongoDB = new MongoLib();
  // }

  async getDrivers() {
    this.mongo = false;
    const drivers = await Promise.resolve(driversMock);
    return drivers || [];
  };

  async getNearbyDrivers({ lat, lng }, resolution = 0.01) {
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

  // async getDriversMongo({ lat, lng }) {
  //   const query = {
  //     coord.lat: {
  //       $gte: parseFloat(lat) - resolution,
  //       $lte: parseFloat(lat) + resolution,
  //     },
  //     coord.lng: {
  //       $gte: parseFloat(lng) - resolution,
  //       $lte: parseFloat(lng) + resolution,
  //     },
  //   };
  //   const drivers = await this.mongoDB.getAll(this.collection, query);
  //   return drivers || [];
  // };

  // async createDriver ({ Driver }) {
  //   const createdDriverId = await this.mongoDB
  // }
}

module.exports = DriversServices;
