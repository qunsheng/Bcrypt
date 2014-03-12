/************************************************************** 
 * 
 * A proof of concept program for update an item 
 * in users collection of mongo DB
 * 
 **************************************************************/ //
var User = require('../models/UserModel.js');

//update by id
User.findByIdAndUpdate("52df70119174d6f803fd90fc", {password: '123Password'}, function(error, user){
	if(error){
		console.log(error);
	} else {
		console.log("user found "+ user);
	}

} );
