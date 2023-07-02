/*
    ¿Qué son Eventos?
    Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes en una web 
    y define el comportamiento de la página cuando estos se produzcan. 

    Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript 
    podemos definir qué queremos que ocurra cuando se produzcan ciertos eventos o situaciones.

    Para entender los eventos es necesario conocer algunos conceptos básicos:

        • Evento: Es algo que ocurre. Un suceso. Generalmente los eventos ocurren cuando el usuario interactúa con el 
        documento, pero podrían producirse por situaciones ajenas al usuario, como en el caso de que una 
        imagen no este disponible.

        • Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón o
        el envío de un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de JavaScript. 

        • Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta a un 
        evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de evento en concreto. 
        Una vez asociado el manejador a un tipo de evento sobre un elemento de la página, y cada vez que 
        ocurre ese tipo de evento sobre ese elemento en concreto, se ejecutará el manejador de evento asociado.
    
    Formas de manejar eventos:

        • Mediante atributos HTML: <button onclick="miFuncion()">Presiona Aquí!</button>

        • Mediante propiedades JavaScript: elemento.onclick = miFuncion(){ …código… }

        • Mediante addEventListener():  la forma más recomendable es hacer uso del método .addEventListener(), 
        el cuál es mucho más potente y versatil para la mayoría de los casos.

    Con el método .addEventListener() podemos añadir una "escucha" del evento indicado en el primer parámetro, 
    y en el caso de que ocurra, se ejecutará la función asociada indicada en el segundo parámetro.
*/


// Ejemplo de un evento mediante Atributos HTML - (en el archivo index2.html sobre el id="parrafo"):
function cambiarTexto(){
    parrafo.innerText = "Cambie por el evento de atributo HTML: onMouseOver"
};


// ¿Puede un elemento manejar multiples eventos?
// SI. Un elemento puede manejar multiples eventos.

function cambiarTexto2(){ 
    parrafo.innerText = "Cambiar de nuevo por el evento de atributo HTML: onMouseLeave" ;
};





// Ejemplo de un evento mediante Propiedades JavaScript - (en el archivo index2.html sobre el id="miBoton"):

// Seleccionamos el elemento
let miBoton = document.getElementById("boton");

// Asignacion de un evento.
miBoton.onclick = ()=> console.log("El mouse paso sobre el boton");



/*
    Algunos de los eventos mas usados por propiedades.
    onfocus: Se activa cuando el elemento gana el foco.
    onblur: Se activa cuando el elemento pierde el foco.
    onclick: Se activa cuando el usuario hace clic sobre el elemento.
    ondblclick: Se activa cuando el usuario hace doble clic sobre el elemento.
    onmousedown: Se activa cuando el usuario presiona el botón del ratón en un elemento.
    onmouseup: Se activa cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    onmouseover: Se activa cuando el usuario mantiene el puntero sobre un elemento.
    onmouseout: Se activa cuando el usuario mueve el puntero fuera de un elemento.
    onmousemove: Se activa cuando el usuario mueve el puntero del ratón sobre un elemento.
    onkeydown: Se activa cuando el usuario presiona una tecla.
    onkeyup: Se activa cuando el usuario libera la tecla.
    onkeypress: Se activa cuando el usuario presiona una tecla y la mantiene pulsada.
*/







// elemento.addEventListener()

// Seleccionamos el boton 2
let miBoton2 = document.getElementById("boton2");

// Asignacion de un escucha de evento.
// elemento.addEventListener("tipo_de_evento", manejador_de_evento);

// Funcion que se ejecuta cuando el mouse este sobre el elemento.
function cambiarFondo1(){
    // Elimino los estilos anteriores
    document.body.classList.remove("from-sky-400", "to-sky-900")
    
    // Añado nuevos estilos
    document.body.classList.add("from-yellow-400", "to-yellow-900");
}

// Funcion que se ejecuta cuando el mouse salga del elemento.
function cambiarFondo2(){
    // Elimino los estilos anteriores
    document.body.classList.remove("from-yellow-400", "to-yellow-900");

    // Añado nuevos estilos
    document.body.classList.add("from-sky-400", "to-sky-900")
}

// Añadimos las escuchas de evento.
miBoton2.addEventListener("mouseover", cambiarFondo2);
miBoton2.addEventListener("mouseleave", cambiarFondo1);


// Seleccionamos los botones para Deshabilitar y Habilitar.
let miBoton3 = document.getElementById("boton3");
let miBoton4 = document.getElementById("boton4");

// Asignamos la escucha estos botones.

// Boton de Deshabilitar usando removeEventListener.
miBoton3.addEventListener("click", ()=> miBoton2.removeEventListener("click", mostrartexto));

// // Boton de Habilitar.
miBoton4.addEventListener("click", ()=> miBoton2.addEventListener("click", mostrartexto));



/* 
    Algunos de los eventos mas usados por addEventListener.
    - focus: ocurre cuando el elemento gana el foco.
    - blur: Cuando el elemento pierde el foco.
    - click: ocurre cuando el usuario hace clic sobre el elemento.
    - dblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
    - mousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
    - mouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    - mouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
    - mouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
    - mousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.
    - keydown: ocurre cuando el usuario presiona una tecla.
    - keyup: ocurre cuando el usuario libera la tecla.
    - keypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
*/