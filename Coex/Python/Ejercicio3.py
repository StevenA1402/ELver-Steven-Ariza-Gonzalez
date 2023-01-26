# 3. Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10 y menor a 15 despues debe calcular el factorial de este numero
# e imprimirlo en pantalla.

num = int(input('Ingrese un numero del 10 al 15: '))
numero= num

if(num>10 and num<15):
    for i in range(num,0,-1):
        if(i<num):
            factorial=numero*i
            numero=factorial
    print('El factorial es: ', factorial)

        
        