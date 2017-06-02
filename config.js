(function () {
    'use strict';
	var fs = require('fs');
	var token = (fs.readFileSync('../config/token') + "").trim();
	var webhookSecret = (fs.readFileSync('../config/webhookSecret') + "").trim();
	var verify_webhooks;
	if ((fs.readFileSync('../config/verify_webhooks') + "").trim() == "yes") {
	  verify_webhooks = true;
	}
	var sync_latest = false;
	if ((fs.readFileSync('../config/sync_latest') + "").trim() == "yes") {
	  sync_latest = true;
	}
	var user = (fs.readFileSync('../config/user') + "").trim();
	var repo = (fs.readFileSync('../config/repo') + "").trim();
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
            webhookSecret: webhookSecret,
			verify_webhooks: verify_webhooks
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
         minVotes: 5,
         supermajority: 0.55,
         pollInterval: 1, // Minutes
       },
    };
	var safeconfig = {};
	Object.keys(module.exports).forEach(function (k) {
		if (k != 'githubAuth') { safeconfig[k] = module.exports[k]; }});
	console.log(safeconfig);
}());
