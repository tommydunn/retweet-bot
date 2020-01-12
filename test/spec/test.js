/* global describe, it, assert, RetweetBot */
'use strict';

/**
 * RetweetBot mocha test spec - https://mochajs.org/
 * @param {Object} RetweetBot - RetweetBot unit tests
 */
 
describe('RetweetBot', function () {
	it('should be a function', function () {
		assert.equal(typeof RetweetBot, 'function');
	});

	var bot = new RetweetBot();

	console.log(bot);

	console.log(bot.getMostRecentMagaTweet());
});
