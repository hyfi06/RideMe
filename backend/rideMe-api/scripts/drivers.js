const DriversService = require('../services/drivers');
const { driversMock } = require('../utils/MOCK_DRIVERS_v2');

const driversService = new DriversService();

driversMock.forEach(async (driver) => {
  const createdDriverId = await driversService.createDriver({ driver });
  console.log(`Created Driver with ID: ${createdDriverId}`);
});
