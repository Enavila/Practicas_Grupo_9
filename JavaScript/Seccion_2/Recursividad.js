/*
    Recursividad: la recursividad es una función que se llama a sí misma. 
    Piensa en ello como una alternativa al bucle.
*/

function recursividad(){
    console.log("hola Mundo");
    recursividad();
}

// Ejecutamos la funcion
// recursividad(); //Para evitar un loop infinito es recomendable comentar esta linea




// Funcion recursiva que incrementa el valor de una variable hasta que llegue a 100.
let contador = 0;
// validacion();


function incremento(){
    // Aplico incremento unitario, es decir le sumo 1 a mi variable.
    contador++;
}

function detener(){
    alert(`Se detuvo el conteo por que el contador ahora vale: ${contador}`);
}

function validacion(){
    // Llamo a la funcion de incremento
    incremento();

    // Luego aplico una validacion que volvera a llamar la funcion si el numero es menor o igual que 100.
    if(contador <= 5){
        // Muestro el numero actual.
        alert(`El contador actual vale: ${contador}`);
        // Llamo a la funcion nuevamente.
        validacion();
    }else{
        // Si llego supero los 100 muestro el siguiente mensaje.
        detener();
    }
}



/*
    ¿En que situaciones usar las funciones recursivas?
    Las funciones recursivas se usan en situaciones en las que un problema puede ser dividido en 
    subproblemas más pequeños y similares al problema original.

    Por ejemplo: tienes una tarjeta de metro y 10$ de saldo,
    cada pasaje cuesta 1$ y es descontado por una funcion de deduccion, tras 10 viajes tu tarjeta se queda 
    sin saldo, en este momento el sistema que realiza el descuento de saldo te ofrecera la opcion de 
    realizar una recarga, en este momento la funcion de decuccion llama una funcion diferente
    llamada recargar para el proceso de agregar saldo.
    tras realizar la recarga, esta funcion(recargar) llamara la funcion de decuccion para cobrar tu 
    proximo pasaje.

    En general, las funciones recursivas son útiles para problemas que tienen una estructura 
    de llamadas en cascada, mientras que los bucles y estructuras de datos son más adecuados 
    para problemas lineales.
*/


/* -------- funcion de deduccion de saldo (Metro) -------- */

let saldo = 2;

deduccion();


function recargar(){
    let monto = prompt("Ups 😮, parace que no tienes saldo suficiente para hacer el proximo viaje.\nIngresa el monto a recargar");
    saldo = monto;
    deduccion();
}

function deduccion(){
    // Validamos el saldo actual, si es menor o igual que 0 se llamara a la funcion "recargar".
    if(saldo >= 1){
        // Aplicamos la deduccion.
        // saldo = saldo - 1;
        saldo--;

        // Mostramos el saldo luego del descuento
        alert(`Descuento exitoso, Feliz viaje!\nTu saldo actual es: ${saldo}$`);
        
        // Realizamos una pregunta para determinar si el cliente desea volver a viajar.
        let decicion = prompt("Deseas realizar otro viaje? (si/no)");

        // Validamos la respuesta del usuario y realizamos una accion en consecuencia.
        if (decicion == "si"){
            deduccion();
        }else{
            alert("Gracias por viajar con nosotros!");
        }
    }else{
        recargar();
    }
};




/* Practica para realizar en casa:

    Realiza el alagoritmo de un cajero automatico, que permita:

    1: Ver el saldo actual.
    2: realizar retiros.
    3: realizar depositos.
    4: realizar transferencia a otra cuenta.
    5: cerrar el cajero.

    Todas estas acciones deben tener una validacion al final que permita determinar 
    si se ejecuta otra accion o se sale del sistema.


    Nota: determina si debes usar switch-case o if-else.
    Nota2: usa prompt para pedir al usuario que ingrese una opcion.
    Nota3: usa alert para mostrar un mensaje al usuario, o console.log() para mostrar un mensaje en la consola.

    Tip: si usas ternario tu codigo no funcionara mejor, pero tendra mejores practicas y mas optimizacion en rendimiento.
*/