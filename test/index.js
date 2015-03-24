"use strict";

var _ = require('../lib'),
	should = require('chai').should();

describe('underskore', function() {
	describe('delta', function() {
		it('should return the first argument without the identical properties from the second argument', function() {
			var x = {
					a: 1,
					b: 'b',
					c: null,
					d: []
				},
				y = _.clone(x);
			_.delta(x, y).should.be.empty;

			y.a = 2;
			_.delta(x, y).should.deep.equal({
				a: 2
			});

			y.d = [];
			y.c = null;
			x.e = {};
			_.delta(x, y).should.deep.equal({
				a: 2,
				d: []
			});
		});
	});
});