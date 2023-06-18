/*
    Iniciemos con un ejemplo:

    Hay una fiesta de cumpleaños de niños y una caja de juguetes.

    El niño que cumple años tiene la caja de juguetes en su habitación, 
    solo las personas que en su habitación podrán jugar con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope o alcance local en la fiesta.

    Pero si el niño lleva la caja de juguetes al patio, todos los niños presentes podrán jugar 
    con los juguetes de la caja. 
    En este caso, la caja de juguetes tiene un scope o alcance global en la fiesta.

    Para resumir, el scope local se refiere a algo que solo se puede acceder en un lugar específico, 
    como la habitación del niño, mientras que el scope global se refiere a algo que se puede acceder
    desde otros lugares, como el patio con otros niños.

*/

// Creo una variable con un valor establecido
let variableGlobal = "Diego";
let variableLocal = "Pedro";


// Defino la funcion
function imprimirNommbre(){
    console.log(variableGlobal);

    // Defino una variable local
    let variableLocal = "Juan";
    console.log(variableLocal);

    function local1(){
        // Defino una variable local
        let variableLocal2 = "Marcos";

        console.log(variableGlobal);
        console.log(variableLocal);
        console.log(variableLocal2);
    }

    // console.log(variableLocal2);

    local1();
};

// Inicializo la funcion
imprimirNommbre();
// local1();

// Muestro el valor de las Variables

// Variable Global
console.log(variableGlobal);

// Variable Local
console.log(variableLocal);