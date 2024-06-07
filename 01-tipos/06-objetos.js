//Personajes de TV
let nombre = "Tanjiro";
let anime = "Kimetso No Jaiba";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", 
    anime: "Kimetso No Jaiba", 
    edad: 16, 
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad =13; // si sabemos el nombre de la propiedad a la que vamos a acceder, se utiliza más esta- 

llave = 'edad';
personaje['llave'] = 16; // Sino conocemos el nombre de la propiedad, se utiliza este.

delete personaje.anime;

console.log(personaje);