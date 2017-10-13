'use strict';

var mongoose = require('mongoose');

var boatModel = function() {
	var boatSchema = mongoose.Schema({
		name: String,
		description: String,
		weight: String,
		date: String,
		owner: String,
	});

	return mongoose.model('Boat', boatSchema);
}


module.exports = new boatModel();