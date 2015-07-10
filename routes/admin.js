var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Admin page');
});

router.get('/list', function(req, res, next) {
  res.send('Admin list');
});

module.exports = router;
