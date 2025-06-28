let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function () { }

}

function cualesMetodos(obj) {
    for (let llave in obj){
        if(typeof obj [llave] === 'function'){
            console.log(llave);
        }
    }

}
cualesMetodos(objeto)