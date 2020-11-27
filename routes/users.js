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
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
})
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
