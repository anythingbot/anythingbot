(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteMIT(app) {
            app.get('/mit', function (req, res) {
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'mit'
                }
                res.render('mit', tmpldata);
            });
        };

        module.exports = RouteMIT;
    });
}());

