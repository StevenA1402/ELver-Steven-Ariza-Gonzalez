// 6.Pedir dos números y decir si non múltiplos o no.


const num1 = parseInt(prompt('Ingrese el primer numero'))
const num2 = parseInt(prompt('Ingrese el segundo numero'))

if(num1 <= 0 || num2 <= 0){
    alert('Ingrese un numero valido ')
}else{
    if(num2 % num1  == 0 ){
        alert('Los numeros son multiplos')
    }else{
       alert('Los numeros no son multiplos')

    }
}