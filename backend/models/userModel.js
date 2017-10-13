'use strict';

var mongoose = require('mongoose');

var userModel = function() {
	var userSchema = mongoose.Schema({
		name: String,
		UserName: String,
		password: String,
	});

	return mongoose.model('User', userSchema);
}


module.exports = new userModel();