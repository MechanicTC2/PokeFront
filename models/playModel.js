const pokemon = require('../pokemon');
const pokemon_btype = require('../pokemon_type');
const type_chart = require('../type_chart');

async function calcDamage(id, id2, crit, bpwr, atktype) {
    let type1 = pokemon_btype[id][0];
    let type2 = "";
    let type3 = "";
    console.log(pokemon_btype[id]);
    try {
        type2 = pokemon_btype[id][1];
        type3 = pokemon_btype[id2][1];
    }
    catch (err) {
    }

}

async function move(pokemon1, pokemon2, move1, move2) {
    
}
module.exports = {calcDamage, isEffective};