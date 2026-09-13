const usuarios = [
    {edad: 17, nombre: 'Ryan', plan: 'Premium'},
    {edad: 22, nombre: 'Jessica', plan: 'Gratuito'},
    {edad: 19, nombre: 'David', plan: 'Premium'},
    {edad: 15, nombre: 'Emily', plan: 'Gold'},  
    {edad: 45, nombre: 'Ana', plan: 'Gold'},  
    {edad: 60, nombre: 'Carlos', plan: 'Gold'},  
];


//Esta función existe en Object.groupBy. 
function grupBy(arr, prop){

    return arr.reduce ((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);

        return acc;
    }, {});

}

const grouped = grupBy(usuarios, 'plan');
    console.log(grouped);
