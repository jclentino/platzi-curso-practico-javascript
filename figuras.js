// cuadrado
console.group('cuadrado')

function perimetroCuadrado (){
    const lados = document.getElementById('cuadrado').value
    alert(lados * 4)
}

function areaCuadrado (){
    const lado = document.getElementById('cuadrado').value
    alert(lado * lado)
}

console.groupEnd()

// triangulos
console.group('triangulos')

function perimetroTriangulo () {
    const base = parseInt(document.getElementById('base').value)
    const lado1 = parseInt(document.getElementById('lado1').value)
    const lado2 = parseInt(document.getElementById('lado2').value)
    alert(base + lado1 + lado2)
}

function areaTriangulo (){
    const base = parseInt(document.getElementById('base').value)
    const altura = parseInt(document.getElementById('altura').value)
    alert((base * altura) / 2)
}

console.groupEnd()

// circulo 
console.group('circulo')

function diametroCirculo (){
    const radio = document.getElementById('radio').value 
    alert(radio * 2)
}

function perimetroCirculo () {
    const radio = document.getElementById('radio').value
    alert((radio * 2) * Math.PI)
}

function areaCirculo (){
    const radio = document.getElementById('radio').value
    alert((radio * radio) / Math.PI) 
}

console.groupEnd()


// triangulo isosceles 

function altura (){
    const lado1 = parseInt(document.getElementById('isoscelesLado1').value)
    const lado2 = parseInt(document.getElementById('isoscelesLado2').value)
    const lado3 = parseInt(document.getElementById('isoscelesLado3').value)
    
    if (lado1 === lado2 && lado1 !== lado3 ){
        alert(Math.sqrt(lado1**2 - (lado3**2)/4))
    } else if(lado1 === lado3 && lado1 !== lado2 ) {
        alert(Math.sqrt(lado1**2 - (lado2**2)/4))
    } else if (lado2 === lado3 && lado2 !== lado1) {
        alert(Math.sqrt(lado2**2 - (lado1**2)/4))
    } else {
        alert('el triangulo no es isosceles')
    }
}
