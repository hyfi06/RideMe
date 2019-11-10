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

  router.get('/near', async (req, res, next) => {
    const { lat, lng } = req.query;
    if (!lat || !lng) {
      res.status(500).json({
        message: 'lat and lng require',
      });
    }
    const drivers = await driversService.getNearbyDrivers({ lat, lng }, 0.01);

    res.status(200).json({
      data: drivers,
      message: 'drivers nearbly listed',
    });
  });
};

module.exports = driversApi;
