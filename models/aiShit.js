const alltheshitsever = {
    "venusaur": ["grass", "poison"],
    "charizard": ["fire", "flying"],
    "blastoise": ["water"],
    "butterfree": ["bug", "flying"],
    "beedrill": ["bug", "poison"],
    "raticate": ["normal"],
    "fearow": ["normal", "flying"],
    "pidgeot": ["normal", "flying"],
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

async function help() {
    let teamformation = [];
    let shitsotp = [];
    const sotp = Object.keys(alltheshitsever)
    for(let i = 0; i<5; i++){
      shitsotp[i] = sotp[Math.floor(Math.random() * 5)]
    }
    let mainguy = shitsotp[0];
    console.log(shitsotp)
    
}

help();
