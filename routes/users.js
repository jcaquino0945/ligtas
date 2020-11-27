var express = require('express');
var router = express.Router();
const Users = require('../models/users');
const path = require('path');

router.route('/')
.get((req,res,next) => {
  Users.create({access_token:req.query.access_token, subscriber_number:req.query.subscriber_number}).then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
  Users.deleteOne({access_token:req.query.access_token, subscriber_number:req.query.subscriber_number}).then((user) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    console.log(user)
}, (err) => next(err))
.catch((err) => next(err));
})

router.route('/list') //display all users in db dev purposes only
.get((req,res,next) => {
  Users.find({})
  .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/clear') //delete all DANGER  dev purposes only
.delete((req, res, next) => {
  Users.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));    
});
/*
  if (!req.query.code) {
    Users.create(res.json(user)).then((dish) => {
      console.log('User Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
} if (req.query.code) {
  var code = req.query.code;
res.sendFile('user.html', { root: path.join(__dirname, '../public') });
console.log(code);
}*/
  /*
var code = req.query.code;
res.sendFile('user.html', { root: path.join(__dirname, '../public') });
console.log(code);
})
*/

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send("User Code: " + req.query.code);
});
*/




module.exports = router;
