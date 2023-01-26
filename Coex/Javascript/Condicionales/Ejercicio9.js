// 9.Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar. Ademas el numero debe ser positivo.

const num = parseInt(prompt('Ingrese un numero entero'))

if(num<1){
    alert('El numero debe ser positivo')
}else{
    if(num % 2 == 0){
        console.log('El numero' + num + ' es par ')
    }else{
        console.log('El numero' + num + ' es impar ')
    }
}