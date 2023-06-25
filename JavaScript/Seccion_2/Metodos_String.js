/*
    Metodos de Strings
    Son funciones que nos permiten manipular strings.
*/
const saludo = "Hola Mundo";
// length: Devuelve el tamaño de una cadena de texto.
//console.log("Hola Mundo".length); // 10
console.log(saludo.length); // 10

// toUpperCase(): Devuelve la cadena de texto en mayusculas.
// toLowerCase(): Devuelve la cadena de texto en minusculas.
console.log(saludo.toUpperCase()); // HOLA MUNDO
console.log(saludo.toLowerCase()); // hola mundo

// indexOf(): Devuelve la posicion en la que se encuentra un caracter o una cadena de texto.
//console.log(saludo[1])
console.log(saludo.indexOf("o")); // 1
console.log(saludo.indexOf("Mundo")); // 5

// slice (inicio, fin): Extrae una parte de una cadena de texto desde el caracter indicado hasta el final.
// Nota: Si no se indica el final, extrae hasta el final de la cadena.
// Nota: Si se indica un valor negativo, extrae desde el final de la cadena.
// Nota: Si se indica un valor mayor al tamaño de la cadena, extrae desde el inicio de la cadena.
// Nota: El valor de final no se incluye en la extraccion.
console.log(saludo.slice(5)); // Mundo

// replace(valor a buscar, valor nuevo): Reemplaza el fragmento de la cadena de texto que se le indique por
//un valor nuevo.
// replaceAll(valor a buscar, valor nuevo): Reemplaza todos los fragmentos de la cadena de texto que se le
//indique por un valor nuevo.
// Nota: Replace solo reemplaza la primera coincidencia.
console.log(saludo.replace("Mundo", "Youtube")); // Hola Youtube
console.log(saludo.replaceAll("o", "a")); // Hala Munda

// concat(valor, valor, ...): Concatena dos o mas cadenas de texto (separadas por comas) y devuelve una nueva
//cadena.
console.log(saludo.concat(" ", "y bienvenidos")); // Hola Mundo y bienvenidos
console.log(saludo + " y bienvenidos"); // Hola Mundo y bienvenidos
console.log(`${saludo} y bienvenidos`)

// split(separador): Divide una cadena de texto en un array de subcadenas a partir de un separador.
console.log(saludo.split(" ")); // [ 'Hola', 'Mundo' ]
console.log(saludo.split("o")); // [ 'H', 'la Mund' ]
console.log(saludo.split("")); // [ 'H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o' ].

// trim(): Elimina los espacios en blanco al inicio y al final de una cadena de texto.
const texto = "    Hola Mundo    ";
console.log(texto.trim()); // Hola Mundo

// startsWith(valor): Sirve para saber si la cadena de texto comienza con ese valor. Devuelve true o false.
console.log(saludo.startsWith("H")); // true

// endsWith(valor): Sirve para saber si la cadena de texto termina con ese valor. Devuelve true o false.
console.log(saludo.endsWith("o")); // true

/*
    Ejercicio 1
    const mensaje = "    Estoy aprendiendo JavaScript, rayos. Es genial    ";
    1. Eliminar los espacios en blanco al inicio y al final del texto.
    2. Mostrar el texto en minusculas.
    3. Mostrar la cantidad de caracteres que tiene el texto.
    4. Reemplazar la palabra "rayos" por "*****".
    5. Mostrar la mitad del texto.
    6. Mostrar la primera palabra del texto.
    7. Mostrar la ultima palabra del texto.
    8. Mostrar la posicion donde se encuentra la palabra "aprendiendo".
    9. Mostrar el texto "JavaScript" del texto.
    10. Mostrar los primeros 10 caracteres del texto.
    11. Mostrar los ultimos 10 caracteres del texto.
*/
const mensaje = "    Estoy aprendiendo JavaScript, rayos. Es genial    ";
//1
console.log(mensaje.trim());
//2
console.log(mensaje.toLowerCase())
//3
console.log(mensaje.length)
//4
console.log(mensaje.replace("rayos", "*****"));
//5
console.log(mensaje.slice((mensaje.length)/2));
//6
const palabras = (mensaje.trim()).split(" ")
console.log(palabras[0])
//7
console.log(palabras[palabras.length-1])
//8
console.log(mensaje.trim().indexOf("aprendiendo"))
//9
console.log(mensaje.indexOf("JavaScript"));
var palabra = "JavaScript"
if(mensaje.indexOf(palabra) == -1){
    console.log("La palabra no existe")
} else{
  //console.log(palabra)
    console.log(mensaje.slice(mensaje.indexOf(palabra), mensaje.indexOf(palabra) + palabra.length))
}
//10
console.log(mensaje.slice(0, 10))
//11
console.log(mensaje.slice(mensaje.length-1))

