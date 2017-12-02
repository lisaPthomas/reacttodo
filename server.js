var express = require("express");

var app = express();

//add functinoality to express app
//this .use is the folder name you want to show to the public
app.use(express.static('public'));

//takes two args port and function will get called once server is up
app.listen(3000, function(){
  console.log("Express server is up and running on port 3000");
});
