let precios = 0
let precioX = 0
let precioI = 0
let precioM = 0
let precioH = 0
let precioO = 0
let samven = 0
let xiaoven = 0
let iphven = 0
let motoven = 0
let huaven = 0
let oppoven = 0
let precioToS = 0
let precioToX = 0
let precioToI = 0
let precioToM = 0
let precioToH = 0
let precioToO = 0
let precioMarcaTotal = 0
let celular 
let preciototal = 0
let samsung = parseInt(prompt('Ingrese la cantidad de Samsung que tiene en su inventario'))
let xiaomi = parseInt(prompt('Ingrese la cantidad de Xiaomi que tiene en su inventario'))
let iphone = parseInt(prompt('Ingrese la cantidad de Iphone que tiene en su inventario'))
let motorola = parseInt(prompt('Ingrese la cantidad de Motorola que tiene en su inventario'))
let huawei = parseInt(prompt('Ingrese la cantidad de Huawei que tiene en su inventario'))
let oppo = parseInt(prompt('Ingrese la cantidad de Oppo que tiene en su inventario'))

let cantidad = parseInt(prompt('¿Cuantos marcas de celular desea vender? '))


for(let index = 0; index<cantidad; index++){
    celular = parseInt(prompt('¿Que marca de celular desea vender?: \n' +
    '1. Samsung \n' +
    '2. Xiamoi \n' +
    '3. Iphone \n' +
    '4. Motorola \n' +
    '5. Huawei \n' +
    '6. Oppo '))
    
    if(celular>0){
        switch(celular){
            case 1: 
                precios = 700000
                samven = parseInt(prompt('¿Cuantos samsung desea llevar? '))
                precioToS = precios * samven
                if(samsung<samven){
                    alert('No hay suficiente Samsung en el inventario')
                    precioToS = 0
                    samven = 0
                }else if (samven>0 && samven<=samsung){
                    console.log('Se pueden vender samsung')
                }
                console.log('Precio por unidad de Samsung: ' + precios)
                console.log('Precio total de Samsung vendidos: ' + precioToS)

            break;
            case 2:
                precioX = 850000
                xiaoven = parseInt(prompt('¿Cuantos Xiaomi desea llevar? '))
                precioToX = precioX * xiaoven
                if(xiaoven>xiaomi){
                    alert('No hay suficientes Xiaomi en el inventario')
                    precioToX = 0 
                    xiaoven = 0
                }else if (xiaoven>0 && xiaoven<=xiaomi){
                    console.log('Se pueden vender Xiaomi')
                }
                console.log('Precio por unidad de Xiaomi: ' + precioX)
                console.log('Precio total de Xiaomi vendidos: ' + precioToX)
            
            break;
            case 3:
                precioI = 150000
                iphven = parseInt(prompt('¿Cuantos Iphone desea llevar? '))
                precioToI = precioI * iphven
                if(iphven>iphone){
                    alert('No hay suficientes Iphone en el inventario')
                    precioToI = 0
                    iphven = 0
                }else if(iphven>0 && iphven<=iphone){
                    console.log('Se pueden vender Iphone')
                }
                console.log('Precio por unidad de Iphone: ' + precioI)
                console.log('Precio total de Iphone vendidos: ' + precioToI)
            break;
            case 4:
                precioM = 800000
                motoven = parseInt(prompt('¿Cuantos Mototola desea llevar? '))
                precioToM = precioM * motoven
                if(motoven>motorola){
                    alert('No hay suficientes Motorola en el inventario')
                    precioToM = 0
                    motoven = 0
                }else if(motoven>0 && motoven<=motorola){
                    console.log('Se pueden vender Motorola')
                }
                console.log('Precio por unidad de Motorola: ' + precioM)
                console.log('Precio total de Motorola vendidos: ' + precioToM)
            break;
            case 5:
                precioH = 900000
                huaven = parseInt(prompt('¿Cuantos Huawei desea llevar? '))    
                precioToH = precioH *huaven
                if(huaven>huawei){
                    alert('No hay suficientes Huawei en el inventario')
                    precioToH = 0
                    huaven = 0
                }else if(huaven>0 && huaven<=huawei){
                    console.log('Se pueden vender Huawei')
                }
                console.log('Precio por unidad de Huawei: ' + precioH)
                console.log('Precio total de Huawei vendidos: ' + precioToH)
            break;
            case 6:
                precioO = 500000
                oppoven = parseInt(prompt('¿Cuantos Oppo desea llevar? ')) 
                precioToO = precioO * oppoven       
                if(oppoven>oppo){
                    alert('No hay suficientes Oppo en el inventario')
                precioToO = 0
                oppoven = 0
                }else if(oppoven>0 && oppoven<=oppo){
                    console.log('Se pueden vender Oppo')
                }
                console.log('Precio por unidad de Oppo: ' + precioO)
                console.log('Precio total de Oppo vendidos: ' + precioToO)
            break;
            default:
                alert('Ingrese una marca de celular valida')
        }
       
    }  
}
preciototal = precioToH+precioToI+precioToM+precioToO+precioToS+precioToX
precioMarcaTotal = samven+huaven+iphven+motoven+oppoven+xiaoven
console.log('~~VENTA REALIZADA CON EXITO~~')
console.log('El total de celures vendidos es de: ' + precioMarcaTotal)
console.log('El precio total de la venta es de: ' + preciototal)


