let obj = {};
let obj2 = new Object();

/** 
 * new Array (); []
 * new String(); "", '', 
 * new Number(); 12
 * new Boolean(); True False
*/
function Usuario(){
    this.name = "Chanchito Feliz";

}
let user=  new Usuario();
console.log(user.constructor);