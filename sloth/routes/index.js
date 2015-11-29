var express = require('express');
var router = express.Router();
var os = require('os');
var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
// Connection url
var url = 'mongodb://mongo:27017/log';
var db;

// Connect using MongoClient


var incrementVisit = function(db, cb) {
  MongoClient.connect(url, function(err, db) {
    if (err) console.log(err);
    db.collection('log', function(err, collection) {
      collection.update({totalVisitCount: true},{totalVisitCount: 1},{upsert: true, multi: false},function(err, res) {
        if (err) console.log err;
        collection.findOne({totalVisitCount: true}, function(err, res) {
          if (err) console.log(err);
          return cb(null, res.totalVisitCount);
        });
      });
    });
  });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  incrementVisit(db, function(err, visitCount) {
    res.render('index', { title: 'Sloth!', hostname: os.hostname(), visit: visitCount });
  });
});

module.exports = router;
