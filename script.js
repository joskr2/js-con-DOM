// ==========================================
// 🚀 JAVASCRIPT + DOM
// ==========================================

console.log("🎯 Iniciando clase de JavaScript + DOM");
console.log(
	"📝 Abre las herramientas de desarrollador para seguir los ejemplos",
);

//  scope -> ambito , o espacio de accion

// 3 tipos de ambitos

// a. global -> por ejemplo las variables que viven en todo el archivo
// ej. var, function
// b. funcion -> se refiere a las variables que viven dentro de una funcion
// ej.funcion
// c. bloque -> variables que viven dentro de llaves {}
// ej. let y const

var nombreCompleto = "Ana";
var nombreCompleto = "Juan";

function ejemploAmbitoVar() {
	if (true) {
		var variableDentroDelIf = "Vivo fuera del if tambien";
	}
	console.log("Variable fuera del if: ", variableDentroDelIf);
}

ejemploAmbitoVar();

// declarar es crear una variable
// asignar es darle valor una variable

// esto es redeclarar, y no esta bueno
let edadPersona = 23;
// let edadPersona = 34

const PRECIO_PRODUCTO = 23.12;

// PRECIO_PRODUCTO = 34.1111

// CONST no funciona de la misma manera en los objetos

const configuraciones = {
	//key(llave):value(valor)
	tema: "Oscuro",
	idioma: "español",
};

Object.freeze(configuraciones); // esto para evitar que cambien cosas en el objeto

//objeto.propiedad -> notacion de punto, que se usa para acceder a las propiedades del objeto

// configuraciones.tema = 'Claro'

//esta es otra manera de acceder a las propiedades
//configuraciones["idioma"]

console.log(configuraciones);

// hoisting -> elevar, es decir, Javascript eleva a la parge superior del archivo a las variables declaradas con var y a las funciones declaradas con function, pero ELEVA SOLO LA DECLARACION, MAS NO EL VALOR

console.log("Uso de la variable antes de declararla", miVariableElevada);

var miVariableElevada = "Tengo un valor";

console.log("Variable", miVariableElevada);

console.log(miFuncionElevada(), "Undefined");

function miFuncionElevada() {
	return "Hola mundo soy una funcion con un valor";
}

console.warn(
	miFuncionElevada().toString,
	"Mi funcion elevado convertida a string",
);

// y regla no usar el == y != este solo compara valores
// en js usaremos siempre que queramos comparar valores === y !== y este compara valores y tipos

// es NaN -> signfica , not a Number, no es un numero
// y pasa cuando queremos convertor un valor a numero que no puede ser convertido

// ej '1' -> 1

// ej true -> NaN

const numero = "1";

console.log(Number(numero));

console.log(Number(undefined));

//titulo: string

//en los tipos primitivos como las cadena de texto:

const nombre = "valor";

const numero2 = 2;

// nombre es de tipo string -> con s minuscula

// pero si quiero referirme a las propieades del tipo en si mismo
// usare el objeto String, con S mayuscula , porque ese es que me permite acceder a ciertas funcionalidades

// en este caso Number , que viene desde Javascript , tiene una funcion para saber si un valor no es un numero , y como quiero acceder a esa funcionalidad uso el punto
const numeroString = !Number.isNaN(numero); // true

// ~p -? !p
// console.log(numeroString)
//  ! -> negacion  un string es number -> NO , entonces FALSE -> !false -> True

function sumar(a, b) {
	if (a > 0 && b > 0) {
		return a + b;
	}

	return "Hubo un error";
}

const sumaValida = sumar(2, 3);

const sumaNoValida = sumar(true, {});

console.log(sumaValida, "Suma valida");

console.log(sumaNoValida, "Sum No Valida");

// ejercicio
// vamos a hacer una funcion que nos permita saber si simos o no menores de edad e imprima un valor con eso

function esMayorDeEdad(edad = 0) {
	// const esUnNumeroValido = !Number.isNaN(edad) ? edad : 0;

	// const resultado = esUnNumeroValido >= 18 ? "Es mayor de edad" : "No lo es";
	// return resultado

	let mensaje = "";
	if (edad >= 18) {
		mensaje = "Eres mayor de edad";
		return mensaje;
	}
	mensaje = "No eres mayor de edad";
	return mensaje;
}

const miEdad = 21;
const quieroSaberSiPuedoIrDeRumba = esMayorDeEdad(miEdad);
console.log(quieroSaberSiPuedoIrDeRumba);

// arrays

// colecciones de datos

const mascotas = ["perro", "gato"];

// push me sirve para agregar un elemento al final del array
mascotas.push("pajaro");
mascotas.push("pez");

console.log(mascotas);

//pop me sirve para eliminar ek ultimo elemento del array
mascotas.pop();

const misMascotas = mascotas.map((mascota) => mascota.toLowerCase());
// includes me sirve para saber si tengo un elemento en mi array
const tengoPerro = misMascotas.includes("perro");

console.log(tengoPerro);

// for (let indice = 0; indice < misMascotas.length; indice++) {
//   console.log(misMascotas[indice]);
// }

// objetos

// coleccion de propiedades
// propiedad -> clave y valor

const datoEstudiante = {
	id: 1,
	nombre: "Pepito",
	apellido: "Perez",
	materias: ["materia1", "materia2", "materia3"],
	edad: 22,
	direccion: {
		calle: "Av avenida",
		ciudad: "ciudad",
		pais: "Pais",
	},
};
// las propiedades en los objetos son separadas por comas

// queremos acceder a una propiedad del objeto

//objeto.propiedad
const misMaterias = datoEstudiante.materias;

console.log(misMaterias);

// array vs objeto

// su principal diferencia esta en como guarda la data/informacion. Y es que los arrays las guardan de manera ordenada(indices), en cambios los objetos usan pripeidades, que no necesariamente siguen un orden



let miObjeto = {
  prop1:"prop1",
  prop2:"prop2",
  prop3
}

 let nuevoValor = miObjeto.prop3
 console.log(nuevoValor,"Nuevo valor")

 console.log(miObjeto.prop3, "Mi prop3 - ANTES");
 miObjeto.prop3 = "mi Nuevo valor"
 console.log(miObjeto.prop3, "Mi prop3 - DESPUES");


console.log(miObjeto.prop4,"PROP 4")

 console.log(miObjeto,"mi objeto actualizado")




let misNotas = [20,10,15]
// 20 ocupa la posicion 0
// 10 ocupa la posicion 1
// 2 ocupa la posicion 2

let primerElemento = misNotas[0]

