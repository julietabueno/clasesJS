// Booklet
// ------------------------------------
// Actividad 1

/* let nombre = "Homero";
let apellido = "Simpsons";
let edad = "39";

console.log(nombre);
console.log(apellido);
console.log(edad); */

// ------------------------------------
// Actividad 2


/* const ciudad1 = "Springfield";
const ciudad2 = "Shelbyville";
const ciudad3 = "Capital City";
const ciudad4 = "Cypress Creek";
const ciudad5 = "Ogdenville";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5); */

// ------------------------------------
// Actividad 3

/* let persona = "Bart Simpson";
let domicilio = "742 Evergreen";
let pais = "USA";
let nacimiento = "02-11-70";
const codigo = "B47U89RE243";
let carnet = "Codigo: " + codigo + " " +
    "Nombre: " + persona + " " +
    "Pais: " + pais + " " +
    "Nacimiento: " + nacimiento + " " +
    "Domicilio: " + domicilio;


    console.log(carnet) */

// ------------------------------------
// Actividad 4
/* 
let integrante1 = prompt ('INGRESAR 1er INTEGRANTE');
let integrante2 = prompt ('INGRESAR 1er INTEGRANTE');
let integrante3 = prompt ('INGRESAR 1er INTEGRANTE');

 */





// Clase 3

//para mostrar numeros del 1 al 1000, hacemos un ciclo de repeticion
/* console.log(3) */

//sintaxis sugar para simplificar codigo i = i+1 se puede poner  como i +=1 o i++, todas van a hacer lo mismo

/* for (let i = 1; i <= 1000; i++) {
    console.log(i);
}

 */
/* 
//para hacer de 2 en 2
for (let i = 1; i <= 50; i = +2) {
    console.log(i);
    if (i === 50) {
        break
    }
    console.log(i);
}


//mostrar numeros impares 2 / 2 = 1 resto = 0
for (let i = 1; i <= 50; i = +2) {
  
    if (i % 2 === 0) {
        continue
    }

    console.log(i);
}


//mostrar numeros pares 3 / 2 = 0 resto = 1
for (let i = 1; i <= 50; i = +2) {
  
    if (i % 2 !== 0) {
        continue
    }

    console.log(i);
}
*/


/* let acumulador = 0

//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10


for (let i = 1; i <= 100; i++) {
    acumulador += i
}
console.log(acumulador) */

//generar ciclo while que corte en break

/* let repetir = true

while (repetir) {
    let palabra = prompt("ingrese NO para terminar").toLowerCase();
    if (palabra == 'no'){
        break //     repetir = false
    }
} */



/* let repetir = true

while (repetir) {
    let palabra = prompt("ingrese NO para terminar").toLowerCase();
    if (palabra == 'no'){
        repetir = false
    }
}

 */

//---------------calculadora
/* 
let numero1, numero2, operacion

//isNaN(numero) = verdadero si numero es Nan, falso si no

do {
    numero1 = parseFloat(prompt('Ingrese un numero'))
    numero2 = parseFloat(prompt('Ingrese otro numero'))
    operacion = prompt("Ingrese una operacion (+, -, *, /)")
}
while (isNaN(numero1) || isNaN(numero2)) 


console.log(numero1)


switch (operacion) {
    case "+":
        alert(numero1 + numero2)
        break
    case "-":
        alert(numero1 - numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    default:
        alert("Operacion no valida")
        break
} */





//clase 4 - FUNCIONES

/* function saludar (){
    console.log("Hola, te estoy saludando!")
}

saludar() */

/* let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese un numero"))


//delcaro como valor predeteriado 0 para evitar errores
function sumar(num1 = 0, num2 = 0) { //num 1 y num2 son variables locales, no importa si se llaman igual que las de afuera
    return num1 + num2
}


let resultado = sumar(numero1, numero2)

console.log(resultado) */


//otra funcion

/* function saludar (nombre){
    //return "Hola, me llamo " + nombre + " y te estoy saludando"
    return `Hola, me llamo ${nombre} y te estoy saludando`
}

let cadena = saludar (Julieta)
console.log(cadena) */


/* const IVA = 1.21

function calcularIVA( precioProducto) {
    return precioProducto * IVA
}


console.log(calcularIVA(100)) */


//Funciones flecha o anonimas


/* function sumar(num1, num2){
    return num1 + num2
}

function resatr(num1, num2){
    return num1 - num2
}
function dividir(num1, num2){
    return num1 / num2
}
function multiplicar(num1, num2){
    return num1 * num2
}

//Funcion anonima
const sumar = function (num1,num2){
    return num1 + num2
&

 */


//FUncion flecha

/* const sumar = (num1, num2) => num1 + num2

console.log(sumar)
 */



//CLASE 6 - ARRAYS
/* 
//Declaracion de arrays
const valores = []//vacio, para cargar valores mas adelante, por ejemplo carrito de compras
const cosas = [true, 56, "Hola", false, "Chau"] //datos ingresados por el usuario

console.log(cosas[2]) //Hola, que es ID = n-1

for (let i = 0; i < cosas.length; i++) {
    console.log(cosas[i])//i = a cosas[0], cosas[1], cosas[2].... cosas [4]
} */
//METODOS Y PROPIEDADES
//LENGTH, me devuelve la cantidad de elementos y sirve, por ejempolo para saber la cantidad de veces que se ejecuta un ciclo FOR

const alumnos = ["Camilo", "Julieta", "Santiago", "Luca"]

//PARA AGREGAR ELEMENTOS

//agrego elementos al final de array
alumnos.push("Brandon")
//------------------------------------
//no se recomienda el unshift
alumnos.unshift("Francisco")// agrego elementos al principio del array pero modifica los indices de los elementos.
/* 
//PARA ELIMINAR ELEMENTOS
//no se usa porque tambien modifica los indices
alumnos.shift()

//alumnos.pop()//elimina el ultimo elemento

//normalmente se crea guardando el dato
let alumnoBrandon = alumnos.pop()

*/
console.log(alumnoBrandon)
console.log(alumnos)

/* const tutores = ["Samuel"]
console.log(tutores.shift())
console.log(tutores) //me devuelve undefined

 */
//

/* 
//splice - para eliminar elementos en cualquier ubicacion
alumnos.splice(3, 3) //ubicacion, cantidad a eliminar


// elimino todos los elementos
alumnos.splice(0, alumnos.length)


//INDEXOF 
//Sirve para obtener el indice de un elemento, depende lo que ingrese coo parametro

let nombreEliminar = prompt("Ingrese nombre a eliminar")

let indice = alumnos.indexOf(nombreEliminar)


if (indice != -1) {
    alumnos.splice(indice, 1)
} else {
    alert("Usuario no encontrado")
} */

/* 
//JOIN
//toma todos los elementos de un array y los transforma a strings, por ejemplo, separados por ,

console.log(alumnos.join(","))

 */

