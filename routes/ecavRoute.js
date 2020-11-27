var express = require('express');
var router = express.Router();
const Evacs = require('../models/evac');

router.route('/')
.get((req,res,next) => {
    Evacs.find({})
    .then((evacs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(evacs);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Evacs.create(req.body)
    .then((evacs) => {
        console.log('Evacuation Area Created ', evacs);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(evacs);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /evacs');
})
.delete((req, res, next) => {
    Evacs.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/:evacId')
.get((req,res,next) => {
    Evacs.findById(req.params.evacId)
    .then((evacs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(evacs);
    }, (err) => next(err))
    .catch((err) => next(err));
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /evacs/'+ req.params.evacId);
})
.put((req, res, next) => {
    Evacs.findByIdAndUpdate(req.params.evacId, {
        $set: req.body
    }, { new: true })
    .then((evacs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(evacs);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Evacs.findByIdAndRemove(req.params.evacId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = router;
