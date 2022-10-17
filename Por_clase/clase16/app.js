//creacion de objeto, declaración

let perro ={
    nombre: "Firulais",
    edad: 5,
    color: "Negro"

//metodos (funcion dentro de un objeto)

    ladrar(){
        return this.nombre + "dice Waug"
    }

}

//Llamada al objeto creado

console.log(perro);
document.write("el nombre de mi perro es:", perro.edad);

//modificacion

perro.nombre="Pepito"
document.write("<br>El nombre de mi perro es:", perro.nombre);

//objetos con new object

let miAuto=new Object()

//una vez creado tenemos que asignarle propiedades

miAuto.marca="peugeot"
miAuto.tipo="207"
miAuto.modelo= 2014
miAuto.color="Rojo"

console.log(miAuto);
document.write("<br>Mi auto es un: ", miAuto.marca+ "<br>Tipo: " + miAuto.tipo+ "<br>Modelo: " +miAuto.modelo+ "<br>Color: " + miAuto.color);

//creacion de objetos mediantes clases

class Alumno {
    constructor(nombre, grupo, evaluacion){
        this.nombre = nombre
        this.grupo = grupo
        this.evaluacion = evaluacion
    }
}

//instanciar los distintos alumnos

let alumno1  = new Alumno("Juan Perez", 15, 9)
let alumno2  = new Alumno("Maria ", 15, 9)
let alumno3  = new Alumno("Ruben", 15, 9)

