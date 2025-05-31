// metodos para manipular el DOM
// getElementById() -> busco un elemento por su id(unico)
// querySelector() -> Buscar por selectores, por ejemplo los de css
// querySelectorAll() -> Buscar multiples elementos
// getElementsByClassName() ->  Buscar ELEMENTO - S(elementos - en plural)
// getElementsByTagName() -> Buscar por etiqueta

// cuando hablamos de buscar -> nos referimos a navegar por nuestro HTML y/o CSS para con Javascript encontrar ese/esos elemento(s)

// el addeventlistener es un metodo del document(HTML), que va a estar "atento" a que pase algo(evento)

// entonces el addEventListener es una funcion(metodo), que recibe dos parametros 1. el nombre del evento que queremos escuchar, y una funcion anonima o flecha , que es lo que se va a ejecutar

document.addEventListener("DOMContentLoaded", () => {
  console.log("El DOM ha sido correctamente cargado por el navegador!!!");

  //1. Quiero encontrar en mi Documento(HTML), a un elemento(nodo), que tiene un id titulo-principal

  const tituloPrincipal = document.getElementById("titulo-principal");

  // vamos a asegurarnos con un if , que ese elemento existe
  if (tituloPrincipal) {
    console.log(tituloPrincipal);

    // es para el contenido
    const contenidoDelTitulo = tituloPrincipal.textContent;

    console.log(contenidoDelTitulo);

    tituloPrincipal.textContent = "ES UN NUEVO TITULO DESDE JAVASCRIPT";

    // es para saber que tipo de elemento es , en este caso es un H1
    const tipoDeElemento = tituloPrincipal.tagName;

    console.log(tipoDeElemento);
  } else {
    console.log("No se encontro el elemento del titulo principal");
  }

  const primerSubtitulo = document.querySelector(".subtitulo");

  if (primerSubtitulo) {
    console.log(primerSubtitulo.textContent);
  } else {
    console.log("No se encontro el primer subtitulo");
  }

  const parrafo = document.querySelector("p");

  if (parrafo) {
    console.log(parrafo.tagName);
  } else {
    console.log("No se encontro el parrafo");
  }

  const primerElementoEnlaceMenu = document.querySelector(".menu-navegacion a");

  if (primerElementoEnlaceMenu) {
    console.log(primerElementoEnlaceMenu.textContent);
  } else {
    console.log("No se encontro el elemento");
  }

  // mini asignacion
  // 1.en nuestro documento tenemos un elemento que se llama contenedor-elementos
  // 2. este elemnto tiene tres hijos
  // 3.quiero referirme al segundo hijo y cambiarle su contenido(texto)
});
