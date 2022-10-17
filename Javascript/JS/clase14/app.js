let numero1= 4;
let numero2= 4;

console.log(numero1===numero2)

console.log (numero1!==numero2)

let nota= Number.parseInt(prompt("Ingrese valor de su nota",))

console.log("El valor de su nota es la siguiente", nota)

if(nota >=4){
    console.log("Felicitaciones, aprobado")
}
else{
    console.log("Desaprobado")
}

switch (nota){
    case 10:
        calificacion="Sobresaliente";
        break;
    case 9:
    case 8:
        calificacion="Notable"
    case 7:
    case 6:
    case 5:
    case 4:
        calificacion="muy bien"
    case 3:
    case 2:
    case 1:
        console.log("Tu nota final es:", calificacion)

}

if(nota<=0||nota>10){
    console.log("La nota debe ser entre un 0 y 10")
} 
else{
    console.error("Desaprobado")
}

//Bucles i=i+1

i=0;

while(i<5){
    console.log("Valor de i en este ciclo:", i)
    i++;//incrementa el valor de i= +1. +1, +1, cada vez
}

//bucles for

for(var p=0; p<5; p++){
    console.log("Valor de p es este ciclo es:", p);
}