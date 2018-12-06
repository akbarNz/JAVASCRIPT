// let numOne = document.getElementById("num-one");
// let numTwo = document.getElementById("num-two");
// let addSum = document.getElementById("add-sum");
// numOne.addEventListener("blur", function() {
//     alert("hi");
// })
// numOne.addEventListener("input", add);
// numOne.addEventListener("input", add);

// function add() {
//     let one = numOne.value;
//     let two = numTwo.value;
//     addSum.innerHTML = one + two;
// }
// add();
// le "input" prend la valeur en string pour le faire passer en chiffre 
// on utulise parseFloat converti un string en number
// le double || veut dire "or" ou cad quand on entre qu'une seul valeur
// ca nous retourne NaN not a number ici on utulise or pour dire si il y a 
// une seul valeur ou pas la somme est egal à 0

// function add() {
//     let one = parseFloat(numOne.value) || 0;
//     let two = parseFloat(numTwo.value) || 0;
//     addSum.innerHTML = "your sum is : " + (one + two);
// }
// add();
// this was training


//exercice 1 mouse event


var blabla = document.querySelectorAll(".hoverMe");



// for (let index = 0; index < hoverMe.length; index++) {
//     var resultat = hoverMe[index];
//     resultat.addEventListener("mouseover", function (ok) {
//         ok.target.style.visibility = "hidden";
//     })
// }
// function resetDivs() {
//     for (let index = 0; index < hoverMe.length; index++) {
//         var resultat = hoverMe[index];
//         resultat.style.visibility = "visible";
//     }
// }

// document.querySelector('#reset').addEventListener("click", resetDivs);

function disparaitre() {
    this.style.visibility = "hidden";
}
for (i=0; i<blabla.length; i++) {
    blabla[i].addEventListener("mouseover", disparaitre);
}
function apparaitre() {
    for (i=0; i<blabla.length; i++) {
        blabla[i].style.visibility = "visible";
    }   
}
document.querySelector("#reset").addEventListener("click", apparaitre);



function coord(para) {
    document.getElementById("axe-x").innerHTML = para.clientX;
    document.getElementById("axe-y").innerHTML = para.clientY;
}
document.addEventListener("mousemove", coord);




// exercice1 keyboard event
function akbar(event) {
    switch (event.keyCode) {
        case 96:
        document.querySelector("#character").style.backgroundColor = "aqua";
            break;
        case 97:
        document.querySelector("#character").style.backgroundColor = "yellow";
            break;
        case 98:
        document.querySelector("#character").style.backgroundColor = "blue";
            break;
        case 99:
        document.querySelector("#character").style.backgroundColor = "red";
            break;
        case 100: 
        document.querySelector("#character").style.backgroundColor = "grey";
            break;
        case 101:
        document.querySelector("#character").style.backgroundColor = "black";
            break;
        case 102: 
        document.querySelector("#character").style.backgroundColor = "white";
            break;
        case 103: 
        document.querySelector("#character").style.backgroundColor = "brown";
        case 103:
        document.querySelector("#character").style.backgroundColor = "blueviolet";
            break;
        case 104:
        document.querySelector("#character").style.backgroundColor = "chartreuse";
            break;
        case 105:
        document.querySelector("#character").style.backgroundColor = "pink";
        break;
    }
}
document.addEventListener("keydown", akbar);
// keyCode return the numeric of key pressed
// charCode return alphanumeric of key pressed

// exercice 2 


function opacite(event) {
    console.log(event);
    let press = event.keyCode;
    if(press == 38) {
        document.getElementById("up").classList = "highlight";
    }
    else if(press == 40) {
        document.getElementById("down").classList = "highlight";    
    }
    else if(press == 37) {
        document.getElementById("left").classList = "highlight";
    }
    else if(press == 39) {
        document.getElementById("right").classList = "highlight";
    }
}
window.addEventListener("keypress", opacite);
// on peut aussi utuliser event.key dans c cas a la place de 40 on met "ArrowUp"
// pour trouver le nombre corespondant a la touche keycode info dans le navigateur
function nonOPacite(event) {
    let press = event.keyCode;
    if(press == 38) {
        document.getElementById("up").style.opacity = 1;
    }
    else if(press == 40) {
        document.getElementById("down").style.opacity = 1;    
    }
    else if(press == 37) {
        document.getElementById("left").style.opacity = 1;
    }
    else if(press == 39) {
        document.getElementById("right").style.opacity = 1;
    }    
}
window.addEventListener("keyup", nonOPacite);