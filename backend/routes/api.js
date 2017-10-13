var app = require('express')();
var Boat = require('../models/boatModel');
var User = require('../models/userModel');

app.get('/boats', function(req, res) {

	Boat.find({}, function(err, boats) {
		if(err) throw err;

		res.send(boats);
	});
});

app.get('/boat', function(req, res) {
	var id = req.query.boatId;

	Boat.find({ _id: id }, function(err, boat) {
		if(err) throw err;
		
		res.send(boat[0]);
	});
});

app.delete('/boat', function(req, res) {
	var boatId = req.query.boatId;

	Boat.findByIdAndRemove(boatId, function(err, boat) {
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "boat with id " + boat._id + " is not successfully deleted"
			});
		} else {
			res.send({
				success: true,
				message: "boat successfully deletedd",
				id: boat._id
			});
		}
	});
});

app.post('/boat', function(req, res) {
	var boatData = req.body.boatData;
	var boat = new Boat(boatData);
	boat.save(function(err, createdBoatObject) {
		if(err) {
			//console.log(err);
			res.send({
				success: false,
				message: "Boat not added"
			});
		} else {
			res.send({
				success: true,
				message: "Boat successfully added",
				boat: createdBoatObject
			});
		}
	});
});

app.put('/boat', function(req, res) {
	var boatData = req.body.boatData;

	Boat.findById(boatData._id, function(err, boat) {
		if(err) {
			res.send(err);
		} else {
			boat.name = boatData.name;
			boat.description = boatData.description;
			boat.weight = boatData.weight;
			boat.date = boatData.date;

			boat.save(function(err, boat) {
				if(err) {
					res.send(err);
				} else {
					res.send({
						success: true,
						message: "Boat successfully updated"
					});
				}
			});
		}
	});
});

app.get('/users', function(req, res) {

	User.find({}, function(err, users) {
		if(err) throw err;

		res.send(users);
	});
});

app.post('/user', function(req, res) {
	var userData = req.body.userData;
	var user = new User(userData);
	user.save(function(err, createdUserObject) {
		if(err) {
			//console.log(err);
			res.send({
				success: false,
				message: "User not added"
			});
		} else {
			res.send({
				success: true,
				message: "User successfully added",
				boat: createdUserObject
			});
		}
	});
});

app.get('/userExist', function(req, res) {
	var userName = req.query.userName;
	console.log(userName);
	User.find({ userName: userName }, function(err, user) {
		console.log(user);
		if(err) {
			console.log(err);
			res.send({
				success: false,
				message: "not successfully",
				data: []
			});
		} else {
			res.send({
				success: true,
				message: "successfully",
				data: user
			});
		}
	});
});

module.exports = app;