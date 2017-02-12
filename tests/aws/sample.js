var AWS = require('aws-sdk');
var uuid = require('node-uuid');

// Create an S3 client
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'h#ello_world.txt';

var m1 = function main1 () {
	s3.createBucket({Bucket: bucketName}, function() {
		var params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
		s3.putObject(params, function(err, data) {
			if (err) {
			  console.log(err);
			} else {
			  console.log("Successfully uploaded data to " + bucketName + "/" +
							  keyName);
			}
		});
	});
};
//m1();
// var params = {Bucket: 'anythingbot', Prefix: 'log/2017-02-04'};

var listObjectsFull = function () {
	var fullResults = [];
	var keyList = [];
	var listObjectsPartial = function (t) {
		var params = {Bucket: 'anythingbot',
				Prefix: 'log/2017-02-04',
				MaxKeys: 100};
		if (t) {
			params.ContinuationToken = t;
		}
		s3.listObjectsV2(params, function (err, data) {
			if (err) {
				console.log(err, err.stack);
			} else {
				fullResults.push(data);
				if (data.IsTruncated) {
					var i;
					for (i = 0; i < data.Contents.length; i += 1) {
						keyList.push(data.Contents[i].Key);
					}
					listObjectsPartial(data.NextContinuationToken);
				} else {
					var i;
					//for (i = 0; i < fullResults.length; i += 1) {
					//	console.log(fullResults[i]);
					//}
					for (i = 0; i < keyList.length; i += 1) {
						console.log(keyList[i]);
					}
				}
			};
		});
	};
	listObjectsPartial();
};
listObjectsFull();
