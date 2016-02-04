var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var new_friend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/500/500/people"		
	}
	res.render('add', new_friend);
	// Your code goes here
	
	console.log(new_friend);
	data["friends"].push(new_friend);
 }