// function calcularMedia (lista){
//     const sumaLista = lista.reduce(
//         function (valorAcumulado = 0,nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     )
//     return sumaLista / lista.length
// }

// function esPar(numero){
//     if (numero % 2 === 0){
//         return true 
//     } else {
//         return false 
//     }
// }

// const lista1 = [
//     100,
//     200,
//     300,
//     4000000,
// ]


// function calcularMediana (list){
//     let lista1 = list.sort()
//     const mitadLista1 = parseInt(lista1.length / 2)
//     let mediana

//     if (esPar(lista1.length)){
//         const elemento1 = lista1[mitadLista1 - 1]
//         const elemento2 = lista1[mitadLista1]

//         promedioElementos = calcularMedia([elemento1,elemento2])

//         mediana = promedioElementos
//     } else {
//         mediana = lista1[mitadLista1]
//     }
//     console.log(mediana)
// }

// calcularMediana(lista1)



// reto segunda forma 

let lista = [
    100,
    200,
    400,
    300,
    500,
    400,
    10000,
    300000,
]

function calcularMediana (lista){
    lista.sort((a,b)=>a-b) // muta y ordena el array 
    let mitadLista = parseInt(lista.length/2) 

    let mediana

    if (lista.length % 2 === 0){
        let elemento1 = lista[mitadLista - 1]
        let elemento2 = lista[mitadLista]

        let media = [elemento1,elemento2].reduce((a,i)=>a+i)
        mediana = media / [elemento1,elemento2].length
    } else {
        mediana = lista[mitadLista]
    }
    console.log(mediana)
}

calcularMediana(lista)






