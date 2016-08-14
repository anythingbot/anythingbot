(function () {
    'use strict';
	var fs = require('fs');
	var token = (fs.readFileSync('../token') + "").trim();
	var webhookSecret = (fs.readFileSync('../webhookSecret') + "").trim();
	var sync_latest;
	if ((fs.readFileSync('../sync_latest') + "").trim() == "yes") {
	  sync_latest = true;
	} else {
	  sync_latest = false;
	}
	var user = (fs.readFileSync('../user') + "").trim();
	var repo = (fs.readFileSync('../repo') + "").trim();
    module.exports = {
		sync_latest: sync_latest,
        webserver: {
            port: 3000
        },
        evil: false,
        user: user,
        repo: repo,
        githubAuth: {
            type: "oauth",
            token: token,
            webhookSecret: webhookSecret
        },
        db: {
            sqlite: {
                name: "database",
            },
        },
        mocks: {
            twitter: true,
        },
        features: {
            twitter: true,
        },
        irc: {
            host: 'irc.freenode.net',
            user: 'anythingbotdotorg',
            channel: '#anythingbot',
            password: '',
        },
       voting: {
         period: 15,
         period_jitter: 0.2,
         minVotes: 7,
         supermajority: 0.65,
         pollInterval: 3, // Minutes
       },
    };
	var safeconfig = {};
	Object.keys(module.exports).forEach(function (k) {
		if (k != 'githubAuth') { safeconfig[k] = module.exports[k]; }});
	console.log(safeconfig);
}());
