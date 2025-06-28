function Usuario() {
    let id = 1; 
    this.name = 'Ryan';

    let log = function(){
        console.log('loggin...');
    }

    

    this.guardar = function () {
        console.log('guardando...');
    }
}


const usuario = new Usuario();
usuario.guardar();

