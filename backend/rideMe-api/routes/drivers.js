const express = require('express');
const DriversService = require('../services/drivers');

function driversApi(app) {
  const router = express.Router();

  app.use('/api/drivers', router);

  const driversService = new DriversService();

  router.get('/', async (req, res, next) => {
    try {
      const drivers = await driversService.getDrivers();

      res.status(200).json({
        data: drivers,
        message: 'drivers listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/id/:driverId', async (req, res, next) => {
    const { driverId } = req.params;

    try {
      const driver = await driversService.getDriver({ driverId });

      res.status(200).json({
        data: driver,
        message: 'driver retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/near', async (req, res, next) => {
    const { lat, lng, range } = req.query;

    if (!lat || !lng) {
      res.status(400).json({
        message: 'lat and lng require',
      });
    } else {
      const drivers = await driversService.getNearbyDrivers({ lat, lng }, range);
      res.status(200).json({
        data: drivers,
        message: 'nearbly drivers listed',
      });
    }
  });
  
  router.get('/nearMock', async (req, res, next) => {
    const { lat, lng, range } = req.query;

    if (!lat || !lng) {
      res.status(400).json({
        message: 'lat and lng require',
      });
    } else {
      const drivers = await driversService.getNearbyDriversMock({ lat, lng }, range);
      res.status(200).json({
        data: drivers,
        message: 'nearbly drivers listed',
      });
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: driver } = req;

    try {
      const createdDriverId = await driversService.createDriver({ driver });

      res.status(200).json({
        data: createdDriverId,
        message: 'driver created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/id/:driverId', async (req, res, next) => {
    const { driverId } = req.params;

    try {
      const deletedDriverId = await driversService.deleteDriver({ driverId });

      res.status(200).json({
        data: deletedDriverId,
        message: 'driver deleted',
      });
    } catch (error) {
      next(error);
    }
  });

  router.patch('/id/:driverId', async (req, res, next) => {
    const { driverId } = req.params;
    const { body: driver } = req;

    try {
      const updatedDriverId = await driversService.updateDriver({ driverId, driver });

      res.status(200).json({
        data: updatedDriverId,
        message: 'driver updated',
      });
    } catch (error) {
      next(error);
    }
  });

};

module.exports = driversApi;
