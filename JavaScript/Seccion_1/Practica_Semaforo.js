/* ACTIVIDAD - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    VERDE, AMARILLO, ROJO.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: 
        Elige un color para iniciar:
            1) VERDE
            2) AMARILLO
            3) ROJO
            OTRO) Opcion invalida


    Luego crea otro mensaje en pantalla que muestre una situacion con el color ingresado previamente
    y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        El semaforo esta de color ROJO, ¿Que desea hacer?
            1) Pasar normalmente
            2) Acelerar
            3) Esperar
            OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    Si la luz es VERDE evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.
    
    



    Si la luz es AMARILLO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.





    Si la luz es ROJO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta invalida.


    PISTA: en algun momento necesitaras usar if y AND/&&
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/



// Creamos una variable que mostrara un mensaje y almacenara un valor.
let color = prompt(`
Escribe un color para iniciar:
    1) Verde 🟢
    2) Amarillo 🟡
    3) Rojo 🔴
    OTRO) Opcion invalida`
);

// Verificamos si la informacion se recibe correctamente
// console.log("Ingresaste: " + color);
alert(`Ingresaste: ${color}`);


// Aplicamos una condicion para que en caso de que la respuesta no sea la esperada diga opcion invalida
if(color != "Verde" && color != "Amarillo" && color != "Rojo") {
    alert("Opcion NO valida");
} else {
    // Creamos una variable que mostrara un mensaje generando una situacion con el color ingresado.
    let accion = prompt(`
    El semaforo esta de color ${color}, ¿Que desea hacer?
        Ingrese 1 para: Pasar normalmente
        Ingrese 2 para: Acelerar
        Ingrese 3 para: Esperar
        Cualquier otra opcion: Opcion invalida`
    );


    if(accion != 1 && accion != 2 && accion != 3) {
        alert("Opcion NO valida");
    }else{
        alert(`El semaforo esta de color ${color}, elegiste: ${accion} \nPreparando respuesta...`);

        // Evaluamos las respuestas y mostramos el resultado.
        switch(color){
            case "Verde":
                if(accion == 1){
                    alert("Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
                }else if(accion == 2){
                    alert("Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
                }else if(accion == 3){
                    alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞");
                }
                break;
            
            case "Amarillo":
                if(accion == 1){
                    alert("Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌");
                }else if(accion == 2){
                    alert("Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁");
                }else if(accion == 3){
                    alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞");
                }
                break;
            
            case "Rojo":
                if(accion == 1){
                    alert("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞");
                }else if(accion == 2){
                    alert("Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌");
                }else if(accion == 3){
                    alert("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁");
                }
                break;
            default:
                alert("Opcion NO valida");
        };
    };
};

