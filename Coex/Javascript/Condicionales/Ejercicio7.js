// 7.Pedir un número y decir si es un número negativo, si es positivo o cero.

const num = (parseInt(prompt('Ingrese un numero entero')))

if(num<0){
    alert('El numero es negativo')
}else{
    if(num>0){
        alert('El numero es positivo')
    }else{
        alert('El numero es cero')
    }
}