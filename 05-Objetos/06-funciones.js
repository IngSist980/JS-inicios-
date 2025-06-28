function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name); 
console.log(Usuario.length);  

const U = Usuario;
let user = new U('Ryan');
console.log(user);  

function of(Fn, ar) {
    return new Fn(ar);  
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);  

function returned(){
    return function(){
        console.log('Hola Mundo');

    }
}
let saludo = returned();
saludo();
