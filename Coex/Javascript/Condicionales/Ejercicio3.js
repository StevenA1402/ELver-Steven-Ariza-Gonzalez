// 3.Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar.

const num = parseInt(prompt('Ingrese un numero entero'))


if(num<=0){
    alert('EL numero no es valido')
}else{
    if(num % 2 == 0){
        console.log('El numero ' + num + ' es par')

    }else{
        console.log('El numero ' + num + ' es impar')
    }
}