(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'express',
        'http',
        'os',
        'ws',

        '../../config',
        '../../lib/sockets',
        '../../lib/actlog',
    ];

    define(deps, function (express, http, os, ws, config, sockets, actlog) {
        function ServiceVideo(app) {
            var app = express();
            app.enable('trust proxy');
            var port = 3003;
            sockets.lookup['video'] = port;
            var svcent = {};
            sockets[port] = svcent;
            svcent.wsmap = {};
            svcent.wsdata = {};
            svcent.counter = 1;

			var svclog = [];

            var server = http.createServer(express());
            server.listen(port);
            
            var WebSocketServer = ws.Server;
            var wss = new WebSocketServer({server: server});
            wss.on('connection', function (ws) {
                var myid = svcent.counter;
                svcent.wsmap[myid] = ws;
                svcent.wsdata[myid] = {};
                svcent.wsdata[myid].inittime = Date.now();
                console.log('started video for ws #' + myid);
                ws.on('close', function() {
                    console.log('stopping video for ws #' + myid);
                    delete svcent.wsmap[myid];
                    delete svcent.wsdata[myid];
                });
                ws.on('message', function(data, flags) {
                    console.log('receiving video message from client for ws #' + myid);
                    console.log('DEBUG: ' + data);
                    data = JSON.parse(data);
					actlog.log(data.content);
					var date = Date.now();
                    var d = {content: 'a video client said: ' + data.content + " at " + date};

                    ws.send(JSON.stringify(d), function () { });
                });
                svcent.counter += 1;
            });
        };

        module.exports = ServiceVideo;
    });
}());
