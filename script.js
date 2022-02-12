// playerShip = USS Schwarzenegger
// enemyShip = Alien Ship
// actors

class actorShip{
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    playerAttack (playerShip,enemyShip) {
        let attackChance = Math.random();
        let attackHit = playerShip.accuracy>=attackChance ? true : false;
        if(attackHit){
            enemyShip.hull-playerShip.firepower;
            enemyShip.hull=0 ? console.log("You defeated the enemy!") : console.log(`You struck the enemy! ${enemyShip.hull} HP left.`)
        } else {
            return console.log("You missed your target!")
        }
        
    }
    enemyAttack (playerShip,enemyShip) {
        let attackChance = Math.random();
        let attackHit = enemyShip.accuracy>=attackChance ? true : false;
        if(attackHit(true)){
            playerShip.hull-enemyShip.firepower;
            playerShip.hull=0 ? console.log("Game over!") : console.log(`The enemy landed a hit on you! ${playerShip.hull} HP left.`)
        }
        if(attackHit(false)) {return console.log("You missed your target!")}
    }
}

//button stuff
// document.getElementById("playerAttack").addEventListener("click", playerAttack);
// 
//
document.getElementById("playerAttack").addEventListener("click", actorShip.playerAttack);


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

let pShip = new playerShip(20,5,.7)
let eShip = new enemyShip
let aShip = new actorShip
document.getElementById("playerAttack").addEventListener("click", console.log(aShip.playerAttack(pShip,eShip)));