// node ./backend/rideMe-api/scripts/user.js
const UsersService = require('../services/users');
const usersMock = require('../utils/mocks/userMock');

const usersService = new UsersService();

const upUserMock = async () => {
  try {
    const promises =  usersMock.map(async (user) => {
      const userCreatedId = await usersService.createUser({ user });
      return (`Created Driver with ID: ${userCreatedId}`);
    });
    await Promise.all(promises).then((res) => console.log(res));
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

upUserMock();
