// let lista = [100,200,300,'hola',400,500]

// let valor = 0;
// function calcularMedia (lista){
//     for (key of lista){
//         console.log('valor:',key)
//         valor = valor + key
//     }
//     console.log('promedio:',valor / lista.length)
// }

// calcularMedia(lista)



// SEGUNDA FORMA 
let lista = [100,200,300,400,500]


function calcularMedia (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
}

calcularMedia(lista)


// TERCERA FORMA 
// let lista = [100,200,300,400,500]


// function calcularMedia (lista){
//     const sumaLista = lista.reduce(
//         function (valorAcumulado,nuevoElemento){
//             return valorAcumulado + nuevoElemento;
//         }
//     )
//     return sumaLista    
// }

// console.log(calcularMedia(lista)

