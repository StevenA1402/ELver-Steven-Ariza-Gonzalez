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

while (menu != 11) {
    switch (menu) {
        case 1:
            cantidad = parseInt(prompt('Ingrese la cantidad de estudiantes: '))
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '2. Registrar datos del talento \n' +
                '3. Registrar nota de misiones \n' +
                '4. Registrar prueba de nivel final \n' +
                '5. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '6. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;

        case 2:
            let contador = 0;
            if (!isNaN(cantidad)) {
                while (contador < cantidad) {
                    estudiantes[contador] = new Array(6)
                    for (let i = 0; i < 2; i++) {
                        if (i == 0) {
                            nombre = prompt(`Ingrese el nombre del talento: ${contador + 1}`)
                            if (isNaN(nombre)) {
                                estudiantes[contador][i] = nombre;
                                alert('Nombre guardado correctamente')
                            } else {
                                alert('El nombre debe contener caracteres ');
                                i--;
                            }
                        } else if (i == 1) {
                            codigo = prompt(`Ingrese el codigo del talento: ${contador + 1}`);
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
                '3. Registrar nota de misiones \n' +
                '4. Registrar prueba de nivel final \n' +
                '5. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '6. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 3:
            for (let i = 0; i < estudiantes.length; i++) {
                alert("Digite las notas del estudiante: " + estudiantes[i][0])
                for (let j = 2; j < 5; j++) {
                    notas = parseFloat(prompt("Nota numero " + (j - 1)))
                    if (!isNaN(notas) && notas >= 0 && notas <= 100) {
                        estudiantes[i][j] = notas;
                    } else {
                        alert('Solo se reciben numeros. El valor debe ser de 0 a 100')
                        i--;
                    }
                }
            }
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '4. Registrar prueba de nivel final \n' +
                '5. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '6. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 4:
            for (let h = 0; h < estudiantes.length; h++) {
                alert("Digite las nota prueba final del estudiante: " + estudiantes[h][0])
                for (let d = 5; d < 6; d++) {
                    notas = parseFloat(prompt("Nota numero " + (d - 2)))
                    if (!isNaN(notas) && notas >= 0 && notas <= 100) {
                        estudiantes[h][d] = notas;

                    } else {
                        alert('Solo se reciben numeros. El valor debe ser de 0 a 100')
                        h--;
                    }
                }

            }
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '5. Mostrar nombre y nota del talento con la mejor nota en la 1 mision \n' +
                '6. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 5:
            let mayor = estudiantes[0][2];
            let nombreMayor = estudiantes[0][0];
            for (let i = 0; i < estudiantes.length; i++) {
                for (let x = 2; x < 3; x++) {
                    if (estudiantes[i][x] > mayor) {
                        mayor = estudiantes[i][x];
                        nombreMayor = estudiantes[i][0];
                    }
                }
            }
            console.log("la nota mayor del estudiante " + nombreMayor + " es " + mayor);

            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '6. Mostrar nombre y nota del talento con la mejor nota en la 2 mision \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 6:
            let mayor1 = estudiantes[0][3];
            let nombreMayor1 = estudiantes[0][0];
            for (let i = 0; i < estudiantes.length; i++) {
                for (let x = 3; x < 4; x++) {
                    if (estudiantes[i][x] > mayor1) {
                        mayor1 = estudiantes[i][x];
                        nombreMayor1 = estudiantes[i][0];
                    }
                }
            }
            console.log("la nota mayor del estudiante " + nombreMayor1 + " es " + mayor1);
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '7. Mostrar nombre y nota del talento con la mejor nota en la 3 mision \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 7:
            let mayor2 = estudiantes[0][4];
            let nombreMayor2 = estudiantes[0][0];
            for (let i = 0; i < estudiantes.length; i++) {
                for (let x = 4; x < 5; x++) {
                    if (estudiantes[i][x] > mayor2) {
                        mayor2 = estudiantes[i][x];
                        nombreMayor2 = estudiantes[i][0];
                    }
                }
            }
            console.log("la nota mayor del estudiante " + nombreMayor2 + " es " + mayor2);
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '8. Mostrar el nombre y promedio de cada talento \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))

            break;
        case 8:
            let promedioTalento = 0;
            for (let i = 0; i < estudiantes.length; i++) {
                for (let j = 2; j < estudiantes[i].length; j++) {
                    promedioTalento = promedioTalento + estudiantes[i][j];
                }
                promedio[i] = promedioTalento;
                promedioTalento = 0;
            }
            for (let i = 0; i < estudiantes.length; i++) {
                console.log(" ");
                for (let j = 0; j < 1; j++) {
                    console.log("El promedio del talento " + estudiantes[i][j] + " es:  "+(promedio[i] / 4))

                }
            }
            console.log(" ");

            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '9. Imprimir resultados \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 9:
            console.log("TALENTOS COEX");
            for (let i = 0; i < estudiantes.length; i++) {
                console.log("Estudiante "+i);
                for (let j = 0; j < estudiantes[i].length; j++) {
                    if(j==0){
                        console.log("Nombre: "+estudiantes[i][j])
                    }else if(j==1){
                        console.log("Codigo: "+estudiantes[i][j])
                    }else if(j>=2 && j<=5){
                        console.log("Mision "+(j-1)+": "+estudiantes[i][j])
                    }else{
                        console.log("Mision final: "+estudiantes[i][j])
                    }

                }
                console.log(" Promedio :"+promedio[i] / 4);
            }
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
                '10. Nombre del creador \n' +
                '11. Salir'))
            break;
        case 10:
            console.log('Realizado por: Elver Steven Ariza Gonzalez');
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
            '11. Salir'))
            break;
        case 11:
            menu = parseInt(prompt('Ingrese la opcion a realizar: \n' +
            '11. Salir'))
            break;
        default:
            break;

    }
}
