var express = require('express');
var router = express.Router();
const moment = require('moment');

const SAMPLE_DATE = '2019-12-02 22:30:00';

router.get('/moment', function(req, res, next) {
  const start = Date.now();
  [...Array(10000)].forEach(_ => moment(SAMPLE_DATE).unix());
  const end = Date.now();
  res.send(`moment fin.: ${end - start}ms`);
  res.end();
});

router.get('/date', function(req, res, next) {
  const start = Date.now();
  [...Array(10000)].forEach(_ => Date.parse(SAMPLE_DATE) / 1000);
  const end = Date.now();
  res.send(`date fin.: ${end - start}ms`);
  res.end();
});


module.exports = router;
