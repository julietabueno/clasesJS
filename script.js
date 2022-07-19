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

//const alumnos = ["Camilo", "Julieta", "Santiago", "Luca"]

//PARA AGREGAR ELEMENTOS
/*
//agrego elementos al final de array
alumnos.push("Brandon")
//------------------------------------
//no se recomienda el unshift
alumnos.unshift("Francisco")// agrego elementos al principio del array pero modifica los indices de los elementos.

//PARA ELIMINAR ELEMENTOS
//no se usa porque tambien modifica los indices
alumnos.shift()

//alumnos.pop()//elimina el ultimo elemento

//normalmente se crea guardando el dato
let alumnoBrandon = alumnos.pop()


console.log(alumnoBrandon)
console.log(alumnos)

 const tutores = ["Samuel"]
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

//CONCATENAR

//const alumnos2 = ["Pablo", "Lucas", "Tino"]

//const alumnosTotales = alumnos.concat(alumnos2)//podria poner varios concat dentro de otros, concat(alumnos2.concat(alumnos3))
//Por ejempolo en mostrar todo, se usarian las concatenaciones de todos los elementos

/* console.log(alumnosTotales)

 */
/*
//METODO SLICE
//devuelve una pequeña copia de un  array
console.log(alumnosTotales.slice (4,9))// desde el id 4, hasta el ID 8 inclusive


//METODO INCLUDES //Sirve para busqueda. Returna True or false. Sirve para condicion de si hago o no una tarea
console.log(alumnosTotales.includes("Lautaro"))//return False
console.log(alumnosTotales.includes("Miguel"))//return True

//METODO REVERSE. (Metodo destructivo)
//Invierte el orden de los elementos
console.log(alumnosTotales.reverse())
 */


//-------------------------------------------------
//ARRAY DE OBJETOS
/* class Animal {
    constructor(id, nombre, color, raza,cachorros){
        this.id = id
        this.nombre = nombre
        this.color = color
        this.raza = raza
        this.cachorros = cachorros
    }
}

const perro1 = new Perro(1, "Cual", "Negro", "Ovejero",["Cualcito", "Pirata", "Firulais","Hector","Tarzan"])
const perro2 = new Perro(1, "Grinch", "amarillo", "Delmon",["Negrito", "Blue"])
const perro3 = new Perro(1, "Fatiga", "Marron", "Indefinido",[])
const perro4 = new Perro(1, "Ayudante de Santa", "Blanco", "Maltes",["Batman","Superman","Robin"])


const perros = [perro1, perro2, perro3, perro4]

console.log(perros[2].raza)

 */


//------------CLASE 7 - 
/*

const impuestoPais = (producto) => producto * 1.30
const impuestoRetenciones = (producto) => producto * 1.35
const impuestoIVA = (producto) => producto * 1.21
const impuestoX = (producto) => producto * 1.10

function calcularImpuestos(producto) {
    return producto + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIVA(producto) + impuestoX(producto)
}

let precioFinal = calcularImpuestos(producto) //calcularImpuestos(100) para probar

console.log(precioFinal)


 */

//Ejecutar una funcion en los parametros de otra funcion
/*
class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;

    }
}
 */

//const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese la edad")), parseFloat(prompt("Ingrese el sueldo")))

/*
console.log(persona1)
 */

//METODOS DE BUSQUEDA Y TRANSFORMACION

/*
const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000)
const persona2 = new Persona(2, "Maria", "Martinez", 22, 15000)
const persona3 = new Persona(3, "Pedro", "Parker", 28, 12000)
const persona4 = new Persona(4, "Fernanda", "Fernandez", 32, 18000)
const persona5 = new Persona(5, "Carlos", "Carles", 34, 19000)


const personas = [persona1, persona2, persona3, persona4, persona5]


 *///-----forEach()
//const personaArray = (persona) => console.log(persona)
/* personas.forEach(persona => {
    persona.sueldo *= 1.30
    console.log(persona)
})

 */
//------find()
//retorna el primer elemento encontrado, si no encuentra, retorna UNDEFINED
/* nombreABuscar = prompt("Ingrese un nombre")
apellidoABuscar = prompt("Ingrese un apellido")
 *//*
console.log(personas.find(persona => persona.nombre == nombreABuscar && persona.apellido == apellidoABuscar))

*/

//------filter()
//retorna todos los elementos encontrados, si no encuentra, retorna UNDEFINED

//const personasFiltradas = personas.filter(persona => persona.sueldo > 12000)

//console.log(personas.filter(persona => persona.sueldo > 12000))
/* personasFiltradas.forEach(persona => {
    console.log(persona)
})


//SOME()
//returna true or false/*
let consulta = personas.some(persona => persona.sueldo > 20000)


if (consulta) {
    console.log(personas.filter(personas => personas.sueldo > 15000))
} else {
    console.log("No hay personas con sueldo mayor a 15000")
}
 */


///MAP(
//Solo en casos de bases muy grandes
//modifica todos los elementos del array que yo le pida

//const sueldos = personas.map(persona => personas.sueldo)
/*
let acumulador = 0

sueldos.forEach(sueldo => {
    acumulador += sueldo
})

console.log(sueldos)
 */
//reduce
//me ahorro lineas de codigo, para sacar un resultado. Reduce un array de numeros a ua sola variable
//toma el acumulado y realiza la operacion con el actual 
/* const sueldosAcum = sueldos.slice(0, 3)

let acumulador = sueldosAcum.reduce((prev, act) => prev + act, 0)

//promedio
console.log(acumulador / sueldos.length)
 */

//SORT()\

//sirve para ordenar los elementos
/* const sueldos = personas.map
    (persona => persona.sueldo)

console.log(sueldos)
console.log(sueldos.sort((a, b) => b - a))


console.log(sueldos.sort((a, b) => a - b))


 */

//=========CLASE DOM
//estructura jerarquica para cada uno de los objetos del navegador. Padres e hijos
//nodo elemento es estructura jerarquica, nodo plano es texto (p)
//tipos de nodos: document, element, attr, text, comment

//getElementoByID me devuelve el primer elemento qeu encuentra, como el find .
//getElementsByClasName("parrafos")[0] me devuelve todos los elementos que cumplen con la clase

//HTMLCollection es un tipo de array. con {} en vez de []. Normalmente se recorre con un for

//childrenNodes devuelve todos los elementos
//children devuelve los elementos html

//para cambiar el texto de un html, se usa nodo.innerText = "texto que quiero que aparezca"
//innerHTML = "<p> Hola Coders</p>" reemplaza el parrafo
//innerHTML += "<p> Hola Coders</p>" agrega un nuevo parrafo

//creo y recorro un array con productos, que van a salir en el html

//--------------------------------------------------------------
//COPIAR ACA EL CODIGO DEL PROFE DE LA CLASE DE HOY
//--------------------------------------------------------------
/*
productos.forEach(productoArray => {
    //=+hace que no se pisen los valores, y a parezcan uno debajo del otro
    divProductos.innerHTML += `
    <div class="card productos" id="producto${productoArray.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${productoArray.nombre}</h5>
                <p class="card-text">Marca: ${productoArray.marca}</p>
                <p class="card-text">Precio: $${productoArray.precio}</p>
                <p class="card-text">Stock: ${productoArray.stock}</p>
        </div>
        </div>
     `
})


        <div id ="producto ${productoArray.id}" class = "productos">
            <p>Nombre: ${productoArray.nombre}</p>
            <p>Marca: ${productoArray.marca}</p>
            <p>Precio: ${productoArray.precio}</p>
            <p>Stock: ${productoArray.stock}</p>
        </div>
     */

//====================CLASE 10 ============================================

const botonDarkMode = document.getElementById("botonDarkMode")
const botonDLightMode = document.getElementById("botonLightMode")


let darkMode
//consulto si el localStorage.getItem("theme"), si ya extiste, consulta el theme elegido, si no existe, lo creo (else)
if (localStorage.getItem("theme")) {
    darkMode = localStorage.getItem("theme")
} else {
    localStorage.setItem("theme", "light")
}

if (darkMode == "dark") [
    document.body.classList.add("darkMode")
]
botonDarkMode.addEventListener("click", () => {
    document.body.classList.add("darkMode") //añado clase al modo
    localStorage.setItem('theme', "dark")
})

botonLightMode.addEventListener("click", () => {
    document.body.classList.delete("darkMode")   //quito la clase
    localStorage.setItem('theme', "light")
})