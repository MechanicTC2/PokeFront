const playModel = require('./playModel');
const pokemon_btype = require('../pokemon_type');
const moves = require('../moves');

function teamForm() {
    let teamformation = [];
    const keys = Object.keys(pokemon_type);
    const listLength = keys.length;
    for(let i = 0; i < 6; i++) {
      teamformation[i] = keys[Math.floor(Math.random() * listLength)];
    }
    teamformation.mainguy = teamformation["0"]
    return teamformation;
}

function superEffectiveSwitch(team, typeadvantage){
  let mainguy = team[0];
  let change = Math.floor(Math.random() * 5); 
  let chooser = Math.floor(Math.random() * 5); 

  if ((typeadvantage === false) && (change === 4)) {
    mainguy = team[chooser];
  }
  return mainguy;
}

function lowhpSwitch(team, hp) {
  let mainguy = team[0];
  let chooser = Math.floor(Math.random() * team.length); 
  if ((hp <= 0.2)){
    team.mainguy = team[chooser];
  }
  return mainguy;
}

function superEffectiveMove(moves, playerType) {
    const keys = Object.keys(moves.moveset);
    let results = {};
    for (let x = 0; x < 4; x++) {
      let move = keys[x];
      let type = moves.moveset[keys[x]].type;
      let lower = type.toLowerCase();
      let effective = playModel.isEffective(lower, playerType);
      results[move] = effective;
    }
    return results;
}

function move(team1, team2, t1hp, t2hp) {
  try {
    let name = team2[0].substring(0, 1).toLocaleUpperCase() + team2[0].substring(1);
    let moveset = moves[name];
    let move;
    for (var key in superEffectiveMove(moveset, pokemon_btype[team1[0]])) {
      if (superEffectiveMove(moveset, pokemon_btype[team1[0]])[key] == 2) {
        move = key;
        console.log(name + " made move: " + move);
      }
      else if (lowhpSwitch(team2, t2hp)) {
        
      }
    }
    console.log(playModel.calcDamage(team2[0], team1[0], moveset.moveset[move].power, moveset.moveset[move].type.toLowerCase()));
  }
  catch (err) {

  }
}
module.exports = {teamForm, superEffectiveSwitch, lowhpSwitch, superEffectiveMove, move};