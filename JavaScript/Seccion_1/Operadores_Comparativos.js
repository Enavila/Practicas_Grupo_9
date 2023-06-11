/*
    Se comoce como operadores de comparacion a los simbolos que nos permiten
    realizar operaciones binarias(entre 2 elementos) de comparacion.
*/


// Igual que == : Devuelve true si los elementos son iguales 
// (No toma en cuenta el tipo de dato, solo el valor).


console.log(1 == 1);
console.log(1 == "1");
console.log(1 == 2); 




// No es igual que != : Devuelve true si los operandos NO son iguales, es decir
// si son difetentes.
// (No toma en cuenta el tipo de dato, solo el valor).

console.log(1 != 2);
console.log(1 != 1);



//Estrictamente igual que === : retorna true SOLO SI el valor y el tipo de dato ES EL MISMO.

console.log(1 === 1);
console.log(1 === "1");
console.log("1" === "1");



//Desigualdad estricta !== : Retorna true SI el valor y/o el tipo de dato NO ES EL MISMO.
// La desigualdad estricta evalúa si los operandos son diferentes tanto en valor como en tipo. 
// Si los operandos son de tipos diferentes, se consideran automáticamente diferentes. 
// Si son del mismo tipo, se realiza una comparación estricta del valor.
// Solo retorna false si los operandos son iguales y del mismo tipo de dato.
console.log( 1 !== 2);
console.log( 1 !== 1);
console.log( 1 !== "1");
console.log( 1 !== "2");
console.log( "1" !== "1");




//Mayor que > : Devuelve true si el operando izquierdo es mayor que el operando derecho.

console.log(2 > 1);
console.log(1 > 2);



//Menor que < : Devuelve true si el operando izquierdo es menor que el operando derecho.
console.log(2 < 1);
console.log(1 < 2);



//Mayor o igual que >= : Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
console.log(2 >= 1 );
console.log(1 >= 2);
console.log(1 >= 1);



//Menor o igual que <= : Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
console.log(2 <= 1);
console.log(1 <= 2);
console.log(1 <= 1);





// Crea 2 variables que permitan determinar si la edad de un usuario lo hace mayor de edad.
// Crea 2 variables que permitan determinar si dos cadenas de texto son exactemente iguales.
// Crea 2 variables que permitan determinar si dos datos numericos son exaxtamente iguales.