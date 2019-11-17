const express = require('express');
const { config } = require('./config/index');
const driversApi = require('./routes/drivers');
const tripsApi = require('./routes/trips');
const userApi = require('./routes/users');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// body parser
app.use(express.json());

// routes
driversApi(app);
tripsApi(app);

// Catch 404
app.use(notFoundHandler);

// errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
