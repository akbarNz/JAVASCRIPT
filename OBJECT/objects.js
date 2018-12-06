// let car = {type:"fiat", model:"500", color:"white"};
// console.log("c'est une " + car.type +" " + car.model + " sa couleur est " + car.color);


// let person = {firstname:"akbar", lastname:"nzeyimana", age:20, fullname: function () {
//     return this.firstname +" " +  this.lastname;
// }};
// console.log(person.fullname());
//au dessus c'est simplement un entrainement via w3school








// let character = {
//     name: " james st-patrick",
//     age: 35,
//     item_to_give: ["familly", "love", "money", "criminal"],

// }
// ca n' affiche que item to give c'est pas l'exercice
// let result = " ";
// for (i = 0; i < character.item_to_give.length; i++) {
//     result += character.item_to_give[i] + " ";
// }
// console.log(result);



// ca affiche tout les element de character
// for (let key in character) {
//     console.log(character[key]);
// }






//exemple de for et in 
// let array = [1, 2, 3];
// for(array in nombre){
//    console.log(nombre);
// }





//avant de recuperer une valeur dans un object on doit d'abord le transformer en array avec Object.keys()
// Object.keys(character);



// function obj() {
//     return Object.keys(character)[Math.floor(Math.random()* Object.keys(character).length)];
// }
// console.log(obj());




//conquentenation
// var test = 'test';
// var test2= 'test2';
// test3 = test + test2


// shop

// let shopArray = [
//     epee = {

//     title:"épée",
//     physic:88,
//     magic:65,
//     minLevel:2,
//     available:true,

//     },

//     hache = {
//         title:"hache",
//         physic:92,
//         magic:75,
//         minLevel:5,
//         available:true,
//     },
//     gun = {
//         title:"gun",
//         physic:80,
//         magic:95,
//         minLevel:10,
//         available:false,  
//     }

// ];
// exemple d'une boucle dans une boucle mais c'etait pas le but de l'exercice
// function afficheObject() {
//     for (i=0; i<shopArray.length; i++) {
//        for (x in shopArray[i]) {
//             console.log(shopArray[i][x]);
//         }
//     }
// }
// afficheObject();
//fin



//exercice ce qu'il fallait faire




// function afficheObject() {
//     for (let i = 0; i < shopArray.length; i++) {
//         const element = shopArray[i].title;
//         console.log(element);
//     }
// }
// afficheObject();
// function afficheAvailable() {
//     for (i = 0; i < shopArray.length; i++) {
//         if (shopArray[i].available == true) {
//             console.log(shopArray[i].title);
//         }
//     }
// }
// afficheAvailable();

// function level10() {
//     for (i=0; i < shopArray.length; i++) {
//         if (shopArray[i].minLevel >= 10) {
//             console.log(shopArray[i].title);
//         }
//     }
// }
// level10();



//personnage



// let mainCharacter = {

//     name: "avatar",
//     level: 7,
//     life: 100,
//     weapon: {
//         weaponName:"Minigun",
//         damage: 65,
//     },

//      attack() {
//          console.log(mainCharacter.name + " attaque avec un " + mainCharacter.weapon.weaponName + " les degats sont " + (mainCharacter.level*mainCharacter.weapon.damage));
//      }

// }
// mainCharacter.attack();
// class Character {
//     constructor(name, level, life, weapon) {
//         this.name = name;
//         this.level = level;
//         this.life = life;
//         this.weapon = weapon;
        
//     }
//     receiveDamage(damage) {
//         if (this.life > 0){
//             this.life -= damage;
//         }
//         else {
//             console.log(this.name + " est déjà mort.");
//         }
        
//     }
//     attack(ennemy) {
//         ennemy.receiveDamage(this.weapon.damage);
//     };
// }

// class Ennemy extends Character {
//     constructor(loot){
//         this.loot = loot;
//         }
// }

// class Weapon {
//     constructor(name, damage){
//         this.name = name;
//         this.damage = damage; 
//     }
// }

// let weapon = new Weapon("Hache", 15);
// let opponentWeapon = new Weapon("Caillou", 5);
// let player = new Character("Ragnar", 12, 100, weapon);
// player.name = "Locki";
// let opponentCharacter = new Character("Mechant", 15, 20, opponentWeapon);
// console.log(opponentCharacter);
// player.attack(opponentCharacter);
// console.log(opponentCharacter);
// player.attack(opponentCharacter);
// console.log(opponentCharacter);
// player.attack(opponentCharacter);
// console.log(opponentCharacter);


