var express = require('express');
var router = express.Router();
const Users = require('../models/users');

router.route('/getAccessToken')
.get((req,res,next) => {
   Users.find({}).select('access_token -_id').then((users) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
}, (err) => next(err))
.catch((err) => next(err));
})

router.route('/getNumbers')
.get((req,res,next) => {
    Users.find({}).select('subscriber_number -_id').then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
})

router.route('/getAllCredentials')
.get((req,res,next) => {
   Users.find({}).select('access_token subscriber_number -_id').then((users) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
}, (err) => next(err))
.catch((err) => next(err));
})

module.exports = router;
