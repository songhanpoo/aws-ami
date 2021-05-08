const app = require('./app');
const config = require('./config/config');

app.listen(config.port,config.host, () => {
  console.log(`Listening to port ${config.host}:${config.port}`);
});