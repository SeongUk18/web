var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // '/' 경로 의미
  res.render('index', { title: 'Express', pageName:'home.ejs' });
  // index.ejs 파일 가져온다는 의미
});

module.exports = router;
