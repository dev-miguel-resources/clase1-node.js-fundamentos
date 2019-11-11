/**
 *  Async Await
 */


// let getNombre = async() => {

//     return 'Miguel';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve('Miguel');

        }, 3000);

    });
}


let saludo = async() => {

    let nombre = await getNombre(); //espera la funcion get nombre


    return `Hola ${ nombre }`;

}


saludo().then(mensaje => {
    console.log(mensaje);
})