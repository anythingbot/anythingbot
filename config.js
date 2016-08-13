(function () {
    'use strict';
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
            token: "9ec501a3d0ddc4f47298bc8b2bf349c72d1fc565",
            webhookSecret: 'abcd1234'
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
}());
