const express = require('express');
const passport = require('passport');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
const DriversService = require('../services/drivers');
const { nearDriverSchema, driverIdSchema } = require('../utils/schemas/driver');

// jwt strategy
require('../utils/auth/strategies/jwt');

function driversApi(app) {
  const router = express.Router();

  app.use('/api/drivers', router);

  const driversService = new DriversService();

  router.get('/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:drivers']),
    validationHandler(nearDriverSchema, 'query'),
    async (req, res, next) => {
      const { lat, lng, range } = req.query;
      try {
        const drivers = await driversService.getDrivers({ lat, lng, range });

        res.status(200).json({
          data: drivers,
          message: 'drivers listed',
        });
      } catch (error) {
        next(error);
      }
    });

  router.get('/:driverId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:drivers']),
    validationHandler(driverIdSchema, 'params'),
    async (req, res, next) => {
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

};

module.exports = driversApi;
