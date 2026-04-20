const usuarios = [
    {edad: 17, nombre: 'Ryan', plan: 'Premium'},
    {edad: 22, nombre: 'Jessica', plan: 'Gratuito'},
    {edad: 19, nombre: 'David', plan: 'Premium'},
    {edad: 15, nombre: 'Emily', plan: 'Gold'},  
];

function cuantosPremium(usrs) {
return usrs.reduce ((acc, el ) => 
   el.plan !== 'Gratuito' ? acc + 1 : acc
, 0);

}









function cuantosMayores(usrs){
    return usrs.reduce ((acc, el ) => 
   el.edad > 17 ? acc + 1 : acc
, 0);


}








console.log(cuantosPremium(usuarios)); // Debería mostrar 2
console.log(cuantosMayores(usuarios)); // Debería mostrar 2  
