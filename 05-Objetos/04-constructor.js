/**
 * {(id:1), recuperarClave: function (){} }
 */
function Usuario(){//Funciones 
    this.id= 1;
    this.recuperarClave = function(){ //Métodos
        console.log('recuperando clave...');
    }


}
let usuario = new Usuario();
console.log(usuario);