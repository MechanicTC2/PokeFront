const alltheshisever = require('../pokemon_type.json');

async function help() {
    let teamformation = [];
    let shitsotp = [];
    const sotp = Object.keys(alltheshitsever)
    for(let i = 0; i<5; i++){
      shitsotp[i] = sotp[Math.floor(Math.random() * 5)]
    }
    
    let mainguy = shitsotp[0];
    
    let hp = 0.25;
    let switchchance = 0;
    let typeadvantage = new Boolean(false);
    if((typeadvantage = false)&&(hp<=0.25)&&switchchance(math.random * 5)=0){
        for(let j = 0; j<2; i++)
            {
                 mainguy = shitsotp[Math.floor(Math.random() * 5)]
            }
    }
    console.log(shitsotp)
    
}

help();
