// let arr = [
//     1,
//     2,
//     2,
//     3,
//     4,
//     3,
//     4,
//     2,
//     2,
//     1,
//     5,
//     4
// ]

// function calcularModa (lista){
//     let obj = {}

//     lista.map(function (elemento){
//         if (obj[elemento]){
//             obj[elemento] += 1
//         } else {
//             obj[elemento] = 1
//         }
//     })

//     const moda = Object.entries(obj).sort((a,e)=> a[1]-e[1])

//     console.log(moda[moda.length - 1])

// }

// calcularModa(arr)


// media ponderada 
// let notas = [[5,10,5,0],[10]] // [[notas],[notaExamen]]
// let porcentajes = [0.50,0.50] // [[porcentajeNotas],[porcentajeExamen]]


// function calcularMediaPonderada (notas,porcentajes){
//     conjNotas = (lista[0].reduce((e1,e2)=>e1+e2) * porcentajes[0]) / lista[0].length
//     examen = lista[1] * porcentajes[1]

//     notasFinales = [conjNotas,examen].reduce((a,b)=>a+b)
//     console.log(notasFinales / (porcentajes.reduce((a,b)=>a+b)))
// }

// calcularMediaPonderada(notas,porcentajes)


// media aritmetica: 

let arr = [1,2,3,4,5]

function mediaAritmetica (lista){
    inversos = lista.map((e)=>(1/e)).reduce((a,i)=>a+i)
    return lista.length / inversos;
}

console.log(mediaAritmetica(arr))


































