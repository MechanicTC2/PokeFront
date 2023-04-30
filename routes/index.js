var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' });
});

router.get('/play', function(req, res) {
  res.render('game.ejs')
});

module.exports = router;
