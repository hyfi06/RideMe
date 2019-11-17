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
    this;
    return { origin, destination };
  }

  async createTrip({ userId, origin, destination }) {
    const coordOrigin = await gooMapLib.parseLatLngLocation(origin);
    const coordDestination = await gooMapLib.parseLatLngLocation(destination);

    const distancesTrip = await gooMapLib.getDistance({
      'origin': gooMapLib.latLngToString(coordOrigin),
      'destination': gooMapLib.latLngToString(coordDestination),
    });

    const distanceTrip = distancesTrip[0];
    delete distanceTrip.status;

    const tripData = {
      'userId': userId,
      'origin': coordOrigin,
      'destination': coordDestination,
      'distanceTrip': distanceTrip,
      'timeRequest': new Date(),
      'status': 'requested',
    };

    const nearDrivers = await driversService.getDrivers(tripData.origin);

    const coordNearDrivers = nearDrivers.map((driver) => {
      return gooMapLib.latLngToString(driver.coord);
    }).join('|');

    const distances = await gooMapLib.getDistance({
      'origin': coordNearDrivers,
      'destination': gooMapLib.latLngToString(tripData.origin),
    });

    const minIndex = distances.reduce((previousValue, currentValue, index, array) => {
      if (array[previousValue].duration.value > currentValue.duration.value) {
        return index;
      }
      return previousValue;
    }, 0);

    const driver = nearDrivers[minIndex];
    const driverArrive = distances[minIndex];
    delete driverArrive.status;

    driversService.updateDriver({
      'driverId': driver._id,
      'driver': { 'available': false },
    });

    const trip = {
      ...tripData,
      'driverId': driver._id,
      'driverCoord': driver.coord,
      'driverArrive': driverArrive,
    };

    const createdTripId = await this.mongoDB.create(this.collection, trip);
    return createdTripId;
  }

  async getTrip({ tripId }) {
    const trip = await this.mongoDB.get(this.collection, tripId);
    return trip || {};
  };

  async updateTrip({ tripId, trip }) {
    const updatedTripId = await this.mongoDB.update(this.collection, tripId, trip);
    return updatedTripId;
  }

  async deleteTrip({ tripId }) {
    const deletedTripId = await this.mongoDB.delete(this.collection, tripId);
    return deletedTripId;
  };
}

module.exports = TripsServices;
