var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  hostnombre = os.hostname();
  res.render('index', { title: 'Sloth!', hostname: "#{os.hostname()}" });
});

module.exports = router;
