var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

const Admin = require('../models/admin');
var passport = require('passport');

var authenticate = require('../authenticate');

router.use(bodyParser.json());

router.route('/')
.get((req,res,next) => {
    Admin.find({})
    .then((admin) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(admin);
    }, (err) => next(err))
    .catch((err) => next(err));
})

router.post('/signup', (req, res, next) => {
    Admin.register(new Admin({username: req.body.username}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    });
  });

  router.route('/login')
.get((req,res,next) => {
  res.redirect('/user'); 
})
  router.post('/login', passport.authenticate('local'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'You are successfully logged in!'});
  });
  
module.exports = router;
