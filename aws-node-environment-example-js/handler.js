'use strict';
const os = require('os')
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      os:JSON.stringify(os),
      // message: os.environment['FIRST_NAME'],
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
