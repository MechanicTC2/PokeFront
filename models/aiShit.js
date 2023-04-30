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

function teamForm(index) {
    let teamformation = [];
    let shitsotp = [];
    const sotp = Object.keys(alltheshitsever)
    const leng = sotp.length
    for(let i = 0; i<5; i++){
      shitsotp[i] = sotp[Math.floor(Math.random() * leng+1)]
    }
    //console.log(leng)
    return shitsotp
}

function aiSwitch(team, typeAdBool){
  //const shitshit = team[0]
  let mainguy = team[0];
  console.log(mainguy)
  let hp = hpoints;
  let change = Math.floor(Math.random() * 5); 
  let chooser = Math.floor(Math.random() * 5); 
  //console.log("bruhhh " + team[chooser])
  //console.log("chooser: " + chooser)
  //console.log("change: " + change)
  
  let typeadvantage = typeAdBool;
  
  if ((typeadvantage === false) && (change === 4)){
    mainguy = team[chooser]
    //console.log(mainguy)
  }
  return mainguy
}

function superMoveShit(ifSuperEffective){
  if(ifSuperEffective === true)
    console.log("yay super effective go brrrrr")
}

function lowhpSwitch(team, hpoints){
  //const shitshit = team[0]
  let mainguy = team[0];
  console.log(mainguy)
  let hp = hpoints;
  let chooser = Math.floor(Math.random() * 5); 
  
  let typeadvantage = typeAdBool;
  
  if ((hp<=0.2)){
    mainguy = team[chooser]
  }
  return mainguy
}


const twitchCon = teamForm(alltheshitsever);
console.log(aiSwitch(twitchCon, 0.1))