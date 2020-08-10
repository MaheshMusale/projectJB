var express  =  require("express");

var index = require("./routes/index");
var app=express();


app.set("view engine","ejs");

app.use(index);
app.use(express.static("G:/Database/projectJB" + '/public'));


app.listen(3000, process.env.IP, function(){
   console.log("The Server Has Started!");
});