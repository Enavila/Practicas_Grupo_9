/******  VARIABLES  ******/

// Podemos visualizar las variables como cajas que pueden contener LO QUE SEA. 
// Desde un simple dato hasta una estructura logica compleja.
// Tambien pueden tener diferentes estados: "Declarado", "No Declarado", "Asignado", "No Asignado".

//var: Variable de alcance(scope) global / Se puede reasignar y redeclarar.
var miVariable; // Variable declarada.
var miVariable = "Diego"; // Variable Declarada y Asignada.
var miVariable = "Luis"; // Variable Re-declarada y Asignada.
miVariable = "Semiramis"; // Re-asignacion de variable.



//let: Variable de alcance(scope) limitado / Se puede reasignar (NO se puede redeclarar)
let edad = 30; // Variable declarada y Asignada..
console.log("La edad es");
console.log(edad);

edad = 10; // Re-asignacion de variable.
console.log("La edad es");
console.log(edad);

edad = edad + 8; // Re-asignacion de variable.
console.log("La edad es");
console.log(edad);




// Concatenacion: La concatenacion es una operacion que nos permite unificar 2 o mas elementos de datos.

// Metodo de concatenacion con el simbolo: +
console.log("El usuario " + miVariable + " tiene " + edad + " años");	

// Metodo de concatenacion con Template String o String Literal: ${}
// Para poder escribir esto es necesario usar estas comillas conocidas como Comillas Literales o Backticks: ``
console.log(`El usuario ${miVariable} tiene ${edad} años`);

// Para string litesal usar:
// Estas si
`` // alt gr + }
// Estas no
''
// Estas no
""
// Estas menos
// ´´




//const: al igual que let es te alcance(scope) limitado, no se puede mutar, ni reasignar.
const apellido = "Rodriguez";
console.log(apellido);

// apellido = "Martinez"; //Uncaught TypeError: Assignment to constant variable.
// console.log(apellido);


console.clear();

/* Declaracion de variables con distintos tipos de datos.

    1. String
    2. Number
    3. Boolean
    4. object (Objeto)
    5. object (Array)
*/

// 1) String
let nombreUsuario = "Diego";
console.log(nombreUsuario);

// 2) Number
let edadUsuario = 27;
console.log(edadUsuario);

// 3) Boolean
let usuarioActivo = true;
console.log(usuarioActivo);

// 4) Object
let hobbies = {
    "hobbie1": "Programar",
    "hobbie2": "Musica",
    "hobbie3": "Leer",
    "hobbie4": "Video Juegos",
    "hobbie5": "Enseñar"
}

console.table(hobbies);
console.log(hobbies["hobbie1"]);
console.log(hobbies["hobbie2"]);
console.log(hobbies["hobbie3"]);
console.log(hobbies["hobbie4"]);
console.log(hobbies["hobbie5"]);
console.log(hobbies["hobbie6"]);

// 5) Array
// Un array es una estructura de datos que nos permite almacenar varios datos de uno o mas tipos en indices.

//          Indices:       0         1       2       3         4         5       6     7    8
let conocimientos = ["JavaScript", "HTML", "CSS", "Python", "React", "MongoDB", null, 100, "8"];
console.log(conocimientos);
console.log(`El indice 8 es: ${conocimientos[8]}`);




// console.log(`Usuario: ${nombreUsuario} | edad: ${edadUsuario} años | activo: ${usuarioActivo} | Hobbies: ${hobbies["hobbie1"]}, ${hobbies["hobbie2"]}, ${hobbies["hobbie3"]}, ${hobbies["hobbie4"]}, ${hobbies["hobbie5"]}`);


