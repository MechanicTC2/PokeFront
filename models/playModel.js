const pokemon = require('../pokemon');
const pokemon_btype = require('../pokemon_type');

async function calcDamage(id, lvl, crit, bpwr, def, atktype) {
    let type1 = pokemon_btype[id][0];
    let type2 = "bob";
    let STAB = 1;
    console.log(pokemon_btype[id]);
    try {
        type2 = pokemon_btype[id][1];
    }
    catch (err) {
    }
    if (type1 == atktype || type2 == atktype) {
        STAB = 1.5;
    }
    let dmg = (((2 * lvl * crit) / 5) + 2) * bpwr * (pokemon[id].special_defense / def);
    dmg /= 50;
    dmg += 2;
    dmg *= STAB * 1 * 1 * ((Math.random() * (255 - 217) + 217) / 255);
    return Math.floor(dmg);
}

module.exports = {calcDamage};