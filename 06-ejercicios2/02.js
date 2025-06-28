function createUsuario(name){
    return{
        id:Math.random(), 
        name,
    }

}

let user =createUsuario('Ryan');
let user2= createUsuario('Chanchito');
console.log(user, user2);