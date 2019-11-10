const express = require('express');
const { config } = require('./config/index');
const driversApi = require('./routes/drivers');

const app = express();

// body parser
app.use(express.json());

// routes
driversApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
