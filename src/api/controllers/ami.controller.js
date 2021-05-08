
const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { amiService } = require('../services/ami.service');


const createAMI = catchAsync(async (req,res) => {
  const { region,apiVersion,InstanceId,Name,Description } = req.body;
  const ami = await amiService.createAMI(region,apiVersion,InstanceId,Name,Description)
  res.status(httpStatus.CREATED).send({ ami });
})

module.exports = {
  createAMI,
};