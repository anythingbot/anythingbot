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
                    libEntry = media.weekendPlaylist;
                } else if (dayOfWeek == 3) {
                    libEntry = media.wednesdayPlaylist;
                } else if (dayOfWeek == 4) {
                    libEntry = media.thursdayPlaylist;
                } else if (dayOfWeek == 5) {
                    libEntry = media.fridayPlaylist;
                } else {
                    libEntry = media.weekdayPlaylist;
                }
				// compute seconds past midnight
                var spmUTC = now_utc.getSeconds() + 60 *
                    now_utc.getMinutes() + 60 * 60 * now_utc.getHours();
				if (media.special[0] != null) {
					var specialEntry = media.special[1];
					if (spmUTC < media.special[0] || media.special[0] + specialEntry.grandTotalSeconds < spmUTC) {
						media.special = [null,null];
					} else {
						spmUTC -= media.special[0];
						libEntry = specialEntry;
					}
				}

                var x = media.getMediaAt(libEntry,spmUTC);
                var mediaItem = x[0];
				var itemTotalSeconds = mediaItem.totalSeconds;
                var secondsInto = x[1];
				var secondsRemaining = itemTotalSeconds - secondsInto;
                var data = {};
                if (mediaItem.type == "youtube") {
                    data.mediaIsVideo = 1;
                    data.mediaIsMusic = 0;
                    data.mid = mediaItem.mid;
                    data.time = secondsInto;
					data.secondsRemaining = secondsRemaining;
                } else if (mediaItem.type == "soundcloud") {
                    data.mediaIsVideo = 0;
                    data.mediaIsMusic = 1;
                    data.mid = mediaItem.mid;
                    data.time = secondsInto;
					data.secondsRemaining = secondsRemaining;
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

