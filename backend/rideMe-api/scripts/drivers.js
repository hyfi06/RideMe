const DriversService = require('../services/drivers');
const { driversMock } = require('../utils/mocks/MOCK_DRIVERS');

const driversService = new DriversService();

driversMock.forEach(async (driver) => {
  const createdDriverId = await driversService.createDriver({ driver });
  console.log(`Created Driver with ID: ${createdDriverId}`);
});

console.log('End process');
process.exit(0);
