var express = require('express');
var router = express.Router();
const moves = require('../moves');
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

  const main = team1[0]
  const main2 = main.charAt(0).toUpperCase() + main.slice(1);
  const moveset = moves[main2].moveset
  const info = Object.keys(moveset)
  const move1 = info[0]
  const move2 = info[1]
  const move3 = info[2]
  const move4 = info[3]

  if (team1.length != 0 && team2.length != 0) {
    //apply supereffective damage if possible
    ai.move(team1, team2, t1hp, t2hp);
    res.render('game', { title: "PokeFront Battle V.S. CPU", team1: team1, team2: team2, move1: move1, move2: move2, move3: move3, move4: move4});
    }
});


module.exports = router;