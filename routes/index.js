var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const ai = require('../models/aiModel');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(playModel.calcDamage("charizard", "scyther", 95, "fire"));
});

router.get('/play', function(req, res) {
  //pick teams
  var team1 = [];
  var team2 = [];
  team1 = ai.teamForm();
  team2 = ai.teamForm();
  var t1hp = ((team1[0].hp + 15) * 2 * 100 / 100) + 110;
  var t2hp = ((team2[0].hp + 15) * 2 * 100 / 100) + 110;
  if (team1.length != 0 && team2.length != 0) {
    //apply supereffective damage if possible
    ai.move(team1, team2, t1hp, t2hp);
    res.render('game', { title: "PokeFront Battle V.S. CPU", team1: team1, team2: team2});
  }
});


module.exports = router;
