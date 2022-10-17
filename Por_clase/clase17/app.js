//Creacion de arrays o arreglos

let numeros=new Array(20,1,45,10,88,6)

console.log  (numeros)

let colores=["Verde", "Azul", "Gris", "Mamrron"]

let vacio=[]

let mixto=[25, "casa", false]

document.write("<br>En el tercer lugar se encuentra el color: ", colores[2])

document.write("<br>Que pasa si quiero imprimir en pantalla lo siguiente: ", colores[10])

//que no está definido "undefined"

console.log(vacio[1])


//con el punto quiero contar cantidad de elementos
document.write("<br> Mi array de numeros tiene ", numeros.length, " Elementos")

document.write("<br>Los elementos de mi array de colores son: ")

for(let i=0; i<colores.length; i++){
    document.write("<br>En el lugar ", i, " del vector colores se encuentra el "+colores[i])
}

colores.pop() //me quita el ultimo elemento del array

console.log(colores)

colores.shift()
console.log(colores)

//comando sort sirve para ordenar alfabeticamente

colores.sort()
document.write("<br>los colores ordenados alfabeticamente ", colores)

colores.reverse()
document.write("<br> Ordena al inverso: ", colores)

//for in (recorres) for of (va guardando)

for (numero in numeros){
    console.log(numero)
    console.log(numeros[numero])
}

let vocales=["a","e","i", "o", "u"]

for(let vocal of vocales){
    console.log(vocal) 
}

//local storage y session storage

if(typeof(Storage)!== undefined) {

localStorage.setItem("Comisión", 22509)
localStorage.setItem("Horario","18.30")
console.log("Los datos se guardaron con exito!")
}else{
    console.log("Su navegador no soporte el localStorage")
}