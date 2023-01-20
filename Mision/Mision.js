// Realice un programa que permita registrar las notas que deben estar en
// un rango de 0-5. En caso de que una de las notas, se encuentre por
// fuera de este rango, se debe mostrar un mensaje que indique error.

let notaexa 
let notaexa2 
let notaexa3 
let promedioexa 
let notatra 
let notatra2
let promediotra
let examen
let auto
let coauto
let promedioexaf
let promediofinal


notaexa = parseFloat(prompt('Ingrese la nota del primer examen'))

if(notaexa>0 && notaexa<=5){
    notaexa2 = parseFloat(prompt('Ingrese la nota del segundo examen'))
} if (notaexa2>0 && notaexa2<=5){
    notaexa3 = parseFloat(prompt('Ingrese la nota del tercer examen'))
} if (notaexa3>0 && notaexa3<=5){
    notatra = parseFloat(prompt('Ingrese la primera nota de trabajos'))
} if (notatra>0 && notatra<=5){
    notatra2 = parseFloat(prompt('Ingrese la segunda nota de trabajos'))
} if(notatra2>0 && notatra2<=5) {
    examen = parseFloat(prompt('Ingrese la nota del examen final'))
} if(examen>0 && examen<=5){
    auto = parseFloat(prompt('Ingrese la nota de autoevaluacion: '))
} if(auto>0 && auto<=5){
    coauto = parseFloat(prompt('Ingrese la nota de co-evaluacion: '))
} if(coauto>0 && coauto<=5){
}else{
    alert('La nota es invalida. Ingrese valores del 1 al 5')
}
promedioexa = ((notaexa+notaexa2+notaexa3)/3)*0.55 
promediotra = ((notatra+notatra2)/2)*0.15
promedioauto = ((auto+coauto)/2)*0.1
promedioexaf = examen*0.2
promediofinal = (promedioexa+promediotra+promedioauto+promedioexaf)
console.log('La nota de examenes es de: ' +  promedioexa)
console.log('La nota de trabajos es de: '+ promediotra)
console.log('La nota de examen final es de: ' + promedioexaf)
console.log('La nota de autoevaluacion es de ' + promedioauto)
console.log('La nota definitiva del estudianre es de: ' + promediofinal)



if(promediofinal>=3){
    alert('EL estudiante aprobo el curso')
}if(promediofinal>=4.7 && promediofinal<=5){
    console.log('El promedio del estudiante es Superios')
}if(promediofinal>=4 && promediofinal<=4.6){
    console.log('EL promedio del estudiante es Alto')
}if(promediofinal>=3 && promediofinal<=3.9){
    console.log('EL promedio del estudiante es Basico')
}if(promediofinal>=2 && promediofinal<=2.9){
    console.log('EL promedio del estudiante es Bajo')
}if(promediofinal>0 && promediofinal<=1.9){
    console.log('EL promedio del estudiante es Muy bajo')
}if(promediofinal<3){
    alert('EL estudiante no aprobo el curso')
}

