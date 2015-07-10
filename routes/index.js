var express = require('express');
var router = express.Router();
var Users = require('../models/Users');


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


router.get('/get-service', function (req, res) {

  var db = req.db;

  //var startDate = req.body.startDate;
  //var endDate = req.body.endDate;
  //
  var startDate = '2015-01-01';
  var endDate = '2015-01-03';

  Users.getService(db, startDate, endDate)
      .then(function (rows) {
        res.send({ ok: true, rows: rows });
      }, function (err) {
        res.send({ ok: false, msg: err });
      })

});




module.exports = router;
