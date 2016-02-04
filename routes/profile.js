var data = require("../data.json");

exports.view = function(req, res) {    
	var friend;
	for(var i = 0; i < data.friends.length; ++i){
		console.log(data.friends[i]);
		if(data.friends[i].name == req.params.name.replace("%20", " ")){
			friend = data.friends[i];
			break;
		}
	}
	console.log(friend);
	res.render('profile', friend);
 }