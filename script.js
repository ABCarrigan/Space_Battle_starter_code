// playerShip = USS Schwarzenegger
// enemyShip = Alien Ship
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
        // hull, firepower, and accuracy are randomly generated here
        this.hull = Math.floor((Math.random() * 6) + 3);
        this.firepower = Math.floor((Math.random() * 4) + 2);
        this.accuracy = Math.floor((Math.random() * .8) + .6);
    }
}

