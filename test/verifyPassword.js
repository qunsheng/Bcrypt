/************************************************************** 
 * 
 * A sample usage of fetching user and test password verification
 * 
 **************************************************************/ 

var User = require('../models/UserModel.js');

User.findOne({ username: 'katie777' }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -> Password123: true
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -> 123Password: false
    });
});