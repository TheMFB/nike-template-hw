var express = require('express');
var router = express.Router();

const hw1 = require('../controllers/hw1')
const hw2 = require('../controllers/hw2')

/* POST hw1 template. */
router.post('/hw1', function(req, res, next) {
  let body = req.body;
  res.send(hw1.generate(body.template, body.dynamic_data));
});

/* POST hw2 template. */
router.post('/hw2', function(req, res, next) {
  let body = req.body;
  res.send(hw2.generate(body.template, body.dynamic_data));
});

module.exports = router;
