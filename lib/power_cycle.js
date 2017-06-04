(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'child_process'
  ];
  define(deps, function (Spawn) {
    var spawn = Spawn.spawn;

    var restart = function restart() {
        var child = spawn('node', [__dirname + "/../launcher.js"], {
            detached: true,
            stdio: 'inherit'
        });
        child.unref();

        // TODO: ensure child is alive before terminating self
        process.exit(0);
    }

	var power_cycle = {
		restart : restart,
	};
	module.exports = power_cycle;

  });

}());
