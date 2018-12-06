//exercice 1 manipulation de classes dom


console.log(document.body);
 console.log(document.getElementsByClassName("bg-aqua")[0]);
// let bgolive = document.getElementsByClassName("bg-olive");
// console.log(bgolive);
// // let garbage = bgolive.removeChild(bgaqua);
// bgaqua.classList.remove("bg-aqua");
// bgolive.classList.add("bg-olive");
document.getElementsByClassName("bg-aqua")[0].classList.replace("bg-aqua", "bg-olive");
// document.getElementsByTagName("body")[0].classList.add("bg-olive");
// document.getElementsByTagName("body")[0].classList.remove("bg-aqua");
console.log(document.getElementsByTagName("p")[0]);
document.getElementsByTagName("p")[0].classList.remove("bg-lime", "gray");
document.getElementsByTagName("p")[0].classList.add("aqua");
console.log(document.querySelectorAll("bg-silver"));
console.log(document.getElementsByClassName("bg-silver")[0].classList.replace("bg-silver", "bg-teal"));
document.querySelectorAll("body")[0].classList.remove("bg-silver");
console.log(document.getElementsByTagName("blockquote"));
document.getElementsByTagName("blockquote")[0].classList.add("bg-white");


// selecteurs css
// exercice 2


console.log(document.querySelector("#my-table"));
document.querySelector("#my-table").classList.add("bg-purple");
console.log(document.querySelectorAll("p"));
for (i=0; i < document.querySelectorAll("p").length; i++) {
    document.querySelectorAll("p")[i].classList.add("shadow");   
}


// exercice 3


console.log(document.getElementsByTagName("pre"));
let newColor = document.getElementsByTagName("pre")[0];
newColor.style.color = "black";
// document.getElementsByTagName("pre")[0].style.color = "pink";
document.getElementsByTagName("pre")[0].style.background = "white";
document.getElementsByTagName("pre")[0].style.borderTop = "3px solid red";
document.getElementsByTagName("pre")[0].style.borderBottom = "3px solid red";

console.log(document.getElementsByTagName("h3"));
document.getElementsByTagName("h3")[0].innerHTML = "<em>Italic title ! yeah !</em>";
console.log(document.getElementsByTagName("h2"));
document.getElementsByTagName("h2")[0].innerHTML = "<strong>HTML doesn't work !</strong>;"


// exercice 4 creation d'elements

let list = document.getElementsByTagName("ul")[0];
let newElement = document.createElement("li");
newElement.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
list.appendChild(newElement);
let link = newElement.getElementsByTagName("a")[0];
link.style.color = "red";


// exercice 5 

let ordlist = document.getElementsByTagName("ol")[0];
console.log(ordlist);
while (ordlist.firstChild) {
     ordlist.removeChild(ordlist.firstChild);
}
let newArray = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (let i = 0; i < newArray.length; i++) {
    let newLi =  document.createElement("li");
    newLi.innerHTML=newArray[i];  
    ordlist.appendChild(newLi);
}







