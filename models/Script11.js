// JavaScript source code
//{{strong types}{weak types}}
const normal {{},{rock,ghost,steel}}
const fire = {{grass,ice,bug,steel},{fire,water,rock,dragon}}
const water = {{fire,ground,rock},{water,grass,dragon}}
const grass = {{water,ground,rock},{fire,grass,poison,flying,bug,dragon,steel}}
const electric = {{water,flying},{grass,electric,dragon}}
const ice = {{grass,ground,flying,dragon},{fire,water,ice,steel}}
const fighting = {{normal,ice,rock,dark,steel},{poison,flying,psychic,bug,ghost,fairy}}
const poison = {{grass,fairy},{poison,ground,rock,ghost,steel}}
const ground = {{fire,electric,poison,rock,steel},{grass,flying,bug}}
const flying = {{grass,fighting,bug},{electric,rock,steel}}
const psychic = {{fighting,poison},{psychic,dark,steel}}
const bug = {{grass,psychic,dark},{fire,fighting,poison,flying,ghost,steel,fairy}}
const rock = {{fire,ice,flying,bug},{fighting,ground,steel}}
const ghost = {{psychic,ghost},{normal,dark}}
const dragon = {{dragon},{steel,fairy}}

const constructor(atktype,deftype){
	var t = null; 
	for(int x = 0; x<atktype.length; x++){
		t = atktype[x]
		if(t = deftype){
			return yes
		}
			
	}
	for
}

