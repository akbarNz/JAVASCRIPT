// let nom = "Doe";
// let prenom = "john";
// let ville = "New-York";
// alert("nom: " + nom + " \nprenom: " + prenom + "\nville: " + ville);
// alert("bonjour " + prenom);

// let nom = prompt("nom: ");
// let prenom = prompt("prenom: ");
// let ville = prompt("ville: ");


// exercice 4
// function lol() {
// let nom = document.getElementById("nom").value;
// let firstName = document.getElementById("prenom").value;
// let town = document.getElementById("ville").value;
// // console.log(nom);
// // console.log(firstName);
// // console.log(town);
// alert("nom: " + nom + " \nprenom: " + firstName + "\nville: " + town);
// }
// rajouter un timeout
    


// let result;

// function enterNum() {
//     let firstNum = Math.floor(document.getElementById("premier_nombre").value);
//     let secNum = Math.floor(document.getElementById("deuxieme_nombre").value);
//     result = firstNum * secNum;
//     alert(`first number ${firstNum} \n seconde number ${secNum} \n result ${result}`);
// };

// function enterNum() {
//     let firstNum = Math.floor(document.getElementById("premier_nombre").value);
//     let secNum = Math.floor(document.getElementById("deuxieme_nombre").value);
//     result = firstNum % secNum;
//     alert(`first number ${firstNum} \n seconde number ${secNum} \n result ${result}`);
// };




// function myPointure() {
//     let pointure = document.getElementById("pointure").value;
//     let naissance = document.getElementById("annee").value;
//     result = (((((pointure * 2) + 5) * 50) - naissance) + 1766);
//     alert(result);

// }



function myAge() {
    let age = document.getElementById("age").value;
    if (age >= 18) {
        alert("vous etes majeur");
    }
    else if (age < 18) {
        alert("vous etes mineur");
    }
}