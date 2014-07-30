var express = require('express'); //need express methods
var router = express.Router(); //need the router method in express

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource'); //res= response. Not building a template, sending some data back
});

module.exports = router;
