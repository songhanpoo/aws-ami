const AWS = require('aws-sdk');
const httpStatus = require('http-status');


const createAMI = async (region,apiVersion,InstanceId,Name,Description) => {
  AWS.config.update({region:region});

  var params = {
    InstanceId: InstanceId, /* required */
    Name: Name, /* required */
    Description: Description,
    DryRun: true || false,
    NoReboot: true || false,
  };

  var ec2 = new AWS.EC2({apiVersion: apiVersion});
  const ami = await ec2.createImage(params);
  if (!ami) {
    throw new ApiError(httpStatus.FAILED_DEPENDENCY , 'Missing dependency');
  }
  return ami;
} 

module.exports={
  createAMI
}
