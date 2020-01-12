'use strict';

var retweetBot = require('./src/retweet-bot/retweet-bot');

var App = (function() {

	var Bot;
	var phrase = 'Eat shit';

	var initialize = function() {
		Bot = new retweetBot();
	};

	var stream = function() {
		Bot.getStream(phrase);
	};

	var get = function() {
		Bot.getTweets(phrase, 5);
	};

	var streamAndRetweet = function() {
		Bot.streamAndRetweet(phrase);
	};

	return {
		init: function() {
			initialize();
		},
		stream: function() {
			stream();
		},
		get: function() {
			get();
		},
		streamAndRetweet: function() {
			streamAndRetweet();
		}
	}

}());

App.init();
App.streamAndRetweet();
//App.get();
