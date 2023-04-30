const playModel = require('../models/playModel');

const alltheshitsever = {
    "venusaur": ["grass", "poison"],
    "charizard": ["fire", "flying"],
    "blastoise": ["water"],
    "butterfree": ["bug", "flying"],
    "beedrill": ["bug", "poison"],
    "raticate": ["normal"],
    "fearow": ["normal", "flying"],
    "pidgeot": ["normal", "flying"],
    "arbok": ["poison"],
    "raichu": ["electric"],
    "sandslash": ["ground"],
    "nidoking":["ground", "poison"],
    "nidoqueen": ["ground", "poison"],
    "clefable": ["normal"],
    "ninetales": ["fire"],
    "wigglytuff": ["normal"],
    "vileplume": ["grass", "poison"],
    "parasect": ["bug", "grass"],
    "venomoth": ["bug", "poison"],
    "dugtrio": ["ground"],
    "persian": ["normal"],
    "golduck": ["water"],
    "primeape": ["fighting"],
    "arcanine": ["fire"],
    "poliwrath": ["water", "fighting"],
    "alakazam": ["psychic"],
    "machamp": ["fighting"],
    "victreebel": ["grass", "poison"],
    "tentacruel": ["water", "poison"],
    "golem": ["rock", "ground"],
    "rapidash": ["fire"],
    "slowbro": ["water", "psychic"],
    "dodrio": ["normal", "flying"],
    "dewgong": ["water", "ice"],
    "muk": ["poison"],
    "cloyster": ["water", "ice"],
    "gengar": ["ghost", "poison"],
    "hypno": ["psychic"],
    "kingler": ["water"],
    "electrode": ["electric"],
    "exeggutor": ["grass", "psychic"],
    "marowak": ["ground"],
    "hitmonlee": ["fighting"],
    "hitmonchan": ["fighting"],
    "weezing": ["poison"],
    "rhydon": ["ground", "rock"],
    "chansey": ["normal"],
    "tangela": ["grass"],
    "kangaskhan": ["normal"],
    "seadra": ["water"],
    "seaking": ["water"],
    "starmie": ["water", "psychic"],
    "mr-mime": ["psychic"],
    "scyther": ["bug", "flying"],
    "jynx": ["ice", "psychic"],
    "electabuzz": ["electric"],
    "magmar": ["fire"],
    "pinsir": ["bug"],
    "tauros": ["normal"],
    "gyarados": ["water", "flying"],
    "lapras": ["water", "ice"],
    "vaporeon": ["water"],
    "jolteon": ["electric"],
    "flareon": ["fire"],
    "porygon": ["normal"],
    "omastar": ["rock", "water"],
    "kabutops": ["rock", "water"],
    "aerodactyl": ["rock", "flying"],
    "snorlax": ["normal"],
    "articuno": ["ice", "flying"],
    "zapdos": ["electric", "flying"],
    "moltres": ["fire", "flying"],
    "dragonite": ["dragon", "flying"],
    "mewtwo": ["psychic"],
    "mew": ["psychic"]
}
function teamForm() {
    let teamformation = [];
    const keys = Object.keys(alltheshitsever)
    const listLength = keys.length
    for(let i = 0; i<5; i++){
      teamformation[i] = keys[Math.floor(Math.random() * listLength)]
    }
    //console.log(leng)
    return teamformation
}

function superEffectiveSwitch(team, typeadvantage){
  //const shitshit = team[0]
  let mainguy = team[0];
  console.log(mainguy)
  let change = Math.floor(Math.random() * 5); 
  let chooser = Math.floor(Math.random() * 5); 
  console.log("bruhhh " + team[chooser])
  console.log("chooser: " + chooser)
  console.log("change: " + change)
  
  if ((typeadvantage === false) && (change === 4)){
    mainguy = team[chooser]
    console.log(mainguy)
  }
  return mainguy
}

function lowhpSwitch(team, hp){
  //const shitshit = team[0]
  let chooser = Math.floor(Math.random() * 5); 
  console.log("bruhhh " + team[chooser])
  console.log("chooser: " + chooser)
  if ((hp<=0.2)){
    mainguy = team[chooser]
  }
  return mainguy
}

function superEffectiveMove(moves, playerType){
    const keys = Object.keys(moves.moveset)
    console.log(keys)
    let results = {}
    for(let x = 0; x < 4; x++){
      let move = keys[x]
      console.log(move)
      let type = moves.moveset[keys[x]].type
      let lower = type.toLowerCase()
      let effective = playModel.isEffective(lower, playerType)
      results[move] = effective
    }
    console.log(results)
    return results
}

//const twitchCon = teamForm(alltheshitsever);
//console.log(twitchCon)
//console.log(lowhpSwitch(twitchCon, 0.2))
console.log(superEffectiveMove({"moveset": {"Hydro Pump": {"type": "Water", "category": "Special", "power": 110, "accuracy": 80}, "Ice Beam": {"type": "Ice", "category": "Special", "power": 90, "accuracy": 100}, "Acid Armor": {"type": "Poison", "category": "Status", "power": null, "accuracy": null}, "Quick Attack": {"type": "Normal", "category": "Physical", "power": 40, "accuracy": 100}}}, "water"))

module.exports = {teamForm, superEffectiveMove, superEffectiveSwitch, lowhpSwitch};