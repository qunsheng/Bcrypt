/************************************************************** 
 * 
 * A proof of concept program for remove an item 
 * in users collection of mongo DB
 * 
 **************************************************************/ 

var User = require('../models/UserModel.js');

//remove by id
User.findByIdAndRemove("531fb986f7c39750158a959e", function(error, user){
	if(error){
		console.log(error);
	} else {
		console.log("user found and removed "+ user);
	}

} );
