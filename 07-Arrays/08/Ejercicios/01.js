function paraAbsoluto(arr) {
    return arr.map(num => Math.abs(num));

}

const ns = [-2,3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos); // Debería imprimir [2, 3, 5, 15]
