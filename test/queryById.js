/************************************************************** 
 * 
 * A proof of concept program for query an item 
 * in users collection of mongo DB
 * 
 **************************************************************/ 
var User = require('../models/UserModel.js');

// query by id
User.findById("52df70119174d6f803fd90fc", function(error, user){
	if(error){
		console.log(error);
	} else {
		console.log("user found "+ user);
	}

} );