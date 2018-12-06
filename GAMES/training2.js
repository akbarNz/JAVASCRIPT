// function surfaceRectagle() {
//     var x = document.getElementById("myNumber").value;
//     var y = document.getElementById("Number").value;
//     var z = parseInt(x) * parseInt(y);
//     alert("surface: " + z);
// }

// function perimetreRectagle() {
//     var a = document.getElementById("longeur").value;
//     var b = document.getElementById("largeur").value;
//     var c = (parseInt(a) + parseInt(b)) * 2;
//     alert("perimetre: " + c);
// }
// function rayon() {
//     let r = document.getElementById("rayon").value;
//     let r2 = Math.pow(r, 2);
//     let pi = Math.PI;
//     let nombre = r2 * pi;
//     alert("la surface du cercle: " + nombre);

// }

// let e = 3;
// let f = 2;

// function triple(d, e, f) {
//     d = document.getElementById("d").value;
//  let resultat = d * e;
//  let resultat1 = d * f;
//  alert("triple: " + resultat);
//  alert("triple: " + resultat1);
// }

// let tab = [-2, 1, 4];

// function additionne(x) {
//     for (i = 0; i < tab.length; i++) {
//         x = document.getElementById("x").value;
//         let add1 = tab[i] + parseInt(x) + 2;
//         alert(add1);
//     }
// }
// let b = 2;
// let a;
// // a=b++;
// // a=++b;
// //a=b--;
// // a=--b;
// a+=b++;
// // a=1; a+=++b;
// a=1; a-=b++;
// // a=1; a-=++b;
// // a=1; a+=b--;
// // a=1; a+=--b;
// alert(`valeur de a: ${a} \n valeur de b:  ${b}`);


// let tab = [-2, 1, 4];
// let nombre = 0;
// function soustrait(x) {
//     x = document.getElementById("x").value;
//     nombre = parseInt(x) - 2;
//     if (x >= 0) {
//         alert(nombre);
//     } else {
//         alert("Nombre négatif!");
//     }
// }
// function affiche() {
//     let resultat = 0;
//     soustrait();
//     for (i=0; i<tab.length; i++) {
//         resultat = nombre + tab[i];
//         alert(resultat);
//     }
// }

// function faireChoix() {
//     let choice = prompt("entrer un chifre entre 1, 2 ou 3"); 
//     while(isNaN(choice) == true || choice < 1 || choice > 3) {
//         alert("entrer un chifre entre 1, 2 ou 3");
//         choice = prompt("entrer un chifre entre 1, 2 ou 3");
//     }
//     if (choice == 1) {
//         alert("1. Merci");
//     }
//     else if(choice == 2) {
//         alert("2. Bonjour");
//     }
//     else if(choice == 3) {
//         alert("3. Au revoir");
//     }
// }

// function jourDeLaSemaine() {
//     let days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
//     let week = new Date();
//     console.log(days[week.getDay()]);
// }
// function testeWhile() {
//     let ask = prompt("entrer un mot contenant la lettre p :");
//     while(isNaN(ask) == false || ask.includes("p") == false) {
//         alert("incorect veillez reesaiyer");
//         ask = prompt("entrer un mot contenant la lettre p :");
//     }
// }

// function laSomme() {
// let nombre1 = parseInt(prompt("entrer un nombre"));
// let nombre2 = parseInt(prompt("entrer un nombre"));
// let nombre3 = parseInt(prompt("entrer un nombre"));
// let sum = nombre1 + nombre2 + nombre3;
// alert(`nombre1: ${nombre1} \n nombre2: ${nombre2} \n nombre3: ${nombre3} \n somme: ${sum}`);

// }
// let tot = 0;
// let tab = [];


// function calculMoyenne() {
//     let ask = Number(prompt("entrer un nombrer entier"));
    
//     while(Number.isInteger(ask) == false || isNaN(ask) == true) {
//         alert("entrer un nombre entier svp!")
//         ask = Number(prompt("entrer un nombrer entier"));
//         // parseint prend que la parti entier ce pour ca  qu'ici j'utilise Number 
//     }
//     while (ask >= 0) {
//         tab.push(ask);
//         console.log(tab);
//         ask = Number(prompt("entrer un nombrer entier"));
        
//     }
//     if (ask < 0) {
//         function getSum(tot, ask) {
//             return tot + ask;
//         }
//         alert(tab.reduce(getSum) / tab.length);
//     }



// }
// let valeur;
// function conversionTemperature() {
//     let askNumber = Number(prompt("entrer un chifre entre 0 et 6"));
//     while(isNaN(askNumber) == true || askNumber < 0 || askNumber > 6) {
//         alert(" error: \n entrer un chifre entre 0 et 6 svp ");
//         askNumber = Number(prompt("entrer un chifre entre 0 et 6"));
//     }
//     switch (askNumber) {
//         case 1:
//             valeur = prompt("enter la °t à convertir");
//             let ctof = ([valeur] * 9/5) + 32;
//             alert(`${valeur} °C ca donne ${ctof} °F`);
//             break;
//         case 2:
//             valeur = prompt("enter la °t à convertir");
//             let ctok = [valeur] + 273.15;
//             alert(`${valeur} °C ca donne ${ctok} K`);
//         break;
//         case 3:
//             valeur = prompt("enter la °t à convertir");
//             let ftoc = ([valeur] - 32) / (9/5);
//             alert(`${valeur} °F ca donne ${ctof} °C`);
//         break;
//         case 4:
//             valeur = prompt("enter la °t à convertir");
//             let ftok = (([valeur] - 32) * (5/9)) + 273.15;
//             alert(`${valeur} °F ca donne ${ftok} K`)
//         break;
//         case 5:
//             valeur = prompt("enter la °t à convertir");
//             let ktoc = [valeur] - 273.15;
//             alert(`${valeur} K ca donne ${ktoc} °C`)
//         break;
//         case 6:
//             valeur = prompt("enter la °t à convertir");
//             let ktof = ([valeur] * 9/5) - 459.67;
//             alert(`${valeur} K ca donne ${ktof} °F`)
//         break;
//         case 0:
//             askNumber = Number(prompt("entrer un chifre entre 0 et 6"));
//         break;
//     }
// }
let imc;
function calculIMC() {
    let weight;
    let taille;
    while (isNaN(weight) == true || isNaN(taille) == true) {
        weight = Number(prompt("entrer le poids en kg"));
        taille = Number.parseFloat(prompt("entrer la taille en mettre")).toFixed(2);   
    }
    imc = weight / Math.pow(taille, 2);
    if (imc < 16.5) {
        alert("dénutrition ou famine");
    }
    else if (imc >= 16.5 || imc <= 18.5) {
        alert("maigreur")
    }
    else if (imc >= 18.5 || imc <= 25) {
        alert("corpulence normal")
    }
    else if (imc >= 25 || imc <= 30) {
        alert("surpoids")
    }
    else if (imc >= 30 || imc <= 35) {
        alert("obesité modérée")
    }
    else if (imc >= 35 || imc <= 40) {
        alert("obesité morbide")
    }
}


























