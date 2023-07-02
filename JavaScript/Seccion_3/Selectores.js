/*
    ¿Que son selectores?
    Los selectores permiten seleccionar elementos del DOM (elementos HTML) para manipularlos en una página web.
    
    los selectores comunes son:
    
    Seleccion individual
    .getElementById("id"): selecciona un elemento con un id específico.

    Seleccion multiple
    .getElementsByName("name"): selecciona todos los elementos que contengan un name especifico.
    .getElementsByClassName("class"): selecciona todos los elementos con una clase específica.
    .getElementsByTagName("div"): selecciona todos los elementos con un nombre de etiqueta específico.

    Sintaxis:

    La palabra reservada "document" hace referencia al objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.


    Seleccion individual
    document.getElementById("id");

    Seleccion multiple
    document.getElementsByName("name");
    document.getElementsByClassName("mi_clase");
    document.getElementsByTagName("div");

}

    Los selectores se emplean junto a otros metodos para realizar diferentes acciones.
*/


// Guardando elemento de id "titulo" en una variable llamada miTitulo
// esta variable se usa en varias ocaciones mas adelante.

let miTitulo = document.getElementById("titulo");
console.log(miTitulo);



// Seleccion de multiples elementos mediante tagName
let misParrafos = document.getElementsByTagName("p");
console.log("Lista de parrafos seleccionados por nombre de etiqueta");
console.log(misParrafos);

// Mostrar especificamente el elemento numero 2
console.log(`El elemento numero 2 de la lista de parrafos es: `);
console.log(misParrafos[1]);





// Seleccion de multiples elementos mediante Name
let mis_spans = document.getElementsByName("miSpan");
console.log("Lista de spans seleccionados por propiedad nombre");
console.log(mis_spans);

// Mostrar especificamente el elemento numero 4
console.log(`El elemento numero 4 de la lista de spans es: `);
console.log(mis_spans[3]);





// Seleccion de multiples elementos mediante ClassName
let misDivs = document.getElementsByClassName("miClase");
console.log("Lista de divs seleccionados por nombre de clase");
console.log(misDivs);

// Mostrar especificamente el elemento numero 6
console.log(`El elemento numero 6 de la lista de divs es: `);
console.log(misDivs[5]);








//Medotos usados con selectores:

// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
console.log( miTitulo.getAttribute("class") );

// Aqui podemos verificar si contiene las clases adecuadas
if(miTitulo.getAttribute("class") === "text-lg text-slate-800 font-bold"){
    console.log("El elemento contiene las clases adecuadas");
}else{
    console.log("El elemento NO contiene las clases adecuadas");
}



// Limpio pantalla para no ver tanta informacion en consola.
console.clear();






// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.

// Seleccionamos el input que vamos a editar
let miInput = document.getElementById("miInput");
miInput.setAttribute("placeholder", "Placeholder añadido con js");





// elemento.innerText: Permite ver y modificar el texto de un elemento, usualmente p,h1,h2,span, etc...

// Mostramos el texto interno del H1 ANTES de reasignarlo. 
console.log(miTitulo.innerText);

// Reasignamos el texto interno del H1
miTitulo.innerText = "Aprendiendo a usar Selectores con JavaScript en Lexpin"

// Mostramos el texto interno del H1 DESPUES de reasignarlo
console.log(miTitulo.innerText);