// playerShip = USS Schwarzenegger
// enemyShip = Alien Ship
// should have hull, firepower, and accuracy as individual attributes
//
// actors
class actorShip{
    constructor(hull, firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    playerAttack (playerShip,enemyShip) {
        attackChance = Math.random();
        attackHit = playerShip.accuracy>=attackChance ? true : false;
        if(attackHit){
            enemyShip.hull-playerShip.firepower;
            enemyShip.hull=0 ? console.log("You defeated the enemy!") : console.log(`You struck the enemy! ${enemyShip.hull} HP left.`)
        }
    }
    enemyAttack (playerShip,enemyShip) {
        attackChance = Math.random();
        attackHit = enemyShip.accuracy>=attackChance ? true : false;
        if(attackHit){
            playerShip.hull-enemyShip.firepower;
            playerShip.hull=0 ? console.log("Game over!") : console.log(`The enemy landed a hit on you! ${playerShip.hull} HP left.`)
        }
    }
}

class playerShip extends actorShip {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
    }
}
class enemyShip extends actorShip {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
        this.hull = Math.floor((Math.random() * 6) + 3);
        this.firepower = Math.floor((Math.random() * 4) + 2);
        this.accuracy = Math.floor((Math.random() * .8) + .6);
    }
}

// "ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random()` - If the ship's accuracy is `X` - then if the number generated from `Math.random()` is less than or equal to `X` then the attack will be successful. If the value is greater than `X` then the attack has missed."
//psuedocode
//check if attack will land with the attacker's accuracy
//if attack lands, reduce defenders HP by firepower 
//else, end the turn 
//
//
