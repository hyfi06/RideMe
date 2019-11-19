const express = require('express');
const passport = require('passport');
const TripsService = require('../services/trips');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
const validationHandler = require('../utils/middleware/validationHandler');
const { tripIdSchema, createTripSchema, updateTripSchema } = require('../utils/schemas/trips');

// JWT strategy
require('../utils/auth/strategies/jwt');

function tripsApi(app) {
  const router = express.Router();

  app.use('/api/trips', router);

  const tripsService = new TripsService();

  router.post('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:trips']),
    validationHandler(createTripSchema),
    async (req, res, next) => {
      const { body: tripRequest } = req;
      const { _id: userId } = req.user;

      try {
        const tripId = await tripsService.createTrip({ ...tripRequest, userId });

        res.status(200).json({
          data: tripId,
          message: 'trip create',
        });
      } catch (error) {
        next(error);
      }
    });

  router.get('/:tripId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:trips']),
    validationHandler(tripIdSchema, 'params'),
    async (req, res, next) => {
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

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:trips']),
    async (req, res, next) => {
      const { _id: userId } = req.user;

      try {
        const trip = await tripsService.getUserTrip({ userId });

        res.status(200).json({
          data: trip,
          message: 'trip user retrieved',
        });
      } catch (error) {
        next(error);
      }
    });

  router.patch('/:tripId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:trips']),
    validationHandler(tripIdSchema, 'params'),
    validationHandler(updateTripSchema),
    async (req, res, next) => {
      const { tripId } = req.params;
      const { body: trip } = req;

      try {
        const updatedTripId = await driversService.updateDriver({ tripId, trip });

        res.status(200).json({
          data: updatedTripId,
          message: 'trip updated',
        });
      } catch (error) {
        next(error);
      }
    });

  router.delete('/:tripId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:trips']),
    async (req, res, next) => {
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
