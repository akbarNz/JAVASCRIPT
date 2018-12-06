// exminer l'objet document
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// if i want to change the title see below
// document.title = "akbar is learning dom";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// all nous donne un tableau de tout mon html
// dans ce cas si 
// console.log(document.all);
// en precisant l'index il va chercher directement
// l'element se trouvant a cette position 
// console.log(document.all[14]);
// on peut aussi modiffier cette ellement directement
// mais ce pas la bonne methode car apres si j'ecris 
// une ligne au dessus de mon index 14
// j'aurai une nouvelle ligne 14 et mon 14 initial 
// deviendra 15
// document.all[14].textContent = "hello";

// tu peut select aussi forms , links, images ...

// SELECTORS

//getElementById

// console.log(document.getElementById("the name of the id"));
// you can also declare it like a variable
// var nameTitle = document.getElementById("title");
// console.log(nameTitle);

// how to change the text 

// document.getElementById("title").textContent = "hello";
// more easier for just to use the name of the variable
// nameTitle.textContent = "hello bonjour I'm learning dom";
// on peut aussi utiliser .innerText pour changer le text 
// la difference entre les deux inner fait attention au style
// on peut aussi utliser innerHTML pour par exemple 
// mettre un h3 dans h1 sans pour autant modifier
// le h1
// nameTitle.innerHTML = "<h3>salut salut</h3>";
// bizzarement ca a modifier mon text ici bref

// we can also change the css 

// for exemple 

// nameTitle.style.border = "solid 3px black";

// deuxieme selector
// getElementsByclassName

// let listItem = document.getElementsByClassName("list");
// console.log(listItem);

//je ne sais pas pq la longueur de ma list est de 0
//a voir plus tard du coup je peux pas select un element par son index

// console.log(listItem[2]);
// listItem[2].textContent = "boooom yeaaaaah";

// le code au en haut doit marcher mais il a decider 
// de me faire chier

// on peut aussi changer le style c'est la meme chose qu'au dessus
// on peut faire aussi de loop 

// for (let i = 0; i < array.length; i++) {
//     listItem[i].style.background-color = "grey";
    
// }
// ca ne marche pas non plus je ne sais pas pour quoi 
//mais ca marche dans le tuto c'etait juste une exemple 
// pour montrer qu on peut faire de loop je supose
// qu'on peut aussi faire de fonction, object, etc


// getElementsByTagName

// let li = document.getElementsByClassName("li");
// console.log(li);



// la difference ce qu'il va attraper tout le tag "li"
// mais si non on peut faire la meme chose pour modifier...


// QUERYSELECTOR
// tu peut l'utiliser que pour un item
// pour l'utiliser pour plusieur items on un utilisera queryselector all

// let querySelector = document.querySelector("tag", "class", "style//.container// ex", "id");
// you can grab anything you want with query

// let header = document.querySelector("#title");
// header.style.background = "grey";

// let input = document.querySelector("input");
// input.value = "hello word";
// on utilse .value pcq c'est un input 

// queryselector all

// it gonna grab more than one things if i had
// to title for instance

// let tiltles = document.querySelectorAll("the same like queryselector");

// let odd = document.querySelectorAll("li: nth-child(odd)");
 // odd=impair
 //even=meme
// for (i=0; i<odd.length; i++) {
//     odd[i].style.background-color = "grey";
// }
// it might work

