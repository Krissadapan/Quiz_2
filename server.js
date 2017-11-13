var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var user = require('./mongo.js'); 

function logger(req,res,next){
    console.log(new Date(), req.method, req.url);
    next();
    }


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(logger); 
app.use(express.static('www')) 


app.get('/users',user.findAll);
app.get('/users/search',user.search);
app.get('/users/role/:role',user.role);
app.get('/users/searchhome',user.searchHome);


app.get('/now',function(request, response){
    var now = new Date();
    response.send("Now: \n" + now);
});


app.get('/json',function(request, response){
    var user = {id:111, name:"User111"};
    response.json(user);
});

app.listen(3000); 
console.log('Server is running at http://localhost:3000');