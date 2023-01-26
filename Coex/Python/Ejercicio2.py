# 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m. Estos numeros serviran para definir un intervalo. La funcion del algoritmo 
# 	sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].
n = int(input('Ingrese el primer numero entero: '))
m = int(input('Ingrese el segundo numero entero: '))
suma = 0
if(n>=0) and (m>=0):
    for i in range(n,m+1):
        if(i%2==0):
            suma +=i
print('La suma es: ', suma)