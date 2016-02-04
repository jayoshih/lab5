// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	if(req.query.search){
		var filteredData = data.friends.filter(function(item) {
			var words = req.query.search.split(" ");
			console.log("checking " + item.name);
			for(var i = 0; i < words.length; ++i){
				if(item.description.toLowerCase().indexOf(words[i].toLowerCase()) >=0)
					return true;
			}
			return false;
		});
		console.log(filteredData);
		res.render('index', {'friends':filteredData});
	}
		
	else
		res.render('index', data);

};