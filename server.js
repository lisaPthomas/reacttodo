var express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else {
		res.redirect("http://" + req.hostname + req.url);
	}
});

//add functinoality to express app
//this .use is the folder name you want to show to the public
app.use(express.static('public'));


//takes two args PORT and function will get called once server is up
app.listen(PORT, function(){
  console.log("Express server is up and running on PORT" + PORT);
});
