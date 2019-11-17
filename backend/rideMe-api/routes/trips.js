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
      const tripId = await tripsService.createTrip(tripRequest);

      res.status(200).json({
        data: tripId,
        message: 'trip create',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:tripId', async (req, res, next) => {
    const { tripId } = req.params;

    try {
      const trip = await tripsService.getTrip({ tripId });

      res.status(200).json({
        data: trip,
        message: 'trip retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:tripId', async (req, res, next) => {
    const { tripId } = req.params;

    try {
      const deletedTripId = await tripsService.deleteTrip({ tripId });

      res.status(200).json({
        data: deletedTripId,
        message: 'driver deleted',
      });
    } catch (error) {
      next(error);
    }
  });
};

module.exports = tripsApi;
