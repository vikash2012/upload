/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/


// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 


AWS.config.update({
	accessKeyId: process.env.Access_Key, 
	secretAccessKey: process.env.Secret_Key, 
	region: process.env.Region
});

var s3 = new AWS.S3();
//AWS.config.update({region: 'ap-south-1'});

// Create S3 service object
//s3 = new AWS.S3(); //argument can be passed here as {apiVersion: '2006-03-01'}

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'cypher-text',
  Delimiter: '/',
 Prefix: 'https://cipher-storage.s3.amazonaws.com/data/'

};

// Call S3 to obtain a list of the objects in the bucket
export default s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});




