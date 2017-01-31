(function() {
  var define = require('amdefine')(module);
  var deps = [
    'lodash',
    'sentiment',
    '../config',
    './events',
    './eventlog',
    './github',
    './votetemplates',
    './votecontroller',
  ];
  define(deps, function(_, sentiment, config, events, eventlog, gh,
						  votetemplates, VoteController) {
    var MINUTE = 60 * 1000; // One minute in ms.

    function noop(err) {
      if (err) {
        console.error(err);
        console.error(err.stack);
      }
    }

    var valid = function valid(data) {
      // Don't process events for other repositories.
      return (data.repository.name === config.repo &&
        data.repository.owner.login === config.user);
    };

    var makeComment = function makeComment(number, body, f) {
      gh.issues.createComment({
        user : config.user,
        repo : config.repo,
        number : number,
        body : body
        },f);
    };

    // refreshAllComments - Fetch all comments for a PR from GitHub.
    // getVoteStartedComment - Check for a "vote started" comment
	//     posted by the bot.
    //     @return (object|null)
    //       Return the comment if found, and null otherwise.
    // refreshAllPRs - Fetch all PRs from GitHub,
	//     and then look up all of their comments.
	// initializeEvents - init event handling
    // mergePR - Merge a pull request into master
    //     if it can't be merged, post warning and close it.
    // closePR - Close the pull request and post message if provided
    // processPR - Tally all of the votes for a PR, and if conditions
	//     pass, merge or close it.
    // updateStarGazers - Update the StarGazer cache.
    // eventsPullRequestOpened - When a pull request is opened,
	//     add it to the cache and handle it.
    // eventsPullRequestClosed - When a pull request is closed,
	//     mark it so we don't process it again.
    // eventsCommentCreated - When a comment is created,
	//     push it onto the PR, and handle the PR again.
    // assertNotModified - If the PR has not been modified,
	//     call the cb, otherwise display an error.

	var g_pullRequests = {};
	var g_starGazers = {};
	var g_startedPRs = {};
	var g_votesPerPR = {};
	var g_repo;
	var g_votingConfig;
	var g_voteController;
	var g_votetemplates;
	var initialize;
	var initializeEvents;
    var refreshAllPRs;
	var refreshAllComments;
	var getVoteStartedComment;
	var postVoteStarted;
	var handlePR;
	var mergePR;
	var closePR;
	var processPR;
	var updateStarGazers;
	var eventsPullRequestOpened;
	var eventsPullRequestClosed;
	var eventsCommentCreated;
	var assertNotModified;

    initialize = function initialize() {
      eventlog.log("Voting.initialize");
      // Immediately update the stargazers, and fetch and process all PRs.
      updateStarGazers(refreshAllPRs);
      // If we're not set up for GitHub Webhooks,
	  // poll the server every interval.
      if (typeof config.githubAuth === 'undefined') {
		eventlog.log("Voting.initialize: webhooks are not defined");
		setInterval(refreshAllPRs, g_votingConfig.pollInterval * MINUTE);
      } else {
        // Repoll all PRs every 30 minutes, just to be safe.
		eventlog.log("Voting.initialize: webhooks active");
		setInterval(refreshAllPRs, 30 * MINUTE);
      }
      // Check the stargazers every interval.
	  setInterval(updateStarGazers, g_votingConfig.pollInterval * MINUTE);
    };

    initializeEvents = function initializeEvents() {
      events.on('github.pull_request.opened', eventsPullRequestOpened);
      events.on('github.pull_request.closed', eventsPullRequestClosed);
      events.on('github.comment.created', eventsCommentCreated);
    };

    eventsPullRequestOpened = function eventsPullRequestOpened(data) {
      eventlog.log("Voting.eventsPullRequestOpened");
      if (! valid(data)) {
	    eventlog.log("Voting.eventsPullRequestOpened: invalid data");
        return;
      }
      data.pull_request.comments = [];
      g_pullRequests[data.number] = data.pull_request;
      handlePR(data.pull_request);
    };

    eventsPullRequestClosed = function eventsPullRequestClosed(data) {
      eventlog.log("Voting.eventsPullRequestClosed");
      if (! valid(data)) {
	    eventlog.log("Voting.eventsPullRequestClosed: invalid data");
        return;
      }
      // Remove the PR from votesPerPR so it no longer shows up on website.
      delete g_votesPerPR[data.number];
      var pr = g_pullRequests[data.number];
      if (typeof pr !== 'undefined') {
        pr.state = 'closed';
      }
    };

    eventsCommentCreated = function eventsCommentCreated(data) {
      eventlog.log("Voting.eventsCommentCreated");
      if (! valid(data)) {
		eventlog.log("Voting.eventsCommentCreated: invalid data");
        return;
      }
      var pr = g_pullRequests[data.issue.number];
      if (typeof pr === 'undefined') {
        return console.error('Could not find pull request', data.issue.number,
          'when adding a comment');
      }
      pr.comments.push(data.comment);
      handlePR(pr);
    };

    updateStarGazers = function updateStarGazers(cb) {
	  eventlog.log("Voting.updateStarGazers");
      gh.getAllPages(g_repo, gh.repos.getStargazers, function (err, stargazers) {
        if (err || !stargazers) {
          console.error('Error getting stargazers:', err);
          if (typeof cb === 'function') {
            return cb(err, stargazers);
          }
          return;
        }
        var index = {};
		g_starGazers = {};
        // Add in the updated list of stargazers.
        stargazers.forEach(function (stargazer) {
          g_starGazers[stargazer.login] = true;
        });
        if (typeof cb === 'function') {
          cb(stargazers);
        }
      });
    };

    refreshAllPRs = function refreshAllPRs() {
      eventlog.log("Voting.refreshAllPRs");
      gh.getAllPages(g_repo, gh.pullRequests.getAll, function (err, prs) {
        if (err || !prs) {
          return console.error('Error getting Pull Requests.', err);
        }
        prs.map(function (pr) {
          pr.comments = [];
          g_pullRequests[pr.number] = pr;
          refreshAllComments(pr, handlePR);
        });
      });
    };

    refreshAllComments = function refreshAllComments(pr, cb) {
      eventlog.log('Voting.refreshAllComments');
      var prRequest = _.merge({}, g_repo, { number: pr.number });
      gh.getAllPages(prRequest, gh.issues.getComments, function (err, comments) {
        if (err || !comments) {
          return console.error('Error getting Comments.', err);
        }
        pr.comments = comments;
        if (typeof cb === 'function') {
          cb(pr);
        }
      });
    };

    handlePR = function handlePR(pr) {
      eventlog.log('Voting.handlePR');
      // Don't act on closed PRs
      if (pr.state === 'closed') {
        return console.log('Update triggered on closed PR #' + pr.number);
      }
      // if there is no 'vote started' comment, post one
      if (!g_startedPRs[pr.number]) {
        postVoteStarted(pr);
      }
	  // if pull request was modified, close it
      assertNotModified(pr, function () {
        processPR(pr);
      });
    };

    postVoteStarted = function postVoteStarted(pr) {
      eventlog.log("Voting.postVoteStarted");
      getVoteStartedComment(pr, function (err, comment) {
        if (err) {
		  return console.error('error in postVoteStarted:', err);
		}
        if (comment) {
          // we already posted the comment
          g_startedPRs[pr.number] = true;
          return;
        }
        makeComment(pr.number, g_votetemplates.voteStartedComment +
						" " + pr.head.sha, function (err) {
		  if (err) {
		    return console.error('error in postVoteStarted:', err);
		  }
          events.emit('bot.pull_request.vote_started', pr);
          g_startedPRs[pr.number] = true;
          eventlog.log('Voting.postVoteStarted: ' + 
		    'posted a "vote started" comment for PR #' + pr.number);
          // add a sentiment vote
          var score = sentiment(pr.title + ' ' + pr.body).score;
          if (score > 1) {
            makeComment(pr.number, g_voteController.votePositive);
          } else if (score < -1) {
            makeComment(pr.number, g_voteController.voteNegative);
          }
        });
      });
    };

    getVoteStartedComment = function getVoteStartedComment(pr, cb) {
	  eventlog.log("Voting.getVoteStartedComment");
      for (var i = 0; i < pr.comments.length; i++) {
        var postedByMe = pr.comments[i].user.login === 'anythingbot';
        var isVoteStarted =
          pr.comments[i].body.indexOf(g_votetemplates.voteStartedComment) === 0;
        if (postedByMe && isVoteStarted) {
		  eventlog.log("Voting.getVoteStartedComment: comment found");
          return cb(null, pr.comments[i]);
        }
      }
	  eventlog.log("Voting.getVoteStartedComment: comment not found");
      return cb(null, null);
    };

    assertNotModified = function assertNotModified(pr, cb) {
      eventlog.log("Voting.assertNotModified");
      getVoteStartedComment(pr, function (err, comment) {
        if (err) {
		  return console.error('error in assertNotModified:', err);
		}
        if (comment) {
          var originalHead = comment.body.substr(comment.body.lastIndexOf(' ') + 1);
          if (pr.head.sha !== originalHead) {
            eventlog.log('Voting.assertNotModified: ' +
				'posting a "modified PR" warning, and closing #' + pr.number);
            return closePR(modifiedWarning, pr, noop);
          }
        }
        cb();
      });
    };

    processPR = function processPR(pr, cb) {
      eventlog.log("Voting.processPR");
      if (typeof cb === 'undefined') { cb = noop; }
      var voteResults = g_voteController.tallyVotes(pr);
      // only make a decision if the minimum period has elapsed.
      var age = Date.now() - new Date(pr.created_at).getTime();
      if (age / MINUTE < g_votingConfig.truePeriod) {
	    return cb(null, false);
	  }
      var highestVote = Math.max(voteResults.positive,
					  voteResults.negative);
      // only make a decision if we have the minimum amount of votes
      if (highestVote < g_votingConfig.guaranteedResult) {
		return cb(null, false);
	  }
      // vote passes if yeas > nays
      var passes = g_voteController.doesVotePass(voteResults.positive,
        voteResults.negative);
      var endComment = g_votetemplates.voteEndComment(passes,
		voteResults.positive, voteResults.negative,
		voteResults.nonStarGazers)
      makeComment(pr.number, endComment);
      // Post in IRC
      if (passes) {
        mergePR(pr, cb);
      } else {
        closePR(pr, cb);
      }
    };

    closePR = function closePR(message, pr, cb) {
	  eventlog.log("Voting.closePR");
      // message is optional
      if (typeof pr === 'function') {
        cb = pr;
        pr = message;
        message = '';
      }
      // flag the pull request as closed to prevent multiple comments
      g_pullRequests[pr.number].state = 'closed';
      if (message) {
        makeComment(pr.number, message);
      }
      gh.pullRequests.update({
        user: config.user,
        repo: config.repo,
        number: pr.number,
        state: 'closed',
        title: pr.title,
        body: pr.body
      }, function (err, res) {
        if (err) { return cb(err); }
        console.log('Closed PR #' + pr.number);
        return cb(null, res);
      });
    };

    mergePR = function mergePR(pr, cb) {
	  eventlog.log("Voting.mergePR");
      gh.pullRequests.get({
        user: config.user,
        repo: config.repo,
        number: pr.number
      }, function (err, res) {
        if (err || !res) { return cb(err); }
        if (res.mergeable === false) {
          eventlog.log('Attempted to merge PR #' + res.number +
          ' but it failed with a mergeable (' + res.mergeable +
          ') state of ' + res.mergeable_state);
          return closePR(g_votetemplates.couldntMergeWarning, pr, function () {
            cb(new Error('Could not merge PR.'));
          });
        } else if (res.mergeable === null) {
          console.error('Attempted to merge PR #' + res.number +
          ' but it was postponed with a mergeable (' +
          res.mergeable + ') state of ' + res.mergeable_state);
          // If it failed with a "null" mergeable state,
		  // try it again in 5 seconds.
          return setTimeout(function () {
            mergePR(pr, cb);
          }, 5000);
        }
        // Flag the PR as closed to prevent multiple comments.
        g_pullRequests[pr.number].state = 'closed';
        gh.pullRequests.merge({
          user: config.user,
          repo: config.repo,
          number: pr.number
        }, cb);
      });
    };

    var thevoting = function thevoting(repo) {
      eventlog.log("thevoting");
      g_repo = repo;
      g_votingConfig = repo.votingConfig;
      g_votingConfig.truePeriod = g_votingConfig.period *
        (1 + (Math.random() - 0.5) * g_votingConfig.period_jitter);
      g_votingConfig.guaranteedResult =
      	Math.ceil(g_votingConfig.minVotes * g_votingConfig.supermajority);
	  g_voteController = VoteController(repo, g_votingConfig,
		g_starGazers, g_votesPerPR);
      g_votetemplates = votetemplates(g_votingConfig);
      // Only initialize the regular polling
	  // if the bot is not being tested.
      if (process.env.BUILD_ENVIRONMENT !== 'test') {
        initialize();
      }
      initializeEvents();
	  // Returns an element of voting.instances
	  return {
		votesPerPR: {}
	  };
    };
    module.exports = thevoting;
  });
}());
