# 6. Un comerciante desea aplicar un descuento a sus productos en funcion a sus precios de la siguiente manera:

# 	1. Si el precio es mayor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante ingresar la cantidad de productos y el precio de cada uno. El algoritmo
# tambien debe imprimir en pantalla el calculo de los descuentos.

cant = int(input('Ingrese la cantidad de productos: '))
precio = int(input('Ingrese el precio '))
cantidad = cant

if(precio>100):
    descuento=cantidad*(precio-(precio*0.1))
elif (precio>100 and precio<200):
    descuento = cantidad*(precio-(precio*0.2))
elif(precio>200):
    descuento = cantidad*(precio-(precio*0.25))
print('El precio es de: ' , descuento)

