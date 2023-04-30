const playModel = require('./playModel');
const pokemon_type = require('../pokemon_type.json');
function teamForm() {
    let teamformation = [];
    const keys = Object.keys(pokemon_type);
    const listLength = keys.length;
    for(let i = 0; i < 6; i++) {
      teamformation[i] = keys[Math.floor(Math.random() * listLength)];
    }
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
  let chooser = Math.floor(Math.random() * 5); 
  if ((hp <= 0.2)){
    mainguy = team[chooser];
  }
  return mainguy;
}

function superEffectiveMove(moves, playerType){
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

module.exports = {teamForm, superEffectiveSwitch, lowhpSwitch, superEffectiveMove};