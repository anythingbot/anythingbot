(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'aws-sdk'
  ];
  define(deps, function (awsSDK) {
    var jobs;
    var s3 = new awsSDK.S3();
    var awsWork = function (jobID, c) {
      var job = jobs.jobList[jobID];
      if (job.status != 'active') {
        console.log('ERROR: jobs.js ID ' + jobID + ' is not active');
        return;
      }
      job.steps += 1;
      var params = {'Bucket':job.params.Bucket,
        'Prefix':job.params.Prefix,
        'MaxKeys':job.params.MaxKeys
      };
      if (job.token) {
        params.ContinuationToken = job.token;
      }
      s3.listObjectsV2(params, function (err, data) {
        if (err) {
          console.log(err, err.stack);
        } else {
          job.fullResults.push(data);
          var i;
          for (i = 0; i < data.Contents.length; i += 1) {
            job.jobVars.keyList.push(data.Contents[i].Key);
          }
          if (data.IsTruncated) {
            job.token = data.NextContinuationToken;
          } else {
            job.status = 'term';
            job.token = null;
            jobs.termJobs.push(job);
            // remove the job from jobs.activeJobs
            for (i = 0; i < jobs.activeJobs.length; i += 1) {
              if (jobs.activeJobs[i].id == job.id) {
                jobs.activeJobs.splice(i,1);
                break;
              }
            }
          }
          c();
        }
      });
    }
    // ls - list the objects in a bucket
    // returns: new job ID
    var awsLs = function (Bucket,Prefix) {
        var newJobID = jobs.jobList.length;
        var newJob = {'id' : newJobID,
            'code' : 'ls',
            'steps' : 0,
            'status' : 'active',
            'token' : null,
            'params' : {'Bucket' : Bucket, 'Prefix' : Prefix, 'MaxKeys' : 100},
            'jobVars' : {'keyList' : []},
            'fullResults' : []
        };
        jobs.jobList.push(newJob);
        jobs.activeJobs.push(newJob);
        return newJobID;
    };
    jobs = {
        jobList: [],
        activeJobs: [],
        termJobs: [],
        awsLs: awsLs,
        awsWork: awsWork
    };
    module.exports = jobs;
  });
}());
