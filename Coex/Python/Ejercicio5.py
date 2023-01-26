# 5. Diseñe un algoritmo que reciba un numero entero positivo mayor a 100 y luego imprima todos los numeros primos que hay antes de ese nuemro ingresado.
num = int(input('Ingrese un numero mayor a 100: '))
primo=0
while(num<100):
    num = int(input('Ingrese un numero mayor a 100: '))
    
for i in range(2,num):
    primo = True
    for j in range(2,i):
        if i % j == 0 :
                primo = False
    if primo:
         print(i)   

