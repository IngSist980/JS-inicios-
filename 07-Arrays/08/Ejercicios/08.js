const usuarios = [
    { edad: 17, nombre: 'Ryan', plan: 'Premium' },
    { edad: 22, nombre: 'Jessica', plan: 'Gratuito' },
    { edad: 19, nombre: 'David', plan: 'Premium' },
    { edad: 15, nombre: 'Emily', plan: 'Gold' },
    { edad: 45, nombre: 'Ana', plan: 'Gold' },
    { edad: 60, nombre: 'Carlos', plan: 'Gold' },
];

// Obtener los usuarios pagos
const pagos = usuarios.filter(u => u.plan !== 'Gratuito');

// Ordenar de mayor a menor edad
pagos.sort((a, b) => b.edad - a.edad);

// Devolver el nombre del usuario
const lista = pagos.map(u => `<li>${u.nombre}</li>`);

// Crear una plantilla HTML
const html = `
<ul>
    ${lista.join('\n    ')}
</ul>
`;

// Imprimirla en consola
console.log(html);