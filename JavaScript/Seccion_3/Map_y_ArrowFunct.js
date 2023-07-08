/*
    map(): es una función que se utiliza para transformar los elementos de un arreglo y generar 
    un nuevo arreglo con los resultados de dicha transformación.

    Recibe como argumento una función de transformación que se aplica a cada elemento del arreglo original y puede 
    realizar cualquier tipo de operación o cálculo sobre él.

    Por ultimo, devuelve un nuevo arreglo con los resultados que retorna la función de transformación sobre cada elemento, 
    en el mismo orden en que aparecen en el arreglo original.
*/


const numerosDeTabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Utilizaremos la funcion/metodo map() para iterar sobre cada elemento dela lista numerosDeTabla.
// A continuacion, incaramos entre sus parametros la funcion que queremos aplicar a cada elemento.

// Solucion con una funcion declarada
const tablaDeMultiplicacion = numerosDeTabla.map(
    function tablaDeMultiplicar(numero){
        return numero * 5;
    }
);


// Solucion usando una funcion anonima
const tablaDeMultiplicacion2 = numerosDeTabla.map(
    function(numero){
        return numero * 5;
    }
);



/*
    Una función de flecha, también conocida como arrow function en inglés, es una sintaxis más 
    concisa e intuitiva para definir funciones en JavaScript. 

    Fue introducida en ECMAScript 6 (ES6).
*/

// Usando map() con una funcion de flecha
const tablaDeMultiplicacion3 = numerosDeTabla.map( (numero)=> numero * 5 );

console.log(tablaDeMultiplicacion);
console.log(tablaDeMultiplicacion2);
console.log(tablaDeMultiplicacion3);

