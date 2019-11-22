const express = require('express');
const helmet = require('helmet');
const { config } = require('./config/index');
const driversApi = require('./routes/drivers');
const tripsApi = require('./routes/trips');
const authApi = require('./routes/auth');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

// body parser
app.use(express.json());
app.use(helmet());

// routes
authApi(app);
tripsApi(app);
driversApi(app);

// Catch 404
app.use(notFoundHandler);

// errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`);
});
