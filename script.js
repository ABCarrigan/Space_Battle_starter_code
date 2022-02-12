// playerShip = USS Schwarzenegger
// enemyShip = Alien Ship
// actors
const attackButton = document.getElementById('playerAttack');
const retreatButton = document.getElementById('playerRetreat');
class actorShip{
    constructor(hull,firepower,accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    playerAttack (playerShip,enemyShip) {
        attackChance = Math.random();
        attackHit = playerShip.accuracy>=attackChance ? true : false;
        if(attackHit){
            enemyShip.hull-playerShip.firepower;
            enemyShip.hull=0 ? alert("You defeated the enemy!") :alert(`You struck the enemy! ${enemyShip.hull} HP left.`)
        } else {
            alert("You missed your target!")
        }
        
    }
    enemyAttack (playerShip,enemyShip) {
        attackChance = Math.random();
        attackHit = enemyShip.accuracy>=attackChance ? true : false;
        if(attackHit(true)){
            playerShip.hull-enemyShip.firepower;
            
            playerShip.hull=0 ? alert("Game over!") : alert(`The enemy landed a hit on you! ${playerShip.hull} HP left.`)
        }
        if(attackHit(false)) {
            return alert("You missed your target!")
        }
    }
}

//button stuff
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
attackButton.addEventListener('click', {
    handleEvent: function (event) {
        alert(aShip.playerAttack(pShip,eShip))
    }
    });
retreatButton.addEventListener('click', {
    handleEvent: function (event) {
        pShip = new playerShip(20,5,.7)
        eShip = new enemyShip
        aShip = new actorShip
        alert("Game over!")
    }
    });