#  4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 ) 
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.


calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')

while (calculadora!='5'):
    if (calculadora=='1'):
        num1 = int(input('Ingrese el primer numero: '))
        num2 = int(input('Ingrese el segundo numero: '))
        suma = num1+num2
        print('La suma es: ' , suma)
        calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')
    elif (calculadora=='2'):
        num1 = int(input('Ingrese el primer numero: '))
        num2 = int(input('Ingrese el segundo numero: '))
        num3 = int(input('Ingrese el tercer numero: '))
        resta=num1-num2-num3
        print('La resta es: ' , resta)
        calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')
    elif(calculadora=='3'):
        num1 = int(input('Ingrese el primer numero: '))
        num2 = int(input('Ingrese el segundo numero: '))
        multiplicar = num1*num2
        print('La multiplicacion es: ' , multiplicar)
        calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')
    elif(calculadora=='4'):
        num1 = int(input('Ingrese el primer numero: '))
        num2 = int(input('Ingrese el segundo numero: '))
        if(num2!=0):
         dividir = num1/num2
        print('La division es: ' , dividir)
        calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')
        
    else:
        print('No existe la operacion')
        calculadora = input('Ingrese un numero para hacer las siguientes operaciones: ' +
                    '1. Suma ' +
                    '2. Restar ' +
                    '3. Multiplicar ' +
                    '4. Dividir ' +
                    '5. Salir :')      
print('Vemoz')