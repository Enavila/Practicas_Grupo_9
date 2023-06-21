/******  FUNCIONES  ******/

/*
    las funciones son bloques de código reutilizables que pueden ser llamados o invocados para llevar a cabo una tarea específica. 
    Se utilizan para dividir el código en partes más pequeñas y manejables, lo que facilita la escritura, 
    lectura y mantenimiento del código.

    Se definen mediante la palabra clave "function" seguida de un nombre y un par de paréntesis 
    que pueden contener argumentos si es necesario. A continuación, se utiliza un bloque de código encerrado entre llaves {} 
    para definir las instrucciones que se ejecutarán cuando la función sea llamada.

    Sintaxis
        1- Palabra reservada (Function (F. Declarativa) let/const (F. de Expresión)).
        2- Nombre de Funcion (Para las F. de Expresión se suelen dejar como anonimas). 
        3- Parentesis () donde se indican los parametros.
        4- Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con ;

    Tipos de funciones:
        - Funciones de expresión
        - Funciones declarativas
        - Funciones anonimas
        - Funciones de flecha (arrow functions)
*/


// Funcion sin parametros
function saludar(){
    console.log("Hola Mundo");
};

// Llamando la funcion
saludar();
saludar();
saludar();




// Funcion con parametros
function saludar2(nombre, apellido){
    console.log(`Hola, ${nombre} ${apellido}, ¿Como estas?`);
}

// Llamando la misma funcion(saludar2) varias veces con valores diferentes
saludar2("Juan", "Jaure");
saludar2("Semiramis", "Hernandez");
saludar2("Eduardo", "Avila");
saludar2("Genesis", "Piñango");
saludar2("Luis", "Zambrano");
saludar2("Ismael", "Zorrilla");
saludar2("Diego", "Rodriguez");


// Ejemplo 2
function procesadorDeJugo(fruta1, fruta2){
    return(`Ahora tengo jugo de ${fruta1} con ${fruta2}`);
};

console.log(procesadorDeJugo("Manzana", "Pera"));
console.log(procesadorDeJugo("Mango", "Guayaba"));
console.log(procesadorDeJugo("Fresa", "Naranja"));
console.log(procesadorDeJugo("JavaScript", "HTML"));


let frutaUsuario1 = prompt("Ingresa una fruta para el jugo");
let frutaUsuario2 = prompt("Ingresa otra fruta para el jugo");


// Ejemplo de uso de condicional if-else.
if(frutaUsuario1 == "Mango"){
    alert(procesadorDeJugo(frutaUsuario1, frutaUsuario2));
}else{
    alert("No se puede hacer jugo que no sea de manzana con otra fruta");
}


// Ejemplo de uso de Operador ternario (Condicional).
(frutaUsuario1 == "Mango") 
    ? alert(procesadorDeJugo(frutaUsuario1, frutaUsuario2))
    : alert(procesadorDeJugo(frutaUsuario1, frutaUsuario2))







// Calculadoras basicas

// Funcion con parametros para sumar 2 valores entre si
function sumar(numero1, numero2){
    console.log(`Primer numero ingresado: ${numero1}`);
    console.log(`Segundo numero ingresado: ${numero2}`);
    return numero1 + numero2;
};


let total = sumar(10, 20);
console.log(`El total de la suma es: ${total}`);

let total2 = sumar(100, 850);
console.log(`El total de la suma es: ${total2}`);


// Funcion con parametros para restar 2 valores entre si
function restar(numero1, numero2){
    console.log("Primer numero ingresado: " + numero1);
    console.log("Segundo numero ingresado: " + numero2);
    return numero1 - numero2;
};






/* ----------  EJERCICIO Hoisting ------------

    Realizar una funcion que permita encontrar el tipo de dato del parámetro "dato" 
    y retornarlo desde la función "tipoDeDato".

    El parámetro "dato" debe ser distinto en cada llamada a la función "tipoDeDato".
*/


// console.log("Mi nombre es" + nombre2);

//ERROR de Hoisting al llamar variable antes de declarar (Solo en variables)
// console.log(nombre2);
// let nombre2 = "Diego";

// Se declara una variable pero no se le asigna ningun valor.
let variable;

//Luego llama la funcion de las siguientes maneras:
tipoDeDato(1);
tipoDeDato("Diego");
tipoDeDato(["Diego", "Juan", "Ismael"]);
tipoDeDato(true);
tipoDeDato( {"nombre":"Diego"} );
tipoDeDato(variable);
tipoDeDato(null);

/* Debes obtener los siguientes resultados:
    'number'
    'string'
    'object'
    'boolean'
    'object'
    'undefined'
    'object' (bug en ECMAScript, debería ser null);
    
    Informacion sobre null: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null
*/


function tipoDeDato(parametro){
    // typeof es una funcion de javascript que retorna el tipo de dato de un valor.
    console.log(typeof parametro);
}