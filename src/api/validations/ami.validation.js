const Joi = require('joi');

const createAmi = {
  body: Joi.object().keys({
    region: Joi.string().required(),
    apiVersion: Joi.string().pattern(/^([1-9]\\d*)\\.(\\d+)\\.(\\d+)(?:-[br]{1}[0-9]?\\d*)?$/).required(),
    InstanceId: Joi.string().required(),
    Name: Joi.string().required(),
    Description: Joi.string(),
  }),
};

module.exports = {
  createAmi,
};
