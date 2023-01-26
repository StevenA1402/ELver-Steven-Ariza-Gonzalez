//1.Desarrolle un algoritmo que permita leer 3 números enteros. El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
//Ademas ninguno de los 3 numeros ingresados pueden ser iguales. En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

alert("Ingrese un numero entero")
let n1 = parseInt(prompt('Ingese el primer numero '))
let n2 = parseInt(prompt('Ingese el segundo numero'))
let n3 = parseInt(prompt('Ingese el tercer numero'))

var mayor
var menor
if((n1 == n2) || (n1 == n3 ) || (n3 == n2)){
    alert("El numero no puede ser el mismo")
}
if((n1>n2) && (n1>n3)){
    mayor = n1
}else{
    if((n2>n1) && (n2>n3)){
        mayor=n2
    }else{
        mayor = n3
    }
}
console.log('El numero mayor es ', mayor)

if((n1<n2) && (n1<n3)){
    menor = n1
}else{
    if((n2<n1) && (n2<n3)){
        menor=n2
    }else{
        menor=n3
    }
}
console.log('El numero menor es ', menor)