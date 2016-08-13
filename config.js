(function () {
    'use strict';
	var fs = require('fs');
	var token = (fs.readFileSync('../token') + "").trim();
	var webhookSecret = (fs.readFileSync('../webhookSecret') + "").trim();
    module.exports = {
		sync_latest: true,
        webserver: {
            port: 3000
        },
        evil: false,
        user: "anythingbot",
        repo: "anythingbot",
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
	console.log(module.exports);
}());
