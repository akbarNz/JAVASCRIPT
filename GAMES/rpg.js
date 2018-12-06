class Boxer {
    constructor(name, coupNormal, jab, cross, crochet, uppercut) {
        this.name = name;
        this.life = 100;
        this.level = 0;
        this.exp = 0;
        this.basicdefence = Math.floor(Math.random() * 20) + 1;
        this.coupNormal = coupNormal;
        this.jab = jab;
        this.cross = cross;
        this.crochet = crochet;
        this.uppercut = uppercut;
    }
    domageSubis(enemie, realDOmage) {
        if (this.life > 0) {
            realDOmage = this.basicdefence - enemie.coupNormal.dommage;
            this.life -= Math.abs(realDOmage);
            //enemie.basicattack important car si tu mets this.basicattack celui qui attaque va s'attaquer tt seul
        }
        enemie.exp += Math.abs(realDOmage) * Math.floor(Math.random() * 10) + 1;
        this.exp += Math.abs(realDOmage) * Math.floor(Math.random() * 5) + 1;
        if (enemie.exp > 500 && this.life > 0) {
            this.life -= enemie.jab.dommage;
            //quand on atteint 100exp tu utuliser jab  
        }
        enemie.exp += enemie.jab.dommage * Math.floor(Math.random() * 10) + 1;
        this.exp += enemie.jab.dommage * Math.floor(Math.random() * 5) + 1;
        if (enemie.exp > 1000 && this.life > 0) {
            this.life -= enemie.cross.dommage;
        }
        enemie.exp += enemie.cross.dommage * Math.floor(Math.random() * 10) + 1;
        this.exp += enemie.cross.dommage * Math.floor(Math.random() * 5) + 1;
        if (enemie.exp > 1500 && this.life > 0) {
            this.life -= enemie.crochet.dommage;   
        }
        enemie.exp += enemie.crochet.dommage * Math.floor(Math.random() * 10) + 1;
        this.exp += enemie.crochet.dommage * Math.floor(Math.random() * 5) + 1;
        if (enemie.exp > 2000 && this.life > 0) {
            this.life -= enemie.uppercut.dommage;   
        }
        enemie.exp += enemie.uppercut.dommage * Math.floor(Math.random() * 10) + 1;
        this.exp += enemie.uppercut.dommage * Math.floor(Math.random() * 5) + 1;
    }
    attack(enemy) {
        enemy.domageSubis(this);
    }
}
class Coup {
    constructor(nom, dommage) {
        this.nom = nom;
        this.dommage = dommage;
    }
}

class Jab extends Coup {
    constructor(nom, dommage) {
        super(nom, dommage);
        this.dommage = 20;
    }
}
class Cross extends Coup {
    constructor(nom, dommage) {
        super(nom, dommage);
        this.dommage = 25;
    }
}
class Crochet extends Coup {
    constructor(nom, dommage) {
        super(nom, dommage);
        this.dommage = 33;
    }
}
class Uppercut extends Coup {
    constructor(nom, dommage) {
        super(nom, dommage);
        this.dommage = 50;
    }
}

let normal1 = new Coup("basicattack", Math.floor(Math.random() * 10) + 1);
let normal2 = new Coup("basicattack2", Math.floor(Math.random() * 10) + 1);
let jab = new Jab("jab");
let cross = new Cross("cross");
let crochet = new Crochet("crochet");
let uppercut = new Uppercut("uppercut");

let floyd = new Boxer("floyd", normal1, jab, cross, crochet, uppercut);
let mike = new Boxer("mike", normal2, jab, cross, crochet, uppercut);
console.log(floyd);
console.log(mike);
floyd.attack(mike);
console.log(mike);
console.log(floyd);
floyd.attack(mike);
console.log(mike);
console.log(floyd);
floyd.attack(mike);
console.log(mike);
console.log(floyd);