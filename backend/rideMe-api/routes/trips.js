const express = require('express');
const TripsService = require('../services/trips');

function tripsApi(app) {
  const router = express.Router();

  app.use('/api/trips', router);

  const tripsService = new TripsService();

  router.get('/', async (req, res, next) => {
    const { lat, lng, address } = req.query;
    const query = {
      origin: {
        lat,
        lng,
        address,
      },
      destination: {
        lat,
        lng,
        address,
      },
    };
    try {
      const trip = await tripsService.test(query);

      res.status(200).json({
        data: trip,
        message: 'trip',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: tripRequest } = req;
    try {
      const trip = await tripsService.createTrip(tripRequest);

      res.status(200).json({
        data: trip,
        message: 'trip',
      });
    } catch (error) {
      next(error);
    }
  });

  // router.get('/:driverId', async (req, res, next) => {
  //   const { driverId } = req.params;

  //   try {
  //     const driver = await driversService.getDriver({ driverId });

  //     res.status(200).json({
  //       data: driver,
  //       message: 'driver retrieved',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.post('/', async (req, res, next) => {
  //   const { body: driver } = req;

  //   try {
  //     const createdDriverId = await driversService.createDriver({ driver });

  //     res.status(200).json({
  //       data: createdDriverId,
  //       message: 'driver created',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.delete('/:driverId', async (req, res, next) => {
  //   const { driverId } = req.params;

  //   try {
  //     const deletedDriverId = await driversService.deleteDriver({ driverId });

  //     res.status(200).json({
  //       data: deletedDriverId,
  //       message: 'driver deleted',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  // router.patch('/:driverId', async (req, res, next) => {
  //   const { driverId } = req.params;
  //   const { body: driver } = req;

  //   try {
  //     const updatedDriverId = await driversService.updateDriver({ driverId, driver });

  //     res.status(200).json({
  //       data: updatedDriverId,
  //       message: 'driver updated',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
};

module.exports = tripsApi;
