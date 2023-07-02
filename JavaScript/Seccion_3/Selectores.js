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
let parrafos = document.getElementsByTagName("p");
console.log("Lista de parrafos seleccionados por nombre de etiqueta");
console.log(parrafos);

// Mostrar especificamente el elemento numero 2
console.log();


// Seleccion de multiples elementos mediante Name
let mis_spans = document.getElementsByName("miSpan");
console.log("Lista de spans seleccionados por propiedad nombre");
console.log(mis_spans);

// Mostrar especificamente el elemento numero 4
console.log();


// Seleccion de multiples elementos mediante ClassName
let misDivs = document.getElementsByClassName("miClase");
console.log("Lista de divs seleccionados por nombre de clase");
console.log(misDivs);

// Mostrar especificamente el elemento numero 6
console.log();