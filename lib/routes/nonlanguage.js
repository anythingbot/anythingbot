(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteNonlanguage(app) {
            app.get('/nonlanguage', function (req, res) {
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'nonlanguage'
                }
                res.render('nonlanguage', tmpldata);
            });
        };

        module.exports = RouteNonlanguage;
    });
}());

