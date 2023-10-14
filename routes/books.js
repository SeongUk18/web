var express = require('express');
var router = express.Router();

/* 도서검색 page. */
router.get('/', function(req, res, next) {
  // '/' 경로 의미 -> 라우터 등록시 books로 저장했기때문에 books 생략됨
  res.render('index', { title: '도서검색',pageName:'books/search.ejs' });
  // index.ejs 파일 가져온다는 의미
  // 랜더링 : ejs 파일
});

// 장바구니 페이지 이동
router.get('/cart',function(req, res){
  res.render('index', {title:'장바구니', pageName:'books/cart.ejs'});
});

module.exports = router;