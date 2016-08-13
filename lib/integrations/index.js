(function() {
    'use strict';
    var define = require('amdefine')(module);
    var deps = [
        'fs',
        'path',
        '../logger'
    ];
    define(deps, function(fs, path, Logger) {
        module.exports = function (f,err) {
            Logger.log('Initializing integrations.');
            var self = this;
            fs.readdir(__dirname, function (err, files) {
				var i;
				for (i = 0; i < files.length; i += 1) {
					var file = files[i];
                    if (file.match(/^.+\.js$/g) && file !== 'index.js') {
                        var filePath = path.join(__dirname, file);
                        Logger.info('Loading ' + filePath);
                        require(filePath)();
                    }
				}
				f();
			});
        }
    })
}());
