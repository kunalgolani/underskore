"use strict";

var _ = require('underscore');

_.mixin({
	diff: function(object, source) {
		return _.omit(object, function(v, k) {
			return v === source[k];
		});
	}
});

module.exports = _;