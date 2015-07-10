var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fruits = ['Apple', 'Banana', 'Orange'];
  res.render('index', { title: 'สวัสดี', fruits: fruits });
});

//  http://localhost:3000/about
router.get('/about', function (req, res) {
  // res.send('About');
  // res.send({msg: 'สวัสดี', app: 'NodeJS with ExpressJS'});

  res.render('about', { title: 'About' });

});

module.exports = router;
