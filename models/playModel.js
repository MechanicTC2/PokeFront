const pokemon = require('../pokemon');
const pokemon_btype = require('../pokemon_type');
const type_chart = require('../type_chart');

function calcDamage(id, id2, bpwr, atktype) {
    let type1 = pokemon_btype[id][0];
    let type2 = "";
    let type3 = "";
    let STAB = 1;
    try {
        type2 = pokemon_btype[id][1];
        type3 = pokemon_btype[id2][1];
    }
    catch (err) {
    }
    if (type1 == atktype || type2 == atktype) {
        STAB = 1.5;
    }
    let dmg = (((2 * 100 * 1.95) / 5) + 2) * bpwr * (pokemon[id].special_defense / pokemon[id2].special_defense);
    let weak1 = isEffective(atktype, pokemon_btype[id2][0]);
    let weak2 = isEffective(atktype, type3)
    dmg /= 50;
    dmg += 2;
    dmg *= STAB * weak1 * weak2 * ((Math.random() * (255 - 217) + 217) / 255);
    return Math.floor(dmg);
}

function isEffective(atktype, deftype) {
	for (let i = 0; i < type_chart[atktype].effective.length; i++) {
		if (type_chart[atktype].effective[i] == deftype) {
			//checks if super effective
			return 2.0;
		}
		else if (type_chart[atktype].resist[i] == deftype) {
			return 0.5;
		}
		else {
		}
  	}
	return 1.0;
}
module.exports = {calcDamage, isEffective};