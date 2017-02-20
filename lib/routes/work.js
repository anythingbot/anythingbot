(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config',
        '../sockets',
    ];

    define(deps, function (os, config, sockets) {
        function RouteWork(app) {
            app.get('/work', function (req, res) {
                var data = {};
                var tmpldata = {
                    data: data,
                    layout: 'work'
                }
                res.render('work', tmpldata);
            });
        };

        module.exports = RouteWork;
    });
}());

