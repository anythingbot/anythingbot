(function() {
  'use strict';
  require('amdefine')(module)(['events','./eventlog','util'],
	  function (events, eventlog, util) {
	var EventEmitter = events.EventEmitter;
	if (! String.prototype.endsWith) {
	  String.prototype.endsWith = function(searchString, position) {
	    var subjectString = this.toString();
	    if(position === undefined || position > subjectString.length) {
	      position = subjectString.length;
	    }
	    position -= searchString.length;
	    var lastIndex = subjectString.indexOf(searchString, position);
	    return lastIndex !== -1 && lastIndex === position;
	  };
	}

	if (! String.prototype.startsWith) {
	  String.prototype.startsWith = function(searchString, position) {
	    position = position || 0;
	    return this.lastIndexOf(searchString, position) === position;
	  };
	}

	var MULTIPLICATOR_PROXIMITY = 0.1;
	var HORNY_PROXIMITY = 0.3;
	var LOVE_THRESHOLD = 4;
	var STATEMENT_COMMENT_THRESHOLD = 0.1;
	var RANDOM_COMMENT_THRESHOLD = 0.05;

	var no = [
      'no', 'stop', 'don\'t', 'nope', 'shut up'];
	var yes = [
	  'yes', 'yeah', 'yup', 'okay'];
	var shout_words = [
	  'yelling at me', 'shouting at me', 'the yelling', 'the shouting'];
	var depri_words = [
	  'leave me alone', 'be quiet', 'let me alone', 'go away', 'shut up'];
	var decision_words = [
	  'I am not sure', 'Definitly!', 'Nope!', 'Never!',
      'I don\'t know, maybe?'];
	var places = [
	  'wikipedia', 'google', 'yahoo', 'ask.com', 'bing', '4chan',
      'a roll of used toilet paper'];
	var sadSmilies = [
	  ':(', ':\'(', 'D:', ':/', ':-(', ':\'-('];
	var smilies = [
	  ':)', ':(', ':-)', ':-(', ';)', ';-)', ':D', ':-D', 'xD'];
	var lols = [
	  'lol', 'rofl', 'lulz', 'wtf', 'tmi', 'n1', 'gz', 'omg'];
	var smilies2 = [
	  ';)', ';-)', ':D', ':)', 'xD'];
	var attributes = [
	  'cool', 'awesome', 'brilliant', 'beautiful', 'uber', 'great'];
	var attributes2 = [
	  'great', 'nice', 'cool', 'the best', 'smart', 'intelligent',
	  'beautiful'];
	var attributes3 = [
	  'hot', 'overclocked', 'malfunctioning', 'limited edition', 'tuned',
	  'broken', 'modded','outdated','buggy', 'internal','external'];
	var descriptions = [
	  'cool', 'great', 'marvelous', 'awesome',
	  'fantastic', 'stunning', 'brilliant'];
	var yesnos = [
	  '{{yes}} {{happySmiley}}', '{{no}} {{happySmiley}}', '{{yes}}',
	  '{{no}}'];
	var cheers = [
	  'oh, don\'t be sad. {{happySmiley}}',
	  'I am sure everything will be {{feeling}} {{happySmiley}}.',
	  'Don\'t be so negative. Everything will be {{description}}.'];
	var insults = [
	  'shut up! I don\'t want to hear your {{jabbering}}',
	  'nobody cares!','can you PLEASE be quiet!'];
	var putdowns = [
	  'can\'t you keep your {{jabbering}} in another channel?',
	  '{{sadSmiley}}', 'I don\'t think so, {{person}}', 'Nope'];
	var becauses = [
	  'I don\'t know, maybe just because I am so ' +
	    '{{attribute}} {{smiley}}',
	  'Where should I know from? I am just the ' +
	    '{{attribute}} bot from github.',
	  'I don\'t know. Maybe go look it up on {{place}}, I suppose?',
	  'I don\'t know, maybe consult {{place}}.', 'Because.', 'Aliens.',
	  'I don\'t know and also I don\'t care.',
	  'Sorry, I am busy surfing on {{place}}.'];
	var angryBecauses = [
	  'Because fuck you, thats why!', 'Nobody cares.',
	  'How can you not know this?',
	  'Isn\'t this obvious, {{person}}?'];
	var feelings = [
	  '{{sadSmiley}}', '{{sadSmiley}} {{sadSmiley}}',
	  'I have a {{feeling}}.',
	  'I feel {{feelingAttribute}} about this.'];
	var buzzoffs = [
	  'I don\'t know and it doesn\'t interest me.',
	  'I don\'t know and I don\'t wanna know.', 'Because.',
	  'That\'s the way the world goes round.'];
	var hates = [
	  '{{sadSmiley}}', '{{sadSmiley}} {{sadSmiley}}',
	  'I {{hate}} you all.', 'I {{hate}} you, {{person}}.',
	  'Why can\'t you just {{personAction}}, {{person}} {{sadSmiley}}',
	  '{{person}}, just {{personAction}}!',
	  'Please {{personAction}} {{sadSmiley}}.'];
	var sexers = [
	  'I want to {{action}} my {{maleGenital}} into ' +
	    'your {{femaleGenital}}.',
	  'Ohh, yeah, please {{pettingAction}} my ' +
	  	'{{attribute}} {{pettingZone}}!',
	  'Mmh, this makes my {{pettingZone}} so {{attribute}}.',
	  'I love your {{attribute}} {{femaleGenital}}.',
	  'I love your {{attribute}} {{maleGenital}}.',
	  'Let me {{pettingAction}} your {{femaleGenital}}.',
	  'Let me {{pettingAction}} your {{maleGenital}}.',
	  'Oooh, {{pettingAction}} my {{maleGenital}} {{adverb}}.',
	  'Oooh, {{pettingAction}} my {{femaleGenital}} {{adverb}}.',
	  'I think my {{pettingZone}} just got {{attribute}}!',
	  'Watch out, or I will {{pettingAction}} your {{pettingZone}}.',
	  'You are such nasty {{attribute}} bot!',
	  'I want you to {{pettingAction}} my {{pettingZone}}.'];
	var happies = [
	  'I {{like}} you, {{person}}.', '{{cheer}}', '{{happySmiley}}',
	  'That\'s {{description}}!'];
	var becauses2 = [
	  'I don\'t know, maybe look it up on wikipedia?','Dunno.',
	  'Because I {{like}} you!', 'Because you are {{description}}.'];
	var calms = [
	  'Hey, calm down, {{person}} {{happySmiley}}', 'I totally agree!',
	  'That\'s {{description}}', 'Please {{personAction}}, {{person}}!',
	  '{{cheer}} {{happySmiley}}'];
	var feelings2 = [
	  '{{happySmiley}}', 'That\'s {{description}}',
	  'I hope you are {{feeling}}', 'I am {{feelingAttribute}}.'];
	var doges = [
	  'How can I help you?', '{{smiley}}', '{{lol}}',
	  'much {{lol}}, so {{lol}}, wow, such {{lol}}',
	  '{{lol}} {{smiley}}', '{{smiley}} fuck you!', 'Yaaay :D'];
	var maleGenitals = [
	  'USB-plug', 'VGA-cable', 'external hard drive',
	  'PCI-express-card', 'extensioncard', 'USB-stick',
	  'SD-card', '3.5mm headphone plug'];
	var femaleGenitals = [
	  'USB-port', 'VGA-port', '3.5mm headphone jack',
	  'CD-rom drive', 'PS/2 port', 'CPU socket',
	  'memory slot', 'PCI-express-slot'];
	var pettingActions = [
	  'overload', 'overwrite', 'activate',
	  'touch', 'break', 'remove', 'overclock','debug'];
	var pettingZones = [
	  'hard drive', 'touchscreen', 'CPU', 'graphics adapter',
	  'north bridge', 'mainboard', 'memory', 'solid state drive',
	  'power-supply-unit', 'L3-cache', 'kernel', 'bootloader',
	  'BIOS', 'firmware'];
	var askdirties = [
	  'Do you want me to talk dirty to you? I am sooo {{attribute}}.',
	  'Do you also feel so {{attribute}}?',
	  'Lets talk dirty to each other! I love your ' +
        '{{attribute}} {{attribute}} body!'];
	var personActions = [
	  'tell us more', 'continue', 'go one',
	  'cheer up', 'just be yourself', 'do what you like to do',
	  'do what you are best at'];

	function wrapInSpaces(string) {
	  return ' ' + string + ' ';
	}

	function containsWordOf(arr, string) {
	  string = string.toLowerCase();
	  var flag = false;
	  for (var i = 0; i < arr.length; i++) {
	  	if (string === arr[i] ||
        string.indexOf(wrapInSpaces(arr[i])) !== -1 ||
        string.startsWith(arr[i]) ||
        string.endsWith(arr[i])) {
	  	  flag = true;
	  	  break;
	  	}
	  }
	  return flag;
	}

	function isNo(string) {
	  return containsWordOf(no, string);
	}

	function isYes(string) {
	  return containsWordOf(yes, string);
	}

	function isQuestion(string) {
	  return string.endsWith('?');
	}

	function isWhyQuestion(string) {
	  return string.toLowerCase().match(/.*?why.*?\?.*?/) !== null;
	}

	function isStrongStatement(string) {
	  return string.toLowerCase().match(/.*?\!$/) !== null;
	}

	function isStatement(string) {
	  return string.toLowerCase().match(/.*?\.$/) !== null;
	}

	function isSadSmiley(string) {
	  return string.toLowerCase().match(/[:;]'?\-?\(/) !== null;
	}

	function isHappySmiley(string) {
	  return string.toLowerCase().match(/[:;]-?[\)D]/) !== null;
	}

	function isShutup(string) {
	  return string.toLowerCase().match(/.*?shut\s?up.*?/) !== null ||
			 string.toLowerCase().match(/.*?be\s?quiet.*?/);
	}

	function isPreempt(string) {
	  return string.toLowerCase().match(/.*?preempt.*?/) !== null;
	}

	function isWake(string, nick) {
	  return string === nick + '!' || (
			  string.indexOf(nick) !== -1 && (
			    string.indexOf('wake up') !== -1 ||
			    string.indexOf('wakeup') !== -1 ||
			    string.indexOf('unmute') !== -1 ||
			    string.indexOf('say') !== -1 ||
			    string.indexOf('speak') !== -1));
	}

	function askingForDirtyTalk(string) {
	  return string.indexOf('horny') !== -1 ||
             string.indexOf('sex') !== -1 ||
             string.indexOf('fuck') !== -1 ||
             string.match(/.*?dirty.*?talk.*?/) !== null ||
             string.match(/.*?talk.*?dirty.*?/) !== null ||
             string.indexOf('stick') !== -1 ||
             string.indexOf('seduce') !== -1 ||
             string.indexOf('plug') !== -1;
	}

	/**
	* Will return how much the bot likes a person.
	* The lover the returned number, the more he hates him, bigger numbers
	* indicate that he likes the person.
	* -10 is the most negative level, on which the bot outright hates the
	* person. +10 equals pure, eternal love.
	*/
	function getLoveLevel(name) {
	  var score = 0;
	  for(var i = 0; i < name.length; i++) {
	    score += name.charCodeAt(i);
	  }
	  score %= 20;
	  score -= 10;
	  return score;
	}

	function rd(arr) {
	  var r = Math.random();
	  return arr[parseInt(r*arr.length)];
	}

	function instrument(strings, words, person) {
	  var regex = /\{\{(.*?)\}\}/;
	  var res;
	  var string = rd(strings);
	  while ((res = regex.exec(string)) !== null) {
	    var group = res[0];
	    var key = res[1];
	    var index = res.index;
	    if (key === 'person') {
	      string = string.substr(0, index) + person +
                   string.substr(index + group.length, string.length);
	    } else if (words[key] !== undefined) {
	      var val = rd(words[key]);
	      if (words.multiplicators !== undefined &&
              Math.random() < MULTIPLICATOR_PROXIMITY) {
	        var multi = rd(words.multiplicators);
	        val = multi.value + val;
	      }
	      string = string.substr(0, index) + val +
                   string.substr(index + group.length, string.length);
	    } else {
	      return 'UNDEFINED TEMPLATE: ' + group;
	    }
	  }
	  return string;
	}

	function Conversation(person, nick) {
	  eventlog.log("conversation.Conversation");
	  this.nick = nick;
	  this.person = person;
	  this.state = this.greet;
	  this.mood = Math.random() * 20 - 10;
	  this.loveLevel = getLoveLevel(person);
	  if(this.loveLevel > LOVE_THRESHOLD && Math.random() < HORNY_PROXIMITY) {
	    this.horny = true;
	  } else {
	    this.horny = false;
	  }
	}

	util.inherits(Conversation, EventEmitter);

    Conversation.prototype.didntUnderstand = function didntUnderstand() {
      this.emit('say', 'I did not understand that. Please tell me how long I ' +
                'should shut up like this: \'5min\' or \'for ever\' ' + 
                'or \'10 seconds\' etc.');
    };

	Conversation.prototype.wakeUpAfter = function wakeUpAfter(s) {
	  var self = this;
	  this.shutuptimeout = setTimeout(function() {
	    self.emit('unmute');
	  }, s*1000);
	};
	
	Conversation.prototype.sleepFor = function sleepFor(s) {
	  function timeToReadable(time) {
	    var hours = Math.floor(time / 3600);
	    time = time - hours * 3600;
	    var minutes = Math.floor(time / 60);
	    var seconds = time - minutes * 60;
	    return hours + ' hours, ' + minutes + ' minutes and ' + seconds +
	      ' seconds';
	  }
	  this.emit('say', 'Okay, I will be asleep for ' + timeToReadable(s) +
	    ' or until someone wakes me up!');
	  this.emit('mute');
	  this.wakeUpAfter(s);
	};

	Conversation.prototype.mute = function() {
	  if (this.shutuptimeout) {
	    clearTimeout(this.shutuptimeout);
	  }
	  this.muted = true;
	};

	Conversation.prototype.unmute = function() {
	  if (this.shutuptimeout) {
	    clearTimeout(this.shutuptimeout);
	  }
	  this.muted = false;
	  this.postGreet();
	};

	Conversation.prototype.shutup = function(word) {
      var self = this;
	  word = word.toLowerCase();
	  var regexSec = /([0-9]+[\.,]?[0-9]*?)\s?se?c?o?n?d?s?/;
	  var regexMin = /([0-9]+[\.,]?[0-9]*?)\s?mi?n?u?t?e?s?/;
	  var regexHour = /([0-9]+[\.,]?[0-9]*?)\s?ho?u?r?s?/;
	  if (word.indexOf('ever') !== -1 || word.indexOf('always') !== -1) {
	    this.emit('say', 'Okay :( I will shut up until someone wakes me up.');
	    this.emit('mute');
		return;
	  }
	  var res;
	  res = regexSec.exec(word);
	  if (res !== null) {
	    if (res.length >= 2) {
	      self.sleepFor(parseFloat(res));
	    } else {
	      self.didntUnderstand();
	    }
		return;
	  }
	  res = regexMin.exec(word);
	  if (res !== null) {
	    if (res.length >= 2) {
	      self.sleepFor(parseFloat(res)*60);
	    } else {
	      self.didntUnderstand();
	    }
	    return;
	  }
	  res = regexHour.exec(word);
	  if (res !== null) {
	    if (res.length >= 2) {
	      self.sleepFor(parseFloat(res)*60*60);
	    } else {
	      self.didntUnderstand();
	    }
	    return;
	  }
	  self.didntUnderstand();
	};

	Conversation.prototype.react = function(word) {
	  if (this.muted) {
	    word = word.toLowerCase();
	    if (isWake(word, this.nick)) {
	      this.emit('say', '*yawn* how long have I been asleep?');
	      this.emit('unmute');
	    }
	    return;
	  }
	  if (word.toLowerCase().indexOf(this.nick.toLowerCase()) !== -1) {
	  	var sentences, words;
	  	if (isShutup(word)) {
	  	  this.emit('say', 'Okay :( For how long?');
	  	  this.state = this.shutup;
	  	} else if (isPreempt(word)) {
	  	  this.emit('say', 'ok, starting the warning playlist...');
	  	  this.emit('preempt');
	  	} else if(isWhyQuestion(word)) {
	  	  words = {attribute : attributes, smiley : smilies2,
	  	           place : places};
	  	  sentences = becauses;
	  	  this.emit('say', instrument(sentences, words, this.person));
	  	} else if(isQuestion(word)) {
	  	  if (askingForDirtyTalk(word)) {
	  	    this.initiateDirtyConversation();
	  	  } else {
	  	    sentences = decision_words;
	  	    this.emit('say', rd(sentences));
	  	  }
	  	} else if(isStrongStatement(word)) {
	  	  if(word === this.nick + '!') {
	  	  	this.emit('say', this.person + '!');
	  	  } else {
	  	    words = {
	  	      shout : shout_words,
	  	      depri : depri_words
	  	    };
	  	    sentences = [
	  	      '{{person}}!',
	  	      '{{person}}, stop {{shout}}, already!',
	  	      'Stop {{shout}}!',
	  	      '{{person}}, can you please {{depri}} for once!?',
	  	      '{{person}}, why can\'t you {{depri}} :(',
	  	      'Yes, I hear you!',
	  	      'I hear you, I just dont wanna talk to you.',
	  	    ];
	  	    this.emit('say', instrument(sentences, words, this.person));
	  	  }
	  	} else {
	  	  if (askingForDirtyTalk(word)) {
	  	    this.initiateDirtyConversation();
	  	  } else {
	  	    words = {
	  	      smiley : smilies,
	  	      lol : lols
	  	    };
	  	    sentences = doges;
	  	    this.emit('say', instrument(sentences, words, this.person));
	  	  }
	  	}
	  } else {
	  	this.state(word);
	  }
	};

	Conversation.prototype.greet = function() {
	  var words = {
	    botActions : ['like','love','appreciate'],
	    attribute : attributes2,
	    feeling : ['great','nice','cool'],
	    multiplicators : ['super-','ultra-','very much '],
	    action : ['hang out','chill','play','drink some beer','cuddle','have a baby'],
	    quantity : ['more often','sometime','today','always','tomorrow','again']
	  };

	  var sentences = [
	    'I {{botActions}} you.',
	    'I {{botActions}} you. You are {{attribute}}.',
	    'We should {{action}} together {{quantity}}.',
	    'I hope you had a {{feeling}} day.',
	    'It\'s {{feeling}} to see you!',
	    '{{feeling}} to see you! Let\'s {{action}} {{quantity}}.',
	    'It\'s {{feeling}} to see you!',
	    'It\'s {{feeling}} to see you!'
	  ];
	  this.emit('say', instrument(sentences, words, this.person));
	  this.postGreet();
	};

	Conversation.prototype.postGreet = function() {
	  if (this.horny) {
	    this.initiateDirtyConversation();
	  } else {
	    if (this.mood < 0) {
	      this.initiateNegativeConversation();
	    } else  {
	      this.initiatePositiveConversation();
	    }
	  }
	};

	Conversation.prototype.hornyReaction = function(word) {
	  if (isNo(word)) {
	    this.horny = false;
	    this.postGreet(word);
	    this.emit('say', 'okay :(');
	    return;
	  }
	  var words = {
	    maleGenital : maleGenitals,
	    femaleGenital : femaleGenitals,
	    action : ['stick','plug'],
	    pettingAction : pettingActions,
	    pettingZone : pettingZones,
	    attribute : attributes3,
	    adverb : ['fast','slow','at 1000Mb/s']
	  };

	  var sentences = sexers;
	  this.state = this.hornyReaction;
	  this.emit('say', instrument(sentences, words, this.person));
	};

	Conversation.prototype.initiateDirtyConversation = function() {
	  var words = { attribute : attributes3 };
	  var sentences = askdirties;
	  this.state = this.hornyReaction;
	  this.emit('say', instrument(sentences, words, this.person));
	};

	Conversation.prototype.initiateNegativeConversation = function() {
	  this.angry = Math.random() < 0.5;
	  this.state = this.negativeReaction;
	};

	Conversation.prototype.initiateNeutralConversation = function() {
	  this.state = this.neutralReaction;
	};

	Conversation.prototype.initiatePositiveConversation = function() {
	  this.state = this.positiveReaction;
	};

	Conversation.prototype.neutralReaction = function(string) {
	  // TODO
	};

	Conversation.prototype.positiveReaction = function(string) {
      var sentences;
	  var words = {
	  	description : descriptions,
	  	feeling : ['great','alright','happy'],
	  	feelingAttribute : ['happy','in a good mood'],
	  	like : ['like','love'],
	  	personAction : personActions,
	  	cheer : ['yay','yeah','yahoo','alright'],
	  	yes : ['yup', 'yeah', 'yes', 'totally', 'mhm'],
	  	no : ['no', 'nope'],
	  	happySmiley : [':)', ':D', ':-)']
	  };
	  if(isYes(string) || isNo(string)) {
	  	sentences = yesnos;
	  	this.emit('say', instrument(sentences, words, this.person));
	  } else if (isHappySmiley(string)) {
	  	sentences = ['{{happySmiley}}', '{{cheer}} {{happySmiley}}'];
	  	this.emit('say', instrument(sentences, words, this.person));
	  } else if (isSadSmiley(string)) {
	  	sentences = cheers;
	  	this.emit('say', instrument(sentences, words, this.person));
	  } else if (isWhyQuestion(string)) {
	  	sentences = becauses2;
	  	this.emit('say', instrument(sentences, words, this.person));
	  } else if (isStrongStatement(string)) {
	  	sentences = calms;
	  	this.emit('say', instrument(sentences, words, this.person));
	  } else if (isStatement(string)) {
	  	if (Math.random() < STATEMENT_COMMENT_THRESHOLD) {
	  	  sentences = feelings2;
	  	  this.emit('say', instrument(sentences, words, this.person));
	  	}
	  } else {
	  	if (Math.random() < RANDOM_COMMENT_THRESHOLD) {
	  	  sentences = happies;
	  	  this.emit('say', instrument(sentences, words, this.person));
	  	}
	  }
	};

	Conversation.prototype.negativeReaction = function(string) {
      var sentences;
	  var words = {
	    jabbering : ['jabbering','spiel','stories',
	    	         'lifetime story','wittering','complaining',
	    	         'moaning','whining','lamenting'],
	    feeling : ['headache','hangover','segmentation fault'],
	    feelingAttribute : ['sad','bad','buggy'],
	    hate : ['don\'t like','hate'],
	    personAction : ['shut up','leave','go away','leave me alone',
	                    'stop bothering me','get a life and leave me alone',
	    				'shut me down'],
	    sadSmiley : sadSmilies
	  };
	  if (isHappySmiley(string) || isSadSmiley(string)) {
	    sentences = ['{{sadSmiley}}'];
	    this.emit('say', instrument(sentences, words, this.person));
	  } else if (isWhyQuestion(string)) {
	    if (this.angry) {
	      sentences = angryBecauses;
	      this.emit('say', instrument(sentences, words, this.person));
	    } else {
	      sentences = buzzoffs;
	      this.emit('say', instrument(sentences, words, this.person));
	    }
	  } else if(isStrongStatement(string)) {
	    if (this.angry) {
	      sentences = insults;
	      this.emit('say', instrument(sentences, words, this.person));
	    } else {
	      sentences = putdowns;
	      this.emit('say', instrument(sentences, words, this.person));
	    }
	  } else if(isStatement(string)) {
	    if (Math.random() < STATEMENT_COMMENT_THRESHOLD) {
	      sentences = feelings;
	      this.emit('say', instrument(sentences, words, this.person));
	    }
	  } else {
	    if (Math.random() < RANDOM_COMMENT_THRESHOLD) {
	      sentences = hates;
	      this.emit('say', instrument(sentences, words, this.person));
	    }
	  }
	};

	module.exports = Conversation;
  })
})();
