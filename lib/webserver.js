(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'express',
    'fs',
    'os',
    'path',
    'util',
    '../config',
    './logger',
    './eventlog',
    './middleware',
    './routes',
    './services',
    './sockets',
    './generatename'
  ];
  define(deps, function (express, fs, os, path, util, config, logger,
        eventlog, middleware, routes, services, sockets, generateName) {
    module.exports = function (config) {
      eventlog.log("lib/webserver");
      var app = express();
      app.enable('trust proxy');
      // Pass config to every view
      app.use(function (req, res, next) {
        res.locals = {
          config: config,
          name : generateName()
        };
        next();
      });
      // init services before routes so services can set up the index
      // that maps service name to port number
      middleware(app).then(function () {
        services(app);
        return routes(app);
      }).then(function() {
        var port = config.webserver.port || 3000;
        logger.info('Starting webserver at port ' + port);
        app.listen(port);
      }, function(err) {
        logger.error(err);
        logger.error(err.stack);
      });
    };
  });
}());
