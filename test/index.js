"use strict";

var _ = require('../lib'),
	should = require('chai').should();

describe('underskore', function() {
	describe('delta', function() {
		var x = {
				a: 1,
				b: 'b',
				c: null,
				d: []
			},
			y = _.clone(x);

		it('should return an empty object for identical initial and final objects', function() {
			/*jshint expr:true*/
			_.delta(x, y).should.be.empty;
		});

		it('should return the properties from final that aren\'t the same as the ones in initial', function() {
			y.a = 2;
			_.delta(x, y).should.deep.equal({
				a: 2
			});
		});

		it('should not treat similar objects as equal, and should ignore any new properties in initial', function() {
			y.c = null;
			y.d = [];
			x.e = {};
			_.delta(x, y).should.deep.equal({
				a: 2,
				d: []
			});
		});
	});
});