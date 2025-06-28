function similares(obj1, obj2) {
    let distintos = false;
    for (let llave in obj1) {
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
            break;
        }
    }
    return !distintos;  
}

let resultado = similares(
    { id: 1, name: 'Ryan' },
    { id: 1, name: 'Wen' }
);

console.log(resultado); 
