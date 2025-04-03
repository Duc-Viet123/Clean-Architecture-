const express = require('express');
const config = require('./src/config');
const setupServer = require('./src/infrastructure/server');
const setupRoutes = require('./src/infrastructure/routes');

const app = express();
app.use(express.json());

// Setup server and routes
setupServer(app);
setupRoutes(app);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});