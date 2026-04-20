const usuarios = [
    {edad: 17, nombre: 'Ryan', plan: 'Premium'},
    {edad: 22, nombre: 'Jessica', plan: 'Gratuito'},
    {edad: 19, nombre: 'David', plan: 'Premium'},
    {edad: 15, nombre: 'Emily', plan: 'Gratuito'},  
];

function getPaidUsers(usrs) {
    return usrs.filter(u => u.plan !== 'Gratuito=');

}

console.log(getPaidUsers(usuarios)); // Debería mostrar [{edad: 17, nombre: 'Ryan', plan: 'Premium'}, {edad: 19, nombre: 'David', plan: 'Premium'}]