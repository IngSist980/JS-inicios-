const saludo = "Hola Mundo";

const despedida = new String("Chao Mundo");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.includes("Mundo"));
let nuevoSaludo = saludo.replace("Mundo", "Ryan");
console.log(nuevoSaludo, saludo);
console.log(saludo.toLowerCase);
console.log(saludo.toUpperCase);

const espacios = "Hola Mundo";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());


