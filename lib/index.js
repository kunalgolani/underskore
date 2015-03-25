"use strict";

var _ = require('underscore');

_.mixin({
	// get the values from object that are different from those in reference
	delta: function(object, reference) {
		return _.omit(object, function(v, k) {
			return v === reference[k];
		});
	}
});

module.exports = _;