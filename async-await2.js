let empleados = [{
    id: 1,
    nombre: 'Miguel'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${ id }`)
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    } else {
        return {
            nombre: empleado.nombre, //si encuentra un salario para ese usuario muestra su info
            salario: salarioDB.salario,
            id: empleado.id
        };
    }

}



let getInformacion = async(id) => {

    let empleado = await getEmpleado(id); //espero ambas funciones
    let resp = await getSalario(empleado);

    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;
}


getInformacion(1)
    .then(mensaje => console.log(mensaje)) //si lo hace bien
    .catch(err => console.log(err)); //sino muestra un error