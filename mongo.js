var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
    });


function findAll(req, res){
    //get data from mongoDB
        var query = {};
        db.collection("users").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);  //send to browser
        });
}


function search(req, res) {
    var name = req.query.name;
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var query = { name:name};
      db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        res.json(result);
      });
    });
};


function role(req, res) {
    var role = req.params.role;
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var query = { role: new RegExp('.*' + role + '.*') };
      db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      
        res.json(result);
      });
    });
}


module.exports = {
        findAll: findAll,
        search: search,
        role: role
    };