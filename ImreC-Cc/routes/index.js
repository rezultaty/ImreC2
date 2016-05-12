'use strict';

var express = require('express');
var router = express.Router();

var ip = require('../utils/ip');

router.get('/', function (req, res, next) {

    var options = {
        ip: ip.ip(),
        actionError: req.query.a === 'error',
        noSuchStorage: req.query.a === 'noSuchStorage'
    };

    res.render('index', options)
});

module.exports = router;
