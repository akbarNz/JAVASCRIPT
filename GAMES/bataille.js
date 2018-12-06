let carte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let player1 = [];
let player2 = [];

let cartPos1 = Math.floor(Math.random()*carte.length);
let carte1 = carte[cartPos1];
player1.push(carte1);
carte.splice(cartPos1, 1);
let cartPos2 = Math.floor(Math.random()*carte.length);
let carte2 = carte[cartPos2];
player2.push(carte2);
carte.splice(cartPos2, 1);
let cartPos3 = Math.floor(Math.random()*carte.length);
let carte3 = carte[cartPos3];
player1.push(carte3);
carte.splice(cartPos3, 1);
let cartPos4 = Math.floor(Math.random()*carte.length);
let carte4 = carte[cartPos4];
player2.push(carte4);
carte.splice(cartPos4, 1);
let cartPos5 = Math.floor(Math.random()*carte.length);
let carte5 = carte[cartPos5];
player1.push(carte5);
carte.splice(cartPos5, 1);
let cartPos6 = Math.floor(Math.random()*carte.length);
let carte6 = carte[cartPos6];
player2.push(carte6);
carte.splice(cartPos6, 1);
let cartPos7 = Math.floor(Math.random()*carte.length);
let carte7 = carte[cartPos7];
player1.push(carte7);
carte.splice(cartPos7, 1);
let cartPos8 = Math.floor(Math.random()*carte.length);
let carte8 = carte[cartPos8];
player2.push(carte8);
carte.splice(cartPos8, 1);
let cartPos9 = Math.floor(Math.random()*carte.length);
let carte9 = carte[cartPos9];
player1.push(carte9);
carte.splice(cartPos9, 1);
let cartPos10 = Math.floor(Math.random()*carte.length);
let carte10 = carte[cartPos10];
player2.push(carte10);
carte.splice(cartPos10, 1);
console.log(player1);
console.log(player2);
console.log(carte);


// lancer la partie 
// lancer une carte

// console.log(player1[0]);
// console.log(player1[1]);
// console.log(player1[2]);
// console.log(player1[3]);
// console.log(player1[4]);


// function lancerCarte1() {
//     for (let i = 0; i < player1.length; i++) {
//         console.log(player1[i]);
        
//     }
// }
// function lancerCarte2() {
//     for (let i = 0; i < player2.length; i++) {
//         console.log(player2[i]);
        
//     }
// }
let a;
let b;
let score1 = 0;
let score2 = 0;
let i = 0;
let play1 = false;
let play2 = false;

function lancerCarte1() {
    if (i < player1.length) {
        a = player1[i];
       console.log(a);
    }
    parseInt(document.getElementById("affichecarte1").innerHTML = a);
    play1 = true;
}
let y = 0;
function lancerCarte2() {
    if (y < player2.length) {
        b = player2[y];
       console.log(b);
    }
    parseInt(document.getElementById("affichecarte2").innerHTML = b);
    play2 = true;
}
function valider() {
    if (play1 == false || play2 == false) {
        alert("entrer une carte!");
        return
    }
    if (a > b) {
        score1++;
        console.log( "player1 a " + score1 + " points");
    }
    else {
        score2++;
        console.log("player2 a " + score2 + " points");
    }
    player1.shift();
    player2.shift();
    play1 = false;
    play2 = false;
    if (player1.length == 0 && player2.length == 0 && score1 > score2) {
        alert("player1 a gagné");
    }
    else if (player1.length == 0 && player2.length == 0) {
        alert("player2 a gagné");
    }
}
function reload() {
    location.reload();
}
//  retirer les carte du jeu et une fois qu'il n y a plus de carte dans les tableau des deux player stopper le jeu



















