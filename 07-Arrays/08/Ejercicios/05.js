const usuarios = [
    {edad: 17, nombre: 'Ryan', plan: 'Premium'},
    {edad: 22, nombre: 'Jessica', plan: 'Gratuito'},
    {edad: 19, nombre: 'David', plan: 'Premium'},
    {edad: 15, nombre: 'Emily', plan: 'Gold'},  
];

function obtenerMayor(arr){
    let mayor = arr[0];
    for (let usuario of arr) {
        if(mayor.edad < usuario.edad){
            mayor = usuario;
        }
    }
    return mayor;       

}

const mayor= obtenerMayor(usuarios);
console.log(mayor); // {edad: 22, nombre: 'Jessica', plan: 'Gratuito'}
