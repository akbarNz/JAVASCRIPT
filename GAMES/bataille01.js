let carte = [];
let player1 = [];
let player2 = [];

// for (i=0; i<9; i++) {
//     carte = Math.floor(Math.random() * 10) + 1;
//     console.log(carte);
// }
let tableau = [];
let maxCard = 52;

while (tableau.length < maxCard) {
    let randomValue = Math.floor(Math.random() * maxCard) + 1;
    if (tableau.indexOf(randomValue) == -1) {
        tableau.push(randomValue)  
    }
}

console.log(tableau);