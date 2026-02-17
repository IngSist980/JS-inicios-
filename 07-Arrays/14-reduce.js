// const numeros = [1, 2, 3, 4, 5];

// const suma = numeros.reduce ((acc,el)=>{
//     return acc + el; // Suma el acumulador con el elemento actual
// },0); // El segundo argumento (0) es el valor inicial del acumulador

// console.log(suma); // Imprime 15, que es la suma de los números del array

// // Ejemplo con objetos  

const anidados = [[1, 2], 3, [4, 5]];

const plano = anidados.
reduce((acc, el) => acc.concat(el), []); // El segundo argumento ([]) es el valor inicial del acumulador{
     // Concatena el acumulador con el elemento actual
 // El segundo argumento ([]) es el valor inicial del acumulador

console.log(plano); // Imprime [1, 2, 3, 4, 5], que es el array aplanado

