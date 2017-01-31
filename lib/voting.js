(function() {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    './thevoting',
	'./eventlog',
  ];
  define(deps, function(thevoting, eventlog) {
    var voting = {
      instance: null,
    };
    voting.setup = function (repo) {
	  eventlog.log("voting setup");
      voting.instance = thevoting(repo);
    };
    module.exports = voting;
  });
}());
