"use strict";

var _ = require('underscore');

_.mixin({
	// get the values from final that are different from those in initial
	delta: function(initial, final) {
		return _.omit(final, function(v, k) {
			return v === initial[k];
		});
	}
});

module.exports = _;