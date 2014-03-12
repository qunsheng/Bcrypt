/************************************************************** 
 * 
 * A proof of concept program for select all items 
 * in users collection of mongo DB
 * 
 **************************************************************/ 

var User = require('../models/UserModel.js');

// find all
User.find({}, function(error, users){
	if(error){
		console.log(error);
	} else {
		console.log("user found "+ users);
	}

});
