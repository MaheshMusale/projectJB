var express  =  require("express");

var index = require("./routes/index");
var app=express();


app.set("view engine","ejs");

app.use(index);
app.use(express.static('public'));


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});
