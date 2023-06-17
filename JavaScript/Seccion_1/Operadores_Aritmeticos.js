/*
    Se comoce como operadores aritmeticos a los simbolos que nos permiten
    realizar operaciones matematicas, sumar, restar, Multiplicar, Dividir.
*/

//Ejemplo:

//Suma
console.log(1 + 1);

//Resta
console.log(10 - 7);

//Multiplicacion
console.log(2 * 2);

//Division
console.log(10 / 2);





//Tambien existen operadores aritmeticos para operaciones mas complejas.



//Incremento ++: le suna uno a su operando.
let numero = 5;
console.log(numero);

numero++;
console.log(numero);

numero++;
console.log(numero);

numero++; // 8
numero++; // 9
numero++; // 10
numero++; // 11
console.log(numero);


//Decremento --: Le resta uno a su operando.
numero--; // 10
numero--; // 9
numero--; // 8
numero--; // 7
numero--; // 6
numero--; // 5
console.log(numero);


//Negacion Unitaria: Devuelve el negativo de su operando.
let numeroPositivo = 10;
numeroPositivo = -numeroPositivo;
console.log(numeroPositivo);

numeroPositivo = -numeroPositivo;
console.log(numeroPositivo);

numeroPositivo = -numeroPositivo;
console.log(numeroPositivo);

numeroPositivo = -numeroPositivo;
console.log(numeroPositivo);



//Exponenciacion / Potencia: Calcula la base a la potencia del exponente
let potencia = 5 ** 2;
console.log(potencia);

potencia = 5 ** 6;
console.log(potencia);
/*
    1) 5: 5
    2) 5 x 5: 25
    3) 25 x 5: 125
    4) 125 x 5: 625
    5) 625 x 5: 3125
    6) 3125 x 5: 15625
*/



//Módulo: devuelve el resto de la división entre dos números. 
//(Se usa comunmente para determinar numeros pares e impares)

console.log(10 % 2);