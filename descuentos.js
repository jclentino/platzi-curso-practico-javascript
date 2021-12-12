// objetos - sin validacion 
// let cupones = [
//     {
//         nombre: 'a',
//         descuento: 10
//     },
//     {
//         nombre: 'b',
//         descuento: 15
//     },
//     {
//         nombre: 'c',
//         descuento: 20
//     },
//     {
//         nombre: 'd',
//         descuento: 25
//     },
// ]

// function calcularDescuento (){
//     let precio = parseInt(document.getElementById('precio').value) 
//     let cupon = document.getElementById('cupon').value 

//     for (key of cupones){
//         if (cupon === key.nombre){
//             descuento = key.descuento
//         }
//     }

//     let operacion = precio * (100 - descuento) / 100
//     document.getElementById('boom').innerHTML = `total: ${operacion}`;
// }

// objetos - con validacion 
// let cupones = [
//     {
//         nombre: 'a',
//         descuento: 10
//     },
//     {
//         nombre: 'b',
//         descuento: 15
//     },
//     {
//         nombre: 'c',
//         descuento: 20
//     },
//     {
//         nombre: 'd',
//         descuento: 25
//     },
// ]

// function calcularDescuento (){
//     let precio = parseInt(document.getElementById('precio').value) 
//     let cupon = document.getElementById('cupon').value 

//     descuento = '¡descuento invalido!, intenta nuevamente.'
    
//     for (key of cupones){
//         if (cupon === key.nombre){
//             descuento = key.descuento
//         }
//     }

//     if (descuento !== '¡descuento invalido!, intenta nuevamente.'){
//         let operacion = precio * (100 - descuento) / 100
//         document.getElementById('boom').innerHTML = `total: ${operacion}`;    
//     } else {
//         alert(descuento)
//     }
// }


// arrays - con validacion  
// let cupones = [
//     ['a',10],
//     ['b',15],
//     ['c',20],
//     ['d',25],
// ]

// function calcularDescuento (){
//     let precio = parseInt(document.getElementById('precio').value) 
//     let cupon = document.getElementById('cupon').value 

//     descuento = '¡descuento invalido!, intenta nuevamente.'

//     for (key of cupones){
//         if (cupon === key[0]){
//             descuento = key[1]
//         }  
//     }

//     if (descuento !== '¡descuento invalido!, intenta nuevamente.'){
//         let operacion = precio * (100 - descuento) / 100
//         document.getElementById('boom').innerHTML = `total: ${operacion}`;
//     } else {
//         alert(descuento)
//     }
// }



// arrays - sin validacion 
// let cupones = [
//     ['a',10],
//     ['b',15],
//     ['c',20],
//     ['d',25],
// ]

// function calcularDescuento (){
//     let precio = parseInt(document.getElementById('precio').value) 
//     let cupon = document.getElementById('cupon').value 

//     for (key of cupones){
//         if (cupon === key[0]){
//             descuento = key[1]
//         }  
//     }
//         let operacion = precio * (100 - descuento) / 100
//         document.getElementById('boom').innerHTML = `total: ${operacion}`
// }

