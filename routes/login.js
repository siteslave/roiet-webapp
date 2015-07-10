var express = require('express');
var router = express.Router();
var Users = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Login'});
});


router.post('/dologin', function (req, res) {

  var username = req.body.username;
  var password = req.body.password;

  var crypto = require('crypto');

  var cryptPass = crypto.createHash('md5').update(password).digest('hex');

  Users.login(req.db, username, cryptPass)
      .then(function (total) {
        if (total > 0) {
          // success
          req.session.username = username;
          res.redirect('/');
        } else {
          res.render('login', {title: 'Login'});
        }
      }, function (err) {
        res.render('login', {title: 'Login'});
      });


});

module.exports = router;
