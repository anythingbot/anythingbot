(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteMonomap(app) {
            app.get('/monomap', function (req, res) {
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'monomap'
                }
                res.render('monomap', tmpldata);
            });
        };

        module.exports = RouteMonomap;
    });
}());

