let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },

];
/* let todosActivos = usuarios.every(u => {
    console.log('todosActivos', u.id);
    return u.activo;

})
console.log(todosActivos); // false
 */
let algunoActivo =usuarios.some(u => {
    console.log('algunActivo', u.id);
    return u.activo;    
}); // true

console.log(algunoActivo); // true