const pokemon = require('../pokemon');
const pokemon_btype = require('../pokemon_type');

async function calcDamage(id, lvl, crit, bpwr, atk, def) {
    let STAB = false;
    let type1 = pokemon_btype[id][0];
    let type2 = "bob";
    console.log(pokemon_btype[id]);
    try {
        type2 = pokemon_btype[id][1];
    }
    catch (err) {
    }

}

module.exports = {calcDamage};