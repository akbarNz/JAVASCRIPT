// class Personne {
//     constructor(age, nom, prenom) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//     }
//     monage() {
//         this.age = 12;
//         console.log(this.age);
//     }
// }
// // let Akbar = new Personne (20, "nzeyimana", "akbar");
// // console.log(Akbar);
// let monAge = new Personne ();
// monAge.monage(); 
// var eleves = [{
//     nom: "akbar",
//     moyenne: 20,
// }, {
//     nom: "boo",
//     moyenne: 2,  
// }, {
//     nom: "sal",
//     moyenne: 15,
// }];
// for (i=0; i<eleves.length; i++) {
//     let eleve = eleves[i];
//     // console.log(eleve);
//     if (eleve.moyenne < 20) {
//         console.log(eleve.nom + " est en dessous de la moyenne");
//     } else {
//         console.log()
//     }    
// }
class Personnage {
    constructor(nom, niveau, vie, arme) {
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
        this.arme = arme;
    }
    recoisDommage(dommage) {
        if (this.vie > 0) {
            this.vie -= dommage;
        } else {
            console.log(this.nom + " est deja mort");
        }
    }
    attaque(enemie) {
        enemie.recoisDommage(this.arme.dommage)
    }

}
class Arme {
    constructor(nom, dommage) {
        this.nom = nom;
        this.dommage = dommage;
    }
}
class ArmeSpecial extends Arme {
    constructor(nom,finish) {
        super(nom); 
        // mot clé super va appeler le constructor parents il prend donc le mme parametre que ce dernier
        this.dommage = finish;
        // je peux modifier ce qui ce trouve dans le constructor parent        
    }
}
let killer = new ArmeSpecial("attomique", 100);
// le code doit fonctionner mais il faudra remplace dommage par finish quand c l'ArmeSpecial qui attaque
let arme = new Arme("kalashnikov", 35);
let enemieArme = new Arme("fusil à pompe", 30);
let akbar = new Personnage("akbar", 20, 100, killer,);
let imbecile = new Personnage("imbecile", 20, 100, enemieArme);
console.log(akbar);
akbar.attaque(imbecile);
console.log(imbecile);





// nouveau syntax


// spread exemple fusionner deux tableau ou objet et chaine de caracteres
// let tab1 = [1, 2];
// let tab2 = [3, 4, ...tab1];
// console.log(tab2);
// on peut aussi utuliser ca pour aller a la ligne
//console.log(´blalalaalaalal
// +this.qlqchose´)
// ca va directement a la ligne


//console.log("blalalaalaalal" +this.qlqchose = ${this.qlqchose})

// let perso = ["a", "b"];
// pour verifier si a se trouve dans le tableau on utulise la methode includes()
// console.log(perso.includes("a"));
// true