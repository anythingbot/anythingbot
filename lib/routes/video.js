(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../../lib/media',
    ];

    define(deps, function (os, config, media) {
        function RouteVideo(app) {
            /**
             * Display a message if the webhooks are operational.
             */
            app.get('/video', function (req, res) {
                //
                // Compute duration of playlist
                // Use UTC so bots are in sync globally
                //
                var now = new Date();
                var utc = new Date(now.getUTCFullYear(),
                    now.getUTCMonth(), now.getUTCDate(),
                    now.getUTCHours(), now.getUTCMinutes(),
                    now.getUTCSeconds());
                var data = media.getMediaForUTC(utc);
                var tmpldata = {
                    data: data,
                    layout: 'media',
                }
                res.render('video', tmpldata);
            });
        };

        module.exports = RouteVideo;
    });
}());

