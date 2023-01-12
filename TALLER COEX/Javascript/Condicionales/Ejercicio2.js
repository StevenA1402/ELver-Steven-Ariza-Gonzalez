// 2.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm. Los 2 valores ingresados no pueden ser iguales, ademas el algoritmo
//  debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm, si no lo son el algoritmo debe imprimir el valor de la
//  base multiplicado por 2 y sumarle 10.


const base = parseFloat(prompt('Ingrese el valor de la base en cm '))
const altura = parseFloat(prompt('Ingrese el valor de la altura en cm '))


if(base<0 || altura<0){
    alert('No se puede ingresar valores negativos')
    }else{
        if(base == altura){
            alert('Los valores de base y altura no pueden ser iguales')
        }else{
            if(base > 5 && altura > 4){
                const Area = (base*altura)/2
                console.log('El area del triangulo es: ', Area)
            }else{
                const resultado = (base*2)+10
                console.log('El resultado es: ', resultado)
            }
        }
    }