console.log('COEX');

var estudiantes = [];
var codigos = [];
var promedio = [];
let nombre = "";
let codigo = "", notas = 0;;
let nivel = "";
let cantidad;
let menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
    '1. Ingresar cantidad de estudiantes \n' +
    '2. Registrar datos del talento \n' +
    '3. Registrar nota de mision 1 \n' +
    '4. Registrar nota de mision 2 \n' +
    '5. Registrar nota de mision 3 \n' +
    '6. Registrar prueba de nivel final \n' +
    '7. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
    '8. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
    '9. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
    '10. Mostrar el nombre y promedio de cada talento \n' +
    '11. Imprimir resultados \n' +
    '12. Nombre del creador \n' +
    '13. Salir'))

while (menu != 4) {
    switch (menu) {
        case 1:
            cantidad = parseInt(prompt('Ingrese la cantidad de estudiantes: '))
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '2. Registrar datos del talento \n' +
                '3. Registrar nota de mision 1 \n' +
                '4. Registrar nota de mision 2 \n' +
                '5. Registrar nota de mision 3 \n' +
                '6. Registrar prueba de nivel final \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '8. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '9. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '10. Mostrar el nombre y promedio de cada talento \n' +
                '11. Imprimir resultados \n' +
                '12. Nombre del creador \n' +
                '13. Salir'))
            break;

        case 2:
            let contador = 0;
            if (!isNaN(cantidad)) {
                while (contador < cantidad) {
                    estudiantes[contador] = new Array(6);
                    for (let i = 0; i < 2; i++) {
                        if (i == 0) {
                            nombre = prompt(`Ingrese el nombre del talento:${contador + 1}`)
                            if (isNaN(nombre)) {
                                estudiantes[contador][i] = nombre;
                                alert('Nombre guardado correctamente')
                            } else {
                                alert('El nombre debe contener caracteres ');
                                i--;
                            }
                        } else if (i == 1) {
                            codigo = prompt(`Ingrese el codigo del talento:${contador + 1}`);
                            if (isNaN(codigo) && codigo != codigos) {
                                estudiantes[contador][i] = codigo;
                                codigos[contador] = codigo;
                                alert("Codigo guardado correctamente");
                            } else {
                                console.log('El codigo esta repetido');
                                i--;
                            }
                        }
                    }
                    console.log("Datos del estudiante " + nombre + " guardados correctamente");
                    contador++;
                }
            }

            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '3. Registrar nota de mision 1 \n' +
                '4. Registrar nota de mision 2 \n' +
                '5. Registrar nota de mision 3 \n' +
                '6. Registrar prueba de nivel final \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '8. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '9. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '10. Mostrar el nombre y promedio de cada talento \n' +
                '11. Imprimir resultados \n' +
                '12. Nombre del creador \n' +
                '13. Salir'))
            break;
        case 3:
            for (let i = 0; i < estudiantes.length; i++) {
                alert("Digite las notas del estudiante: " + estudiantes[i][0])
                for (let j = 3; j < 4; j++) {
                    notas = parseFloat(prompt("Nota numero" + (j - 2)))
                    if (!isNaN(notas) && notas >= 0 && notas <= 100) {
                        estudiantes[i][j] = notas;
                        console.log("Nota" + (j - 2) + " guardada");

                    } else {
                        alert('Solo se reciben numeros. El valor debe ser de 0 a 100')
                        i--;
                    }
                }
            }
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '4. Registrar nota de mision 2 \n' +
                '5. Registrar nota de mision 3 \n' +
                '6. Registrar prueba de nivel final \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '8. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '9. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '10. Mostrar el nombre y promedio de cada talento \n' +
                '11. Imprimir resultados \n' +
                '12. Nombre del creador \n' +
                '13. Salir'))
            break;
        case 4:
            for (let i = 0; i < estudiantes.length; i++) {
                for (let j = 3; j < 5; j++) {
                    notas = parseFloat(prompt("Nota numero" + (j - 3)))
                    if (!isNaN(notas) && notas >= 0 && notas <= 100) {
                        estudiantes[i][j] = notas;
                        console.log("Nota" + (j - 2) + " guardada");

                    } else {
                        alert('Solo se reciben numeros. El valor debe ser de 0 a 100')
                        i--;
                    }
                }
            }
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '5. Registrar nota de mision 3 \n' +
                '6. Registrar prueba de nivel final \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '8. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '9. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '10. Mostrar el nombre y promedio de cada talento \n' +
                '11. Imprimir resultados \n' +
                '12. Nombre del creador \n' +
                '13. Salir'))
            break;
        case 5:
        break;

    }
}
//Falta terminar