const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const app = express();
const routes = require('./api/routes');
const { errorConverter, errorHandler } = require('./api/middlewares/error');
const ApiError = require('./utils/ApiError');

app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
