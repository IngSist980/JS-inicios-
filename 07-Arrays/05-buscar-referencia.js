const usuario = [
    { id: 1, name: 'Chanchito' },
    { id: 2, name: 'Feliz' },
];

// const resultado = usuario.indexOf({id: 1, name: 'Chanchito'})
const resultado = usuario.findIndex(usuario => 
 usuario.name === 'Chanchito ');
console.log(resultado);