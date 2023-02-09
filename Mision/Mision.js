console.log("TURBOCOEX");
var estudiantes = [];
var codigos = [];
var prome = [];
let nombre = "";
let codigo = 0, notas = 0;;
let nivel = "";
let opcion;
let cantidad;
do {
    console.log("");
    console.log("1. definir cantidad de estudiantes");
    console.log("2. registrar datos del estudiante");
    console.log("3. mostrar listado de estudiantes");
    console.log("4. registrar nostas de los estudiantes");
    console.log("5 imprimir notas de los estudiantes");
    console.log("6. autor");
    console.log("0. salir");
    opcion = parseInt(prompt("digite la opcion"));
    switch (opcion) {
        case 1:
            cantidad = parseInt(prompt("DIGITE LA CANTIDAD DE ESTUDIANTES QUE VA A REGISTRAR"));
            console.log("la cantidad " +cantidad+" fue guardada exitosamente ");
            break;
        case 2:
            let contador = 0;
            if (!isNaN(cantidad)) {
                while (contador < cantidad) {
                    estudiantes[contador] = new Array(6);
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {
                            nombre = prompt("digite el nombre del estudiante n°" + (contador + 1));
                            if (isNaN(nombre)) {
                                estudiantes[contador][i] = nombre;
                                console.log("nombre guardado correctamente");
                                console.log("");
                            } else {
                                console.log("el nombre debe tener carateres");
                                i--;
                            }
                        } else if (i == 1) {
                            codigo = parseInt(prompt("digite el codigo del estudiante: " + nombre));
                            if (!isNaN(codigo) && codigo != codigos) {
                                estudiantes[contador][i] = codigo;
                                codigos[contador] = codigo;
                                console.log("codigo guardado correctamente");
                                console.log("");
                            } else {
                                console.log("no se reciben lectras y codigos repetidos");
                                i--;
                            }
                        } else {
                            console.log("tipos de niveles");
                            console.log("beginer");
                            console.log("junior");
                            console.log("senior");
                            nivel = prompt("digite el nivel del estudiante");
                            if (nivel == "beginer" || nivel == "junior" || nivel == "senior") {
                                estudiantes[contador][i] = nivel;
                                console.log("nivel guardado correctamente");
                                console.log("");
                            } else {
                                console.log("se reciben carateres y el nivel requerido");
                                i--;
                            }
                        }
                    }
                    console.log("datos del estudiante " + nombre + " guardados correctamente");
                    contador++;
                }
            }
            console.log(" ");
            break;
        case 3:
            for (let i = 0; i < estudiantes.length; i++) {
                console.log("estudiante " + (i + 1)+": ");
                for (let j = 0; j < 2; j++) {
                    console.log(estudiantes[i][j]);
                }
            }
            console.log("");
            break;
        case 4:
                    for (let i =0; i < estudiantes.length; i++) {
                        console.log("digite las notas del estudiante: "+estudiantes[i][0]);
                        for (let j = 3; j < 6; j++) {
                            notas = parseFloat(prompt("nota numero" + (j-2)));
                            if (!isNaN(notas) && notas >= 0 && notas <= 5) {
                                estudiantes[i][j] = notas;
                                console.log("nota" + (j - 2) + " guardada");
                            } else {
                                console.log("solo se reciben numeros no carateres y no se debe superar de 0 o 5");
                                i--;
                            }
                            ;
                        }
                        console.log("las notas fueron guardadas correctamente del estudiante: "+estudiantes[i][0])
                    }
            break;
        case 5:
            let promedio = 0;
            for (let i = 0; i < estudiantes.length; i++) {
                for (let j = 3; j < estudiantes[i].length; j++) {
                    promedio = promedio + estudiantes[i][j];
                }
                prome[i] = promedio;
                promedio = 0;
            }
            for (let i = 0; i < estudiantes.length; i++) {
                console.log(" ");
                for (let j = 0; j < 1; j++) {
                    console.log("estudiante: " +estudiantes[i][j]);
                }
                if ((prome[i] / 3) >= 3.5) {
                    console.log("promedio del estudiante es: " + (prome[i] / 3) + " aprobo");

                } else {
                    console.log("promedio del estudiante es: " + (prome[i] / 3) + " reprobo");

                }
            }
            break;
        case 6:
            console.log("MANUEL RICARDO CASTRO MALAVER\nESTUDIANTE DE COEX");
            break;
        case 0:
            console.log("SE CERRO EL PROGRAMA");
            break;
        default:
            console.log("el numero que digito no es una opcion postulada y no funciona con lectras");
            break;
    }
} while (opcion != 0);