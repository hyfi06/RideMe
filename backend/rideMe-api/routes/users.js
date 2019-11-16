const express = require('express');
const UserService = require('../services/users');

function userApi(app) {
  const router = express.Router();

  app.use('/api/users', router);

  const userService = new UserService();

  // router.get('/', async (req, res, next) => {
  //   const { lat, lng, range } = req.query;
  //   try {
  //     const drivers = await userService.getDrivers({ lat, lng, range });

  //     res.status(200).json({
  //       data: drivers,
  //       message: 'drivers listed',
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // });

  router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    try {
      const user = await userService.getUser({ userId });

      res.status(200).json({
        data: user,
        message: 'user retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: user } = req;

    try {
      const createdUserId = await userService.createUser({ user });

      res.status(200).json({
        data: createdUserId,
        message: 'user created',
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    try {
      const deletedUserId = await userService.deleteUser({ userId });

      res.status(200).json({
        data: deletedUserId,
        message: 'user deleted',
      });
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const { body: user } = req;

    try {
      const updatedUserId = await userService.updateUser({ userId, user });

      res.status(200).json({
        data: updatedUserId,
        message: 'user updated',
      });
    } catch (error) {
      next(error);
    }
  });

};

module.exports = userApi;
