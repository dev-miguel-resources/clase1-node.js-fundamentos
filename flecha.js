 function sumar(a, b) {
     return a + b;
 }

 let sumar2 = (a, b) => a + b;

 function saludar() {
     return 'Hola Mundo';
 }

 let saludar2 = () => 'Hola mundo';

 function saludar(nombre) {
     return `Hola ${ nombre }`;
 }

 let saludar3 = (nombre) => `Hola ${ nombre }`



 console.log(saludar3('Miguel'));

 console.log(sumar2(10, 20));


 let deadpool = {
     nombre: 'Wade',
     apellido: 'Winston',
     poder: 'Regeneración',
     getNombre() { //no llevan la palabra function
         return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
     }
 };


 console.log(deadpool.getNombre());