var express = require('express');
var router = express.Router();
var os = require('os');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://mongo:27017/test';
var db;

// Initialize connection once
MongoClient.connect(url, function(err, database) {
  if(err) throw err;
  db = database;
});

var incrementVisit = function(db, cb) {
  db.collection('log').update({totalVisitCount: true},{totalVisitCount: 1},{upsert: true, multi: false},function(err, res) {
    if (err) throw err;
    db.collection('log').findOne({totalVisitCount: true}, function(err, res) {
      if (err) console.log(error);
      return cb(null, res.totalVisitCount);
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
