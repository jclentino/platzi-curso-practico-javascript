let salariosCol = colombia.map(e=>e.salario).sort((a,b)=>a-b) 

function mediana(l){
    mitad = parseInt(l.length / 2 )
    if (l.length % 2 === 0){
        el1 = l[mitad--]
        el2 = l[mitad]
        return [el1,el2].reduce((a,i)=>a+i) / [el1,el2].length 
    } else {
        return l[mitad]
    }
}

const spliceStart = parseInt((salariosCol.length * 90) / 100)
const spliceCount = salariosCol.length - spliceStart
// const calculo = parseInt((salariosCol.length * 90)/100)

// const salariosTop10 = salariosCol.slice(calculo)
const salariosTop10 = salariosCol.splice(spliceStart,spliceCount)

const medianaGeneral = mediana(salariosCol)
const medianaTop10 = mediana(salariosTop10)

console.log({medianaGeneral,medianaTop10})

