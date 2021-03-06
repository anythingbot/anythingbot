(function() {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'crypto',
    '../events',
    '../eventlog',
    '../../config'
  ];
  define(deps, function (crypto, events, eventlog, config) {
    function signGitHubWebhookBlob(key, blob) {
      return 'sha1=' + crypto.createHmac('sha1',
    					key).update(blob).digest('hex');
    }
    // When a PR Closed event is received, check if it was also merged.
    events.on('github.pull_request.closed', function (event) {
      eventlog.log('webhook.github.pull_request.closed');
      if (event.pull_request.merged_at !== null) {
        // If it is merged, emit another event.
        events.emit('github.pull_request.merged', event);
      }
    });
    function RouteWebhook(app) {
      app.post('/webhook/github', function (req, res) {
    	eventlog.log("webhook.RouteWebhook: req keys = " +
    					Object.keys(req));
        eventlog.log('webhook.RouteWebhook');
        var hash =  signGitHubWebhookBlob(
          config.githubAuth.webhookSecret, JSON.stringify(req.body));
		var verify_webhooks = config.githubAuth.verify_webhooks;
        if (verify_webhooks && req.headers['x-hub-signature'] !== hash) {
          res.status(500);
          res.send('Failed. Invalid GitHub Webhook Signature');
          return console.error('Received invalid GitHub Webhook Signature');
        }
    	eventlog.log("webhook.RouteWebhook: signature verified");
        // Let GitHub know that everything came through.
        res.send('ok');
        var eventType = ['github'];
        if (typeof req.body.pull_request !== 'undefined') {
          eventType.push('pull_request');
        } else if (typeof req.body.comment !== 'undefined') {
          eventType.push('comment');
        } else if (req.body.ref === 'refs/heads/master' &&
          typeof req.body.commits !== 'undefined') {
          eventType.push('merge');
        } else {
          // If we don't know the context of this event, don't emit it.
          return;
        }
        if (typeof req.body.action !== 'undefined') {
          eventType.push(req.body.action);
        }
        events.emit(eventType.join('.'), req.body);
      });
    };
    module.exports = RouteWebhook;
  });
}());
