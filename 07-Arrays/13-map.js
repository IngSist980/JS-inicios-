const usuarios = [
    { edad: 17, Nombre: 'Ryan ' },
    { edad: 18, Nombre: 'Juan ' },
    { edad: 19, Nombre: 'Carlos ' },
    { edad: 22, Nombre: 'Lana ' },
    { edad: 25, Nombre: ' Sofia ' },
];



// const lista = usuarios.map(usuario => `<li>${usuario.Nombre}</li>`);
// console.log(lista);
// const html = `<ol>${lista.join('')}</ol>`;
// console.log(html);

const mapped = usuarios.map(usuario => {
    return {
        ...usuario,
        mayorDeEdad: usuario.edad >= 18
    }
});
console.log(mapped);
