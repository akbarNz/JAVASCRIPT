let array = [];
let array2 = [];
let keep = true;
let faux = 0;
let word = prompt("entrer un mot").toUpperCase();
array = word.split("");

function guessLetter(lettre) {
    let letterFound = false;
    for (let index = 0; index < array.length; index++) {
        if (lettre == array[index]) {
            array2[index] = lettre.toUpperCase();
            letterFound = true;
            console.log(array2);
        }

    }
    if (letterFound == false) {
        faux++;
        console.log(faux);
    }
}
while (keep == true) {
    lettre = prompt("entrez une lettre").toUpperCase();
    guessLetter(lettre);
    if (array.toString() == array2.toString()) {
        keep = false;
    }
}