const usuarios = [
    { edad: 17, Nombre: 'Ryan ' },
    { edad: 18, Nombre: 'Juan ' },
    { edad: 19, Nombre: 'Carlos ' },
    { edad: 22, Nombre: 'Lana ' },
    { edad: 25, Nombre: ' Sofia ' },
];
const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18);
const menoresDeEdad = usuarios.filter(usuario => usuario.edad < 18);
console.log(mayoresDeEdad);
console.log(menoresDeEdad);