let datosPush =  []
let datos = {
    nombre: "",
    edad: 0,
    peso: 0,
    altura: 0,
    imc: 0
}
let canFamilia = 0

const infoFamilia = (dato, info, index) => {
    if(dato>0){
        info.nombre = prompt(`Ingrese el nombre del familiar ${index + 1}`)
        if(info.nombre!=""){
            info.edad = prompt(`Ingrese la edad del familiar ${index + 1}`)
            if(info.edad > 0 && info.edad<100){
                return info 
            }else{
                alert('Ingrese una edad valida')
                info.edad = prompt('Ingrese la edad del familiar')
            }
        }else{
            alert('Ingrese el nombre del familiar')
            info.nombre = prompt('Ingrese el nombre del familiar')
        }
    }else{
        return infoFamilia
    }
}
//console.log(`Nombre:${el.nombre}`);
const IngresarDatos = (dato, info) => {
    if(dato>0){
        info.peso = parseFloat(prompt(`Ingrese el peso del familiar ${info.nombre}`))
        if(info.peso>0){
            info.altura = parseFloat(prompt(`Ingrese la altura del familiar ${info.nombre}`))
            if(info.altura>0 && info.altura<2.72){
                return info
            }else{
                alert('Ingrese una altura valida')
                info.altura = parseFloat(prompt(`Ingrese la altura del familiar ${info.nombre}`))
            }
        }else{
            alert('Ingrese un peso valido')
            info.peso = parseFloat(prompt(`Ingrese el peso del familiar ${info.nombre}`))
        }
    }else{
        return info
    }
}

const TotalImc = (dato, info) => {
    if(dato>0){
        info.imc = info.peso / info.altura ** 2
        return info
    }else{
        return info
    }

}

let Menu = parseInt(prompt('¿Que opcion desea realizar? \n' +
'1. Ingresar familiares \n' +
'2. Ingresar datos \n' +
'3. Mostrar resultados \n' +
'4. Salir'))

while(Menu!= 4){
    switch(Menu){
        case 1:
            canFamilia = parseInt(prompt('¿Cuantos familiares desea ingresar?'))
            for(let index = 0; index<canFamilia; index++){
                datos = infoFamilia(canFamilia, datos, index)
                datosPush.push(datos)
                datos = {}

            }
            Menu = parseInt(prompt('¿Que opcion desea realizar? \n' +
            '1. Ingresar familiares \n' +
            '2. Ingresar datos \n' +
            '3. Mostrar resultados \n' +
            '4. Salir'));
            break;
        case 2:
            datosPush.map((el) =>{
                if(el.nombre != ""  && el.edad > 0){
                    el.nombre = el.nombre
                    el.edad = el.edad
                    datos = IngresarDatos(canFamilia, el)
                    return el;
                }
            }) 
            Menu = parseInt(prompt('¿Que opcion desea realizar? \n' +
            '1. Ingresar familiares\n' +
            '3. Mostrar resultados \n' +
            '4. Salir'));
            break;
        case 3:
            const Total = datosPush.map((el) => {
                if(el.altura>0 && el.peso>0 && el.nombre != ""){
                    el.altura = el.altura
                    el.peso = el.peso
                    el.nombre = el.nombre
                    datos = TotalImc(canFamilia, el)
                    return el;
                }
            })
            Total.forEach(el => {
                if(el.imc<18.5){
                    console.log(`Nombre: ${el.nombre}
                    Edad: ${el.edad}
                    Altura: ${el.altura}
                    Peso: ${el.peso}
                    IMC: ${el.imc}
                    Su IMC es: Bajo peso`
                    );
                }else if (el.imc>= 18.5 && el.imc<=24.9){
                    console.log(`Nombre: ${el.nombre}
                    Edad: ${el.edad}
                    Altura: ${el.altura}
                    Peso: ${el.peso}
                    IMC: ${el.imc}
                    Su IMC es: Normal` 
                    );
                }else if (el.imc>=25 && el.imc<=28.9){
                    console.log(`Nombre: ${el.nombre}
                    Edad: ${el.edad}
                    Altura: ${el.altura}
                    Peso: ${el.peso}
                    IMC: ${el.imc}
                    Su IMC es: Sobrepeso`
                    );
                }else if(el.imc>=29 && el.imc<=24.9){
                    console.log(`Nombre: ${el.nombre}
                    Edad: ${el.edad}
                    Altura: ${el.altura}
                    Peso: ${el.peso}
                    IMC: ${el.imc}
                    Su IMC es: Obeso I`
                    );
                }else if(el.imc>=35){
                    console.log(`Nombre: ${el.nombre}
                    Edad: ${el.edad}
                    Altura: ${el.altura}
                    Peso: ${el.peso}
                    IMC: ${el.imc}
                    Su IMC es: Obeso II`
                    );
                }
            })
            Menu = 4
        break;
        case 4: 
        break;
        default:
            alert('Esta menu de opcion no existe')
            Menu = parseInt(prompt('¿Que opcion desea realizar? \n' +
            '1. Ingresar familiares \n' +
            '2. Ingresar datos \n' +
            '3. Mostrar resultados \n' +
            '4. Salir'))
        break;
    }
}

   