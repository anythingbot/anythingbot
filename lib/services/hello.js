(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
      'express',
      'http',
      'os',
      'ws',
  
      '../../config',
      '../sockets',
      '../media',
      '../jobs'
  ];
  define(deps, function (express, http, os, ws, config, sockets, media, jobs) {
    function ServiceHello(app) {
      var app = express();
      app.enable('trust proxy');
      var port = 3010;
      sockets.lookup['hello'] = port;
      var svcent = {};
      sockets[port] = svcent;
      svcent.wsmap = {};
      svcent.wsdata = {};
      svcent.counter = 1;
    
      var server = http.createServer(express());
      server.listen(port);
      
      var WebSocketServer = ws.Server;
      var wss = new WebSocketServer({server: server});
      wss.on('connection', function (ws) {
        var myid = svcent.counter;
        svcent.wsmap[myid] = ws;
        svcent.wsdata[myid] = {};
        svcent.wsdata[myid].inittime = Date.now();
        svcent.wsdata[myid].con = {};
        console.log('started hello for ws #' + myid);
        ws.on('close', function() {
            console.log('stopping hello for ws #' + myid);
            delete svcent.wsmap[myid];
            delete svcent.wsdata[myid];
        });
        ws.on('message', function(data, flags) {
          console.log('receiving hello from client for ws #' + myid);
          console.log('DEBUG: ' + data);
          data = JSON.parse(data);
          var d = {content: 'a client said: ' + data.content};
          if (data.content == "warning") {
              media.onWarning();
          }
          if (data.content == "yzma") {
              media.onYzma();
          }
          if (data.content == "borg") {
              media.onBorg();
          }
          if (data.content == "lose") {
              media.onLose();
          }
          if (data.content == "mars") {
              media.onMars();
          }
          if (data.content == "mkultra") {
              media.onMKULTRA();
          }
          if (data.content == "power") {
              media.onPower();
          }
          if (data.content == "comet") {
              media.onComet();
          }
          if (data.content == "cancel") {
              media.onCancel();
          }
          if (data.content.slice(0,3) == "con") {
              var keys = data.content.slice(3).split(" ");
              var keys2 = [];
              var j;
              var invert = false;
              for (j = 0; j < keys.length; j += 1) {
                  if (keys[j] == "'") {
                      invert = true;
                  } else if (keys[j].length > 0) {
                      keys2.push(keys[j]);
                  }
              }
              keys = keys2;
              // keys2 is dead
              if (keys.length > 0) {
                  var i;
                  for (i = 0; i < keys.length; i += 1) {
                      if (invert) {
                          delete svcent.wsdata[myid].con[keys[i]];
                      } else {
                          svcent.wsdata[myid].con[keys[i]] = true;
                      }
                  }
                  d.content = '' + keys.length + ' consciousnesses';
              } else {
                  d.content = JSON.stringify(svcent.wsdata[myid].con);
              }
          }
          if (data.content.slice(0,3) == "job") {
              var jobID = Number(data.content.slice(4));
              if (0 <= jobID && jobID < jobs.jobList.length) {
                  var job = jobs.jobList[jobID];
                  d.content = 'job ' + jobID + ' status = ' + job.status;
              } else {
                  d.content = 'ERROR: job ' + jobID + ' does not exist';
              }
          }
          if (data.content.slice(0,2) == "ls") {
            var args = data.content.slice(3).split(" ");
            if (args.length != 2) {
              d.content = 'ls: invalid arguments';
            } else {
              var jobID = jobs.awsLs(args[0],args[1]);
              d.content = 'started job ' + jobID;
            }
          }
          var reply = 1;
          if (data.content == "work") {
            if (jobs.activeJobs.length == 0) {
              d.content = 'ERROR: no jobs';
            } else {
              var job = jobs.activeJobs[0];
              var jobID = job.id;
              jobs.awsWork(jobID, function () {
                var d = {content: 'worked on job ' + jobID};
                ws.send(JSON.stringify(d), function () { });
              });
              reply = 0;
            }
          }
          if (data.content.slice(0,4) == "vars") {
            var jobID = Number(data.content.slice(5));
            if (0 <= jobID && jobID < jobs.jobList.length) {
              var job = jobs.jobList[jobID];
              d.content = 'job ' + jobID + ' vars = ' + JSON.stringify(job.jobVars);
            } else {
              d.content = 'ERROR: job ' + jobID + ' does not exist';
            }
          }
          if (reply) {
            if (data.broadcast) {
              Object.keys(svcent.wsmap).forEach(function (wsid) {
                if (svcent.wsmap[wsid] == null) {
                  return;
                }
                svcent.wsmap[wsid].send(
                  JSON.stringify(d), function () { });
              });
            } else {
              ws.send(JSON.stringify(d), function () { });
            }
          }
        });
        svcent.counter += 1;
      });
    };
    
    module.exports = ServiceHello;
  });
}());
