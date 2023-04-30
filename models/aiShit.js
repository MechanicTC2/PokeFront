const alltheshitsever = require('../pokemon_type.json');

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
