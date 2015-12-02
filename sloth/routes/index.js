var express = require('express');
var router = express.Router();
var os = require('os');
var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
var url = "mongodb://mongo:27017/log";

// Connect using MongoClient
var incrementVisit = function(url, cb) {
  MongoClient.connect(url, function(err, db) {
    if (err) console.log(err);
    db.collection('log', function(err, collection) {
      collection.update({counter: "visit counter"},{$inc: {totalVisitCount: 1}},{upsert: true, multi: false},function(err, res) {
        if (err) console.log(err);
        collection.findOne({counter: "visit counter"},{fields: {totalVisitCount: 1}}, function(err, res) {
          if (err) console.log(err);
          db.close();
          return cb(null, res.totalVisitCount);
        });
      });
    });
  });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  getMongoUrl(url, function(err, url) {
    incrementVisit(url, function(err, visitCount) {
      res.render('index', { title: 'Sloth!', hostname: os.hostname(), visit: visitCount});
    });
  });
});

module.exports = router;
