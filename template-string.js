let nombre = 'The Joker';
let real = 'Joaquin Phoenix';


console.log(nombre + ' ' + real);
console.log(`${ nombre } ${ real }`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${ nombre } ${ real }`;

console.log(nombreCompleto === nombreTemplate); //vemos si es verdad si son iguales

function getNombre() {
    return `${ nombre } ${ real }`;
}

console.log(`El nombre de: ${ getNombre() }`);