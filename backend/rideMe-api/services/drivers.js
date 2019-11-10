// const MongoLib = require('../lib/mongo');
const { driversMock } = require('../utils/MOCK_DRIVERS');

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

  async getDriversNearby({ lat, lng }, resolution = 0.01) {
    this.mongo = false;
    const drivers = await Promise.resolve(driversMock);
    return drivers.filter((driver) => {
      return (
        parseFloat(driver.lat) > parseFloat(lat) - resolution &&
        parseFloat(driver.lat) < parseFloat(lat) + resolution &&
        parseFloat(driver.lng) > parseFloat(lng) - resolution &&
        parseFloat(driver.lng) < parseFloat(lng) + resolution
      );
    });
  };

  // async getDriversMongo({ lat, lng }) {
  //   const query = {
  //     lat: {
  //       $gte: parseFloat(lat) - resolution,
  //       $lte: parseFloat(lat) + resolution,
  //     },
  //     lng: {
  //       $gte: parseFloat(lng) - resolution,
  //       $lte: parseFloat(lng) + resolution,
  //     },
  //   };
  //   const drivers = await this.mongoDB.getAll(this.collection, query);
  //   return drivers || [];
  // };
}

module.exports = DriversServices;
