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
    console.log(primerSubtitulo.textContent,"PRIMER SUBTITULO");
    // @ts-ignore
    primerSubtitulo.style.color = "blue";
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
  // 2. este elemento tiene tres hijos
  // 3.quiero referirme al segundo hijo y cambiarle su contenido(texto)

  const contenedorElementos = document.querySelector(".contenedor-elementos");

  // const segundoHijo = document.querySelector(
  //   ".contenedor-elementos > :nth-child(2)"
  // );

  if (contenedorElementos) {
    console.log(contenedorElementos); // children me sirve para trabajar con los hijos del elemento, usualemnet suele ser un array(coleccion) de elementos
    const elementosHijos = contenedorElementos.children; // en los arrays los elementos tienen indices

    // ej. let arrayElementos = ['primerElemento','segundoElemento','tercerElemento']o
    // si quiero acceder al primer elemento dire algo asi como:
    // arrayElementos en la primera posicion:
    // arrayElementos[0]

    // y el segundo elemento?
    // arrayElementos[1]

    const segundoELemento = elementosHijos[1]; // el text conntent , me sirve para cambiar o leer el contenido(texto) del elemento
    segundoELemento.textContent = "ES UN NUEVO CONTENIDO";
  } else {
    console.log("No se encontro el contenedor de elementos");
  }

  const elementos = document.querySelectorAll("body");

  console.log(elementos);

  const miBody = elementos[0];

  console.log(miBody);

  const hijosMiBody = miBody.children;

  console.log(hijosMiBody);

  // el queryselectorall , me da como resultado una coleccion de elementos que coincida con el selector , en este caso ,
  // los elementos que tengan las clase subtitulo
  const subtitulos = document.querySelectorAll(".subtitulo");

  // console.log(subtitulos)

  // subtitulos.forEach((subtitulo, indice) => {
  //   const emojis = ["🙈", "🧞‍♂️", "😎", "🥸"];
  //   const emojiActual = emojis[indice] || "🫰";
  //   subtitulo.textContent = `${emojiActual} ${subtitulo.textContent}`;
  // });

  // el priemr valor , es el valor del elemento
  // y el seundo valor sera el indice de ese elemento
  // biome-ignore lint/complexity/noForEach: <explanation>

  if (subtitulos) {
    subtitulos.forEach((elementoSubtitulo) => {
      // quiero cambiarle el contenido a cada subtitulo
      // @ts-ignore
      // elementoSubtitulo.textContent = ` ${elementoSubtitulo.textContent.toUpperCase()}`;

      elementoSubtitulo.style.color = "red";

      // biome-ignore lint/correctness/noInvalidUseBeforeDeclaration: <explanation>
      // @ts-ignore
      const primeraLetra = elementoSubtitulo.textContent.charAt(0);

      //primeraLetra.styles = 'color:blue'

      // @ts-ignore
      const restoCadenaTexto = elementoSubtitulo.textContent.slice(1);

      // @ts-ignore
      elementoSubtitulo.textContent = primeraLetra + restoCadenaTexto;
    });
  } else {
    console.log("No se encontro el elemento");
  }
});
