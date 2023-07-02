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



// Ejemplo 2: Modificar el texto de un un parrafo en una lista de parrafos.
misParrafos[4].innerText = "Aprendiendo a usar Selectores con JavaScript en Lexpin"





// elemento.style: permite acceder y manipular las propiedades CSS del elemento seleccionado.

misParrafos[4].style.color = "skyblue";
misParrafos[4].style.fontSize = "20px";
misParrafos[4].style.fontWeight = 900;






// elemento.classList: Rermite hacer multiples acciones con la propiedad class, 
// tales como: agregar(add), eliminar(remove) y verificar(contains) 
// si el elemento seleccionado contiene las clases indicadas.

// Añadimos una nueva clase al elemento seleccionado.
misParrafos[4].classList.add("parrafoEspecial");


// Verificamos si el elemento tiene la clase.
console.log( 
    misParrafos[4].classList.contains("parrafoEspecial") 
        ? "El elemento contiene la clase parrafoEspecial" 
        : "El elemento NO contiene la clase parrafoEspecial" 
);


// Eliminar una clase.
misParrafos[4].classList.remove("parrafoEspecial");


// Verificamos despues de eliminar si el elemento aun tiene la clase.
console.log( 
    misParrafos[4].classList.contains("parrafoEspecial") 
        ? "El elemento contiene la clase parrafoEspecial" 
        : "El elemento NO contiene la clase parrafoEspecial" 
);






// elemento.innerHTML: Permite modificar el contenido de un elemento.
document.getElementById("caja").innerHTML = `
<h1>Esto es una caja</h1>
<div class="font-bold">
    <p>Esto es un parrafo creado con js</p>
    <p>Esto es otro parrafo creado con js</p>
</div>
<button id="boton">Click</button>`;






// document.createElement("nombre_de_etiqueta"): Permite crear un elemento (sin asignacion) en el DOM.

// elemento.appendChild: agrega un nodo hijo a un elemento seleccionado.

// Creamos un div y parrafo.
let nuevoDiv = document.createElement("div");
let nuevoParrafo = document.createElement("p");
let nuevoParrafo2 = document.createElement("p");


//  Asignamos el contenido al parrafo.
nuevoParrafo.innerText = "Aprendiendo a usar Selectores en Lexpin";
nuevoParrafo2.innerText = "Aprendiendo a usar Selectores con JavaScript en Lexpin";

// Añadimos el parrafo al div que creamos.
nuevoDiv.appendChild(nuevoParrafo);
nuevoDiv.appendChild(nuevoParrafo2);

// Añadimos el div que contiene ahora un parrafo al body.
document.body.appendChild(nuevoDiv);





// Eliminar un nodo(Elemento hijo).
nuevoDiv.removeChild(nuevoParrafo);