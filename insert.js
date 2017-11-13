var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
   
   { id: '001', name: 'John01', address: 'Highway 701' ,Home: 'Thongsong01' ,Phone: '062-2340001',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '002', name: 'John02', address: 'Highway 702' ,Home: 'Thongsong02' ,Phone: '062-2340002',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '003', name: 'John03', address: 'Highway 703' ,Home: 'Thongsong03' ,Phone: '062-2340003',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '004', name: 'John04', address: 'Highway 704' ,Home: 'Thongsong04' ,Phone: '062-2340004',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '005', name: 'John05', address: 'Highway 705' ,Home: 'Thongsong05' ,Phone: '062-2340005',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '006', name: 'John06', address: 'Highway 706' ,Home: 'Thongsong06' ,Phone: '062-2340006',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '007', name: 'John07', address: 'Highway 707' ,Home: 'Thongsong07' ,Phone: '062-2340007',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '008', name: 'John08', address: 'Highway 708' ,Home: 'Thongsong08' ,Phone: '062-2340008',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '009', name: 'John09', address: 'Highway 709' ,Home: 'Thongsong09' ,Phone: '062-2340009',role: [
    "admin"
    ,
    "user"
    ]},
   { id: '010', name: 'John10', address: 'Highway 710' ,Home: 'Thongsong10' ,Phone: '062-2340010',role: [
    "admin"
    ,
    "user"
    ]},

];

  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  
});
