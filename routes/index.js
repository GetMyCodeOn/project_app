var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Founders & Coders' });
});

module.exports = router;

//render recognises that you have to go get a template , in this case jade
