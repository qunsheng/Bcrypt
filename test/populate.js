/************************************************************** 
 * 
 * A proof of concept program for insert an item 
 * in users collection of mongo DB
 * 
 **************************************************************/ 

var User = require('../models/UserModel.js');

// populate
var user = new User();

user.username="katie777";
user.password="Password123";
      

user.save(function(error, user){
	if(error){
		console.log(error);
	} else {
		console.log("user saved "+ user);
	}
	
});

