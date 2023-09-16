var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // '/' 경로 의미 (views경로가 기본)
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
  // index.ejs 파일 랜더링한다는 의미, title : 탭에 나오는 이름
});

module.exports = router;
