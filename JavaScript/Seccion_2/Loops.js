/*
    ¿Que son los Loops?:
    Son estructuras de control que permiten repetir un bloque de código varias veces. 
    
    Hay varios tipos de loops en JavaScript:
    - for(for in - for of)
    - while(do-while)
*/

let ciclos = 10;

// for - recorre un bloque de código un numero determinado de veces
// La estructura de for se puede leer de la siguiente manera:
//for(Punto_de_inicio; Punto_de_final; tipo_de_incremento){... codigo_a_repetir ...};

// La variable "i" es una convencion utilizada para referirse a la variable de control o contador de un loop.
// NOTA: no necesariamente debe llamarse "i".

for(i = 1; i <= ciclos; i++){
    // Aqui vamos a definos el codigo que queremos repetir
    
    // Limpio todo lo que este antes en la consola
    // console.clear();

    // Muestro la multiplicacion de i por 5
    console.log(`5 x ${i} = ${5*i}`);
};





// for of - Recorre los valores de un array.
// //For of con arrays, retorna el valor del indice en el ciclo actual.

// Iterar: Es el proceso de recorrer una secuencia de elementos uno por uno. 
// Es decir, recorrer las propiedades de un array u objeto para realizar operaciones en cada una de ellas.

let productos = ["Celular","TV","Microfono","Estereo","Proyector","Teclado","PS5"];

// for(elemento of lista){... codigo a ejecutar ...}
// por cada(elemento de la lista de elementos){... codigo a ejecutar ...}

// Recorrer un array con for of
for(producto of productos){
    // Mostramos cada elemento de la lista por cada iteracion realizada.
    console.log(`He comprado el producto: ${producto}`);
};


//For in con arrays, NO retorna el valor, en su lugar retorna el indice.
let nombres = ["Gabriel","Roger","Alexnis","Maria","Nelson"];
for(nombre in nombres){
    console.log(nombre);
}



// for in - Recorre las propiedades de un objeto de forma ordenada, se utiliza a menudo para
// recorrer objetos que NO son arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no serian los valores sino los indices.

let persona = {
    nombre: "Luisito",
    edad: 30,
    ciudad: "Bogota",
    telefono: "123-123-12-12",
    email: "luisito@email.com"
}

// for(propiedad in objeto){... codigo a ejecutar ...}
// por cada(propiedad en el objeto){... codigo a ejecutar ...}


// Recorrer un objeto con for in
for(propiedad in persona){
    // Mostramos cada propiedad de la persona en cada iteracion realizada.
    console.log(`La propiedad actual es ${propiedad}`);

    // Mostramos el valor de la propiedad actual en cada iteracion realizada.
    console.log(`El valor de la propiedad ${propiedad} es ${persona[propiedad]}`);
};



// Recorrer un objeto con for of
for(propiedad of Object.keys(persona)){
    // Mostramos cada propiedad de la persona en cada iteracion realizada.
    console.log(`La propiedad actual es ${propiedad}`);
}

// Como podemos ver, forzar el uso de for of para un objeto y for in para un array no es la mejor de las 
// practicas, ya que cada uno esta diseñado especialmente para cada tipo de dato.



// Ejemplo 2:

// Supongamos que nos vamos de viaje, y por cada ciudad hacemos una actividad diferente.

console.clear(); // Con esto lo que hacemos es limpiar todos los mensajes que se hayan mostrado en la consola anteriormente.

const viaje = {
    Antioquia: "Fui a Guatape",
    Santiago_de_Chile: "Fui a la cordillera",
    Punto_Fijo: "Fui a la playa",
    Maracaibo: "Visite la vereda",
    Caracas: "Fui a un concierto"
}


for(ciudad in viaje){
    // Mostramos cada ciudad por cada iteracion realizada.
    console.log(`Visite ${ciudad}`);

    // Mostramos un mensaje con el valor de la propiedad actual en cada iteracion realizada.
    console.log(`En ${ciudad} - ${viaje[ciudad]}`);
};


// Ejercicio: Elabora un objeto que contenga 7 estaciones (De metro/tren) y recorrelo con for in.





console.clear(); // Con esto lo que hacemos es limpiar todos los mensajes que se hayan mostrado en la consola anteriormente.



// while - Recorre un bloque de código mientras se cumpla una la condicion indicada.

// Ejemplo 1

/* 
    while(condicion){
        codigo a ejecutar
    }  

    mientras se cumpla(esta condicion){
        Se ejecuta este codigo dentro de las llaves
    }
*/


// Ejemplo 1
let contador = 1;

while(contador <= 10){
    console.log(`El contador vale: ${contador}`);
    contador++;
};




// Ejemplo 2
let respuesta = prompt("Desea continuar?");

while(respuesta == "si"){
    respuesta = prompt("Desea continuar?");
}