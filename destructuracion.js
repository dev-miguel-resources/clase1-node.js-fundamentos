let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder}`
    }
};

// let nombre = deadpool.nombre; //esto sería la forma normal
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

let { nombre: primerNombre, apellido, poder } = deadpool; //capturo cada atributo y con : puedo dar alias

console.log(primerNombre, apellido, poder);