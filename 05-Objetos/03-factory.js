
/*let user1 ={
    id:2, 
    email:'chanchito@holamundo.io', 
    name: 'Chanchito',
    activo: false,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
En lugar de todo esto, que hace que nuestro código sea repetitivo, vamos a crear una función:
};*/

function crearUsuario (name, email){
    return {
        email, 
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    
    };

}
let user1 =crearUsuario('Ryan', 'ry@holamundo.io');
let user2 =crearUsuario('Nicolas', 'nico@holamundo.io');

console.log(user1, user2);
