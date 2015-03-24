"use strict";

var _ = require('underscore');

_.mixin({
	// get the values from object that are different from those in source
	delta: function(object, source) {
		return _.omit(object, function(v, k) {
			return v === source[k];
		});
	}
});

module.exports = _;