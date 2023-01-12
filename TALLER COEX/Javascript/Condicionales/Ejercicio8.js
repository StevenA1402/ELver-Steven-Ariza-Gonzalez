// 8.Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 
// caso contrario mostrar false, utilizar el operador ternario.

alert('Ingrese tres numeros enteros del 1 al 10')
const n1 = parseInt(prompt('Ingrese el primer numero'))
const n2 = parseInt(prompt('Ingrese el segundo numero'))
const n3 = parseInt(prompt('Ingrese el tercer numero'))

let promedio = 0
promedio =(n1 + n2 + n3)/ 3

if(n1<1 || n1>10){
    alert('El numero ' + n1 + ' es incorrecto')
}else{
    if(n2<1|| n2>10){
        alert('El numero ' + n2 + ' es incorrecto')
    }else{
        if(n3<1 || n3>10){
            alert('El numero ' + n3 + ' es incorrecto')
        }else{
        (promedio > 5) ? console.log (true) : console.log(false)
        }
    }
}

