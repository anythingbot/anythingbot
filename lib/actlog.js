(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'fs'
  ];
  define(deps, function (fs) {

	var buffer = [];
	var lastFlush = 0;

	var pad = function (n) {
	  if (n < 10) {
	    return '0' + n;
	  } else {
	    return '' + n;
	  }
	}

	var log = function (msg) {
	  console.log("making a log entry");
	  buffer.push(msg + "@" + Date.now());
	  if (lastFlush == 0) {
	    lastFlush = 15000 * Math.floor(Date.now() / 15000);
		return;
	  }
	  if (Date.now() - lastFlush > 15000) {
	    var fileDate = new Date(lastFlush);
	    var logDayString = ("" + fileDate.getFullYear() + "-" +
	  		  pad(fileDate.getMonth()+1) + "-" + pad(fileDate.getDate()));
	    var fileDir = "log/" + logDayString;
	    if (! fs.existsSync(fileDir)) {
	  	  fs.mkdirSync(fileDir);
	    }
		buffer.push("");
		var fileName = ("" + pad(fileDate.getHours()) + "-" +
				pad(fileDate.getMinutes()) + "-" + pad(fileDate.getSeconds()));
	    fs.writeFileSync(fileDir + "/" + fileName, buffer.join('\n'));
	    buffer = [];
	    lastFlush = 15000 * Math.floor(Date.now() / 15000);
	  }
	};

	var actlog = {
		log : log,
	};
	module.exports = actlog;

  });

}());
