// JavaScript source code
const type = require('../type_chart');


function iseffective(atktype,deftype){
	  for(int i;i<type[atktype].effective.length;i++){
		if (type.[atktype].effective[i] == deftype){
			//checks if super effective
			return 2;
		}
		else if(type.[deftype].resist[i] == atktype){
		return 0.5;
		}
		else{

		}

	  }
	  		return 1;
}