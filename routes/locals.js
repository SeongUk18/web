var express = require('express');
var router = express.Router();

/* 지역 검색 */
router.get('/', function(req, res, next) {
  // '/' 경로 의미 (views경로가 기본)
  res.render('index', { title: '지역검색' ,pageName:'locals/search.ejs'});
  // index.ejs 파일 랜더링한다는 의미, title : 탭에 나오는 이름
});

//즐겨찾기 페이지
router.get('/favorite', function(req, res, next) {
  res.render('index', { title: '즐겨찾기' ,pageName:'locals/favorite.ejs'});
});

module.exports = router;
