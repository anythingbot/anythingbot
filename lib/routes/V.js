(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
        '../theater',
    ];

    define(deps, function (os, config, sockets, theater) {
        function RouteV(app) {
            app.get('/V', function (req, res) {
                if (theater.mode == "theater") {
                    res.end();
                    return;
                }
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'V'
                }
                res.render('V', tmpldata);
            });
        };

        module.exports = RouteV;
    });
}());

