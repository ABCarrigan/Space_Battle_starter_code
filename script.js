// playerShip = USS Schwarzenegger
// enemyShip = Alien Ship
// should have hull, firepower, and accuracy as individual attributes
//
// actors
var playerShip = (hull,firepower,accuracy) => {
    // starting attributes
    // hull = 20;
    // firepower = 5;
    // accuracy = .7;
}
var enemyShip = (hull,firepower,accuracy) => {
    // hull - between 3 and 6
    let hull = Math.floor((Math.random() * 6) + 3);
    // firepower - between 2 and 4 
    let firepower = Math.floor((Math.random() * 4) + 2);
    // accuracy - between .6 and .8 
    let accuracy = Math.floor((Math.random() * .8) + .6);
}
// 
//psuedocode
//if attack lands, reduce defenders HP by firepower 
//else, end the turn 
//
// expressions

let actorAttack = (attacker,defender) => {
  defender(hull) - attacker(firepower)  
}

console.log(actorAttack(playerShip(20,5,.7), enemyShip))
//