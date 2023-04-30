var express = require('express');
var router = express.Router();
const playModel = require('../models/playModel');
const pokemon = require('../pokemon.json');
const pokemon_btype = require('../pokemon_type.json');

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index', { title: 'PokeFront' })
  console.log(await playModel.calcDamage("charizard", "scyther", 1, 95, "fire"));
});

router.get('/play', function(req, res) {
  res.render('game', { title: "PokeFront Battle V.S. CPU"})
});

const HELP = {
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

function help()
{
    const teamformation = [];
    for(let i = 0; i < 6; i++)
    {
        teamformation[i] = Math.foor(math.random() * 5);
    }
}


module.exports = router;
