let DatospUsh = []
let estudiantes = {
   notas: 0,
    nota1 : 0,
    nota2 : 0,
    nota3: 0,
    codigo: 0,
    nombre: '',
    nivel: '',
    promedio: 0
}
let cantidad = 0

const ListadoEstudiantes = (dato, DatospUsh) => {
    if(dato>0){
        DatospUsh.forEach(el =>{
            console.log(`Nombre:${el.nombre} \n Nivel:${el.nivel} \n Codigo:${el.codigo}`);

        })
    }
}
const notasEstudiante = (dato, info) =>{
    if(dato>0){
        info.nota1 = parseFloat(prompt(`Ingrese la primera nota del estudiante:${info.nombre}`))
        if(info.nota1>0 && info.nota1<=5){
            info.nota2 = parseFloat(prompt(`Ingrese la segunda nota del estudiante:${info.nombre}`))
            if(info.nota2>0 && info.nota2<=5){
                info.nota3 = parseFloat(prompt(`Ingrese la tercera nota del estudiante:${info.nombre}`))
                if(info.nota3>0 && info.nota3<=5){
                    info.promedio = info.nota1+info.nota2+info.nota3/3
                    return info
                }else{
                    alert('Ingrese una nota valida del 1 al 5')
                    info.nota3 = parseFloat(prompt(`Ingrese la tercera nota del estudiante:${info.nombre}`))
                }
            }else{
                alert('Ingrese una nota valida del 1 al 5')
                info.nota2 = parseFloat(prompt(`Ingrese la segunda nota del estudiante:${info.nombre}`))
            }
            }else{
                alert('Ingrese una nota valida del 1 al 5')
                info.nota1 = parseFloat(prompt(`Ingrese la primera nota del estudiante:${info.nombre}`))
            }
        }
    }

const datosEstudiante = (dato, info, index) => {
    if(dato>0){
        info.nombre = prompt(`Ingrese el nombre del estudiante: ${index + 1}`)
        if(info.nombre != ""){
                info.codigo = parseFloat(prompt(`Ingrese el codigo del estudiante: ${index + 1}`))
                if(info.codigo!=""){
                    info.nivel = prompt(`Ingrese el nivel del estudiante 
                    -Senior
                    -Junior
                    -Beginner`)
                    if(info.nivel!='Junior' && info.nivel!='Senior' && info.nivel!='Beginner'){
                        alert('Ingrese un nivel valido')
                        info.nivel = prompt(`Ingrese el nivel del estudiante 
                        -Senior
                        -Junior
                        -Beginner`)
                    }else{
                        return info
                    }
                }else{
                    alert('Ingrese un codigo valido')
                    info.codigo = parseFloat(prompt(`Ingrese el codigo del estudiante:${index + 1}`))
                }

        }
    }else{
        return info
    }
}

const Promedio = (dato, DatospUsh) => {
    let promedio = 0
    let sumatoria = 0
    if(dato>0){
        DatospUsh.forEach(el=> {
            console.log(`Nombre:${el.nombre} Notas: \n \n Nota 1:${el.nota1} \n Nota 2:${el.nota2} \n Nota 3:${el.nota3} \n Promedio: ${el.promedio}`);
            sumatoria += el.promedio
        })
    }
    promedio = sumatoria / DatospUsh.length
    console.log(`El promedio general de los estudiantes es: ${promedio}`);
    if(promedio>=3){
        alert('El estudiante aprobo el curso');
    }else{
        alert('El estudiante no aprobo el curso')
    }
}

let menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
    '1. Definir cantidad de estudiantes \n'+
    '2. Registrar datos del estudiante \n'+
    '3. Mostrar listado de estudiantes \n' +
    '4. Registar las notas del estudiante \n'+
    '5. Imprimir notas estudiante \n' +
    '6. Salir'))

while(menu != 6){
    switch(menu){
        case 1:
            cantidad = parseInt(prompt('Ingrese la cantidad de estudiantes'))
            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '2. Registrar datos del estudiante \n'+
            '3. Mostrar listado de estudiantes \n' +
            '4. Registar las notas del estudiante \n'+
            '5. Imprimir notas estudiante \n' +
            '6. Salir'))
        break;
        case 2:
            for(let index= 0; index<cantidad; index++){
                estudiantes = datosEstudiante(cantidad, estudiantes, index)
                DatospUsh.push(estudiantes)
                if(index>0){
                    if(DatospUsh[index].codigo===DatospUsh[index-1].codigo){
                        alert('EL codigo ya esta en uso')
                        ListadoEstudiantes.codigo = parseFloat(prompt(`Ingrese el codigo del estudiante:${index + 1}`))
                        
                    }
                }
                estudiantes = {
                    notas: 0,
                         nota1 : 0,
                         nota2 : 0,
                         nota3: 0,
                     codigo: '',
                     nombre: '',
                     nivel: '',
                     promedio: 0
                 }

            }
         

            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '1. Definir cantidad de estudiantes \n'+
            '3. Mostrar listado de estudiantes \n' +
            '4. Registar las notas del estudiante \n'+
            '5. Imprimir notas estudiante \n' +
            '6. Salir'))
                break;
        case 3:
            console.log('LISTADO ESTUDIANTES');
            ListadoEstudiantes(cantidad,DatospUsh)
            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '4. Registar las notas del estudiante \n'+
            '5. Imprimir notas estudiante \n' +
            '6. Salir'))

        break;
        case 4:
            DatospUsh.map((el) => {
                if(el.nombre != "" && el.nivel != "" && el.codigo != ""){
                    el.nombre = el.nombre
                    el.nivel = el.nivel
                    el.codigo = el.codigo
                    el = notasEstudiante(cantidad, el)
                    return el
                }
            })
            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '5. Imprimir notas estudiante \n' +
            '6. Salir'))
        break;
        case 5: 
            console.log('NOTAS DEL ESTUDIANTE');
            Promedio(cantidad, DatospUsh)
            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '6. Salir'))
        break;
        case 6:
        break;
        default:
            menu = parseInt(prompt('Ingrese la opcion que desea realizar: \n'+
            '1. Definir cantidad de estudiantes \n'+
            '2. Registrar datos del estudiante \n'+
            '3. Mostrar listado de estudiantes \n' +
            '4. Registar las notas del estudiante \n'+
            '5. Imprimir notas estudiante \n' +
            '6. Salir'))
            }


}