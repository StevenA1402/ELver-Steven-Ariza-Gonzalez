// 5.Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
// 	A = 19 y 20.
// 	B = 16, 17 y 18.
// 	C = 13, 14 y 15. 
// 	D = 10, 11 y 12.
// 	E = 1 hasta 9.

let nota = parseInt(prompt('Ingrese un numero entre 1 y 20'));
    
if(!Number.isInteger(nota)){
    console.log('Digite un dato que sea un nuemero entero');
}else{
    if(nota < 1 || nota > 20){
        console.log('Digite un dato que sea un nuemero entero y que este entre 1 y 20');
    }else{
        if(nota > 0 && nota <= 9){
            console.log('La califiacacion equivalente es "E" ');
        }else{
            if(nota > 9 && nota <= 12){
                console.log('La califiacacion equivalente es "D" ');
            }else{
                if(nota > 12 && nota <= 15){
                    console.log('La califiacacion equivalente es "C" ');
                }else{
                    if(nota > 15 && nota <= 18){
                        console.log('La califiacacion equivalente es "B" ');
                    }else{
                        if(nota > 18 && nota <= 20){
                            console.log('La califiacacion equivalente es "A" ');
                        }else{
                            
                        }
                    }
                    
                }
            }  
        }
    }
}