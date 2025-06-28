function Usuario(name) {
    this.id = Math.random();
    this.name = name;

}
let user = new Usuario('Ryan');
let user2 = new Usuario('Bodoques');
console.log(user, user2);