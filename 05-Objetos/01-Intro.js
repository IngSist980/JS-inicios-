/* Variables de antes: 
let email = 'ryan@holamundo.io';
let name = 'Ryan';
let direccion = {
    calle: 'Cedros', 
    numero: 400, 
};*/
/**
 * Lo mismo pero Objeto: cuando se puede relacionar información que es de
 * una misma clase; programación orientada a objetos.POO. 
 */
let user= {
    email: 'ryan@holamundo.io',
    name: 'Ryan',
    direccion: {
        calle: 'Cedros',
        numero: 400,
    },
    activo: true,
    recuperarClave: function (){
        console.log(this.recuperarClave);
    },
};