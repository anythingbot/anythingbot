(function () {
  'use strict';
  var define = require('amdefine')(module);
  var deps = [
    'lodash',
	'../config',
    './events',
	'./eventlog',
    './github',
    './templates',
	'./voting'
  ];
  define(deps, function (_, config, events, eventlog, gh, templates,
						  voting) {
    function percent(n) {
      return Math.floor(n * 1000) / 10;
    }

    function noop(err) {
      if (err) {
        console.error(err);
        console.error(err.stack);
      }
    }

	// tallyVotes - Tally up the votes on a PR,
	//     and monitor which users are stargazers.
	// calculateUserVote - Check the text of a comment, 
	//     and determine what vote was cast.
    // isPositive - Returns true if the text contains a positive vote
    // isNegative - Returns true if the text contains a negative vote
    // isMonkey - Returns true if the text is a monkey vote.
    //     g_voteMonkey is an array of monkey vote keys.
    //     If any of those keys appears in the text, the
    //     vote is a monkey.
	var tallyVotes;
	var calculateUserVote;
	var doesVotePass;
	var isPositive;
	var isNegative;
	var isMonkey;

	var g_repo;
	var g_votingConfig;
	var g_starGazers;
	var g_votesPerPR;
	var g_templates;
    var g_votePositive = ':+1:';
    var g_voteNegative = ':-1:';
    var g_voteMonkey = [':monkey:', ':monkey_face:', ':hear_no_evil:',
	    ':see_no_evil:',':speak_no_evil:'];
	var g_multivoters = ['anythingbot','dbpokorny','spenserj','mappum'];

    var VoteController = function VoteController(repo, votingConfig,
	    starGazers, votesPerPR) {
	  eventlog.log("VoteController");
      g_repo = repo;
      g_votingConfig = votingConfig;
      g_starGazers = starGazers;
      g_votesPerPR = votesPerPR;
      g_templates = templates(votingConfig);
	  return {
		tallyVotes: tallyVotes,
		calculateUserVote: calculateUserVote,
		doesVotePass: doesVotePass,
	  };
    };

    tallyVotes = function tallyVotes(pr) {
	  eventlog.log("VoteController.tallyVotes");
      var tally = pr.comments.reduce(function (result, comment) {
        var voter = comment.user.login,
          body = comment.body,
          voteCast = calculateUserVote(body);
        // People that don't star the repo cannot vote.
        if (! g_starGazers[voter]) {
		  eventlog.log("VoteController.tallyVotes: " + voter +
			" tried to vote but is not a star gazer");
          if (result.nonStarGazers.indexOf(voter) === -1) {
            result.nonStarGazers.push(voter);
          }
          if (voteCast !== self.voteMonkey && voteCast !== null) {
            // The comment has not yet been marked as a monkey,
		    // but should be. The voter is not a stargazer, but has
		    // made a vote-style comment. Edit the comment with a
		    // monkey warning appended to the end.
            gh.issues.editComment({
              user: config.user,
              repo: config.repo,
              id: comment.id,
              body: self.templates.nonStarGazerComment(
							  voteCast, body, voter)
            }, noop);
          }
          return result;
        }
        // Only record votes that are explicitly
        // positive, or negative.
        // Monkeys and votes that go both ways
        // do not record a result.
        if (voteCast === self.votePositive) {
          result.votes[voter] = true;
		  if (result.multivotes[voter] == undefined) {
		    result.multivotes[voter] = 1;
		  } else {
			result.multivotes[voter] += 1;
		  }
        }
        if (voteCast === self.voteNegative) {
          result.votes[voter] = false;
        }
        return result;
      }, {
        votes: {},
		multivotes: {},
        nonStarGazers: [],
      });
      // Add the PR author as a positive vote by default.
      if (! (pr.user.login in tally.votes)) {
        tally.votes[pr.user.login] = true;
      }
      var tallySpread = Object.keys(tally.votes).reduce(
					  function (result, voter) {
        // Increment the positive/negative counters.
        if (tally.votes[voter]) {
		  if (self.multivoters.indexOf(voter) >= 0) {
		    result.positive += tally.multivotes[voter];
		    result.total += tally.multivotes[voter];
		  } else {
            result.positive++;
            result.total++;
	      }
        } else {
          result.negative++;
          result.total++;
        }
        return result;
      }, {
        positive: 0,
        negative: 0,
        total: 0
      });
      tallySpread.percentPositive = percent(tallySpread.positive /
					  tallySpread.total);
      tallySpread.percentNegative = percent(tallySpread.negative /
					  tallySpread.total);
      _.merge(tally, tallySpread);
      // Store vote data for the votes webserver endpoint.
      voting.instance.votesPerPR[pr.number] = { pr: pr, votes: tally };
      events.emit('bot.pull_request.votes', pr, tally);
      return tally;
    };

    calculateUserVote = function calculateUserVote(text) {
      var positive = isPositive(text),
        negative = isNegative(text),
        monkey = isMonkey(text);

      if (monkey) {
        return g_voteMonkey;
      }
      // If the voter has voted positive and negative,
	  // or hasn't voted, ignore it.
      if (positive && negative) {
        return null;
      }
      if (!positive && !negative) {
        return null;
      }
      // If positive is true, its positive.
	  // If its false, they voted negative.
      if (positive) {
        return g_votePositive;
      }
      return g_voteNegative;
    };

    isPositive = function isPositive (text) {
      return (text.indexOf(g_votePositive) !== -1);
    };

    isNegative = function isNegative (text) {
      return (text.indexOf(g_voteNegative) !== -1);
    };

    isMonkey = function isMonkey (text) {
      return g_voteMonkey.some(function (monkey) {
        return (text.indexOf(monkey) !== -1);
      });
    };

    doesVotePass = function doesVotePass(positive, negative) {
      return ((positive / (positive + negative)) >
					  g_votingConfig.supermajority);
    };

    module.exports = VoteController;
  });
}());
