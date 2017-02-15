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
                var now_utc = new Date(now.getUTCFullYear(),
                    now.getUTCMonth(), now.getUTCDate(),
                    now.getUTCHours(), now.getUTCMinutes(),
                    now.getUTCSeconds());
                var libEntry;
                var dayOfWeek = now_utc.getDay();
                if (dayOfWeek == 0 || dayOfWeek == 6) {
                    libEntry = media.weekend;
                } else if (dayOfWeek == 3) {
                    libEntry = media.wednesday;
                } else if (dayOfWeek == 4) {
                    libEntry = media.thursday;
                } else if (dayOfWeek == 5) {
                    libEntry = media.friday;
                } else {
                    libEntry = media.weekday;
                }
				// compute seconds past midnight
                var spmUTC = now_utc.getSeconds() + 60 *
                    now_utc.getMinutes() + 60 * 60 * now_utc.getHours();
                if (media.warntime != null) {
                    var warningEntry = media.warning;
					if (spmUTC < media.warntime ||
						media.warntime + warningEntry.grandTotalSeconds < spmUTC) {
                        media.warntime = null;
                    } else {
                        spmUTC -= media.warntime;
                        libEntry = warningEntry;
                    }
                }
				if (media.girlstime != null) {
					var girlsEntry = media.girls;
					if (spmUTC < media.girlstime ||
						media.girlstime + girlsEntry.grandTotalSeconds < spmUTC) {
						media.girlstime = null;
					} else {
						spmUTC -= media.girlstime;
						libEntry = girlsEntry;
					}
				}
                var x = media.getMediaAt(libEntry,spmUTC);
                var mediaItem = x[0];
                var secondsInto = x[1];
                var data = {};
                if (mediaItem.type == "youtube") {
                    data.mediaIsVideo = 1;
                    data.mediaIsMusic = 0;
                    data.mid = mediaItem.mid;
                    data.time = secondsInto;
                } else if (mediaItem.type == "soundcloud") {
                    data.mediaIsVideo = 0;
                    data.mediaIsMusic = 1;
                    data.mid = mediaItem.mid;
                    data.time = secondsInto;
                }
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

