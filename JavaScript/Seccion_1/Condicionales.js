/*
    Una expresión condicional es un conjunto de instrucciones que evalúan una expresión
    y solo se ejecutarán si dicha expresión es verdadera. 
    JavaScript admite dos expresiones condicionales: (if...else) y (switch).
*/

//if (Si)
// prompt: es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador.
let numero = prompt("Ingresa un numero para determinar si es par")

if(numero % 2 == 0){
    alert("El numero es par");
}



//if-else (Si/ De lo contrario)
let edad = prompt("Ingresa tu edad")
if(edad >= 18){
    alert("Es mayor de edad")
}else{
    alert("Es menor de edad")
}


// if-else if-else (Si/ De lo contrario Si/ De lo contrario)
let numero2 = prompt("Ingresa un numero para determinar si es positivo, negativo o neutro")
if(numero2 > 0){
    alert("Es positivo");
}else if(numero2 == 0){
    alert("Es cero");
}else if(numero2 < 0){
    alert("Es negativo");
}else{
    alert("Error - Ingrese un numero");
}


// Operador Ternario (Si/ De lo contrario)
let nombre = prompt("Ingresa tu nombre");
(nombre === "Diego") 
    ? alert("El nombre coincide") 
    : alert("El nombre no coincide");



// Experimento: is-else if- else con Ternario
let apellido = prompt("Ingresa tu apellido");
(apellido === "Perez")
    ? alert("El apellido Perez coincide")
    : (apellido === "Gonzalez")
        ? alert("El apellido Gonzalez coincide")
        : alert("El apellido NO COINCIDE");



/*Switch: Permite ejecutas un bloque de codigo basandose en casos.
    La sintaxis de switch consiste en una expresion a evaluar y en base a los resultados esperados,
    se desarrollan los casos a ejecutar, adicional se coloca break para evitar que se ejecuten los demas
    casos y default para una respuesta por defecto en caso de que ningun caso se cumpla.
*/

let producto = prompt(
    `Minimarket 🛒\n
    ¿Que desea comprar?:
    1) Carne
    2) Verduras
    3) Frutas
    4) Dulces
    5) Bebidas
    6) Productos de aseo personal
    7) Productos de Limpieza
    8) Papeleria
    9) No veo lo que busco`
);


switch(producto){
    case "1":
        alert("Compraste Carne!");
        break;
    case "2":
        alert("Compraste Verduras!");
        break;
    case "3":
        alert("Compraste Frutas!");
        break;
    case "4":
        alert("Compraste Dulces");
        break;
    case "5":
        alert("Compraste Bebidas!");
        break;
    case "6":
        alert("Compraste Productos de aseo Personal!");
        break;
    case "7":
        alert("Compraste Productos de limpieza!");
        break;
    case "8":
        alert("Compraste Papeleria!");
        break;
    case "9":
        alert("Lo sentimos, muy pronto habran mas productos!");
        break;
    default:
        alert("Error - Opcion NO valida");
}