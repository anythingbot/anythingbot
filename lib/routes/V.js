(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteV(app) {
            app.get('/V', function (req, res) {
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

