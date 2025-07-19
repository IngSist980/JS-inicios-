const letras = ['a', 'b'];

//Agregar al final del array: 
letras.push('c', 'd');

//Agregar al comienzo
letras.unshift('y', 'z');

letras.splice(3,  0, 1, 2);

console.log(letras);