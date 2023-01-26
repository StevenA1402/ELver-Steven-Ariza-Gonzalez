# 1. Haga la sucesion de Fibonacci
n=0
m=1
suma=0
num = int(input('Ingrese la camtidad de numeros: '))
if(num<0):
    print('Ingrese un numero mayor a 0')
for i in range(0,num): 
        suma=suma+n
        n=m
        m=suma
        print(suma)
  