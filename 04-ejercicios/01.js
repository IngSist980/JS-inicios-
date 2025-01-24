//Cual es el mayor: 
function cualEsMayor (a, b ) {
  //La otra forma de hacerlo, operador ternario: 
  return (a > b) ? a : b;
  //Una forma de hacerlo: 
    /* if (a > b){
        return a;
    }else{
        return b;
    } */
   
}

let mayor = cualEsMayor (10, 5 );

console.log(mayor);