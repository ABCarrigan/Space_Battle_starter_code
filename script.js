// PlayerShip = USS Schwarzenegger
// EnemyShip = Alien Ship
// should have hull, firepower, and accuracy as individual attributes
//
// actors
var PlayerShip = ([hull,firepower,accuracy]) => {
    let hull = 20;
    let firepower = 5
    let accuracy = .7
}
var EnemyShip = ([hull,firepower,accuracy]) => {
    // hull - between 3 and 6
    let hull = Math.floor((Math.random() * 6) + 3);
    // firepower - between 2 and 4 
    let firepower = Math.floor((Math.random() * 4) + 2);
    // accuracy - between .6 and .8 
    let accuracy = Math.floor((Math.random() * .8) + .6);
}
// 
// Example use of accuracy to determine a hit: example=>
// 
//  if (Math.random() < alien[0].accuracy) { console.log('You have been hit!'); } ```
// expressions



//