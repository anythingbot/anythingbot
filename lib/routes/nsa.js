(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteNSA(app) {
            app.get('/nsa', function (req, res) {
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'nsa'
                }
                res.render('nsa', tmpldata);
            });
        };

        module.exports = RouteNSA;
    });
}());

