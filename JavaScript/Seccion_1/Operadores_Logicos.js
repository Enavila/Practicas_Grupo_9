/*
    Se comoce como operadores logicos a los simbolos que nos permiten
    realizar operaciones binarias (true - false).

    Ejemplo:
*/

//  AND o Y(en español) &&: devuelve true si AMBOS operandos son true;
//  de lo contrario, devuelve false.
console.log(true && true); 
console.log(true && false);
console.log(false && true);
console.log(false && (4==4));
console.log('uno' && 'dos');
console.log(false && 'uno'); 
console.log('uno' && false); 
console.log('uno' && true); 
console.log(0 && 1);
console.log(1 && 1);
console.log(undefined && 1);
console.log(true && undefined);
console.log(null && true);
console.log(NaN && 1);


//  OR, O(en español) || : Devuelve true si ALGUNO de los operandos es true.
//  SI AMBOS SON FALSOS, devuelve false.
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log( (5 != "5"  || (3 === 6)) );
console.log( (33 <= 33) || (5 > 8));
console.log( ("clave123" === "clave1234") || ("passwordAdmin" != "passwor1dAdmin") );



//  NOT ! : Devuelve false si su ÚNICO operando se puede convertir a true. 
//  de lo contrario, devuelve true.

console.log(!false);
console.log(!true);
console.log(!0);
console.log(!1);


/* ----- ACTIVIDAD PARA REALIZAR EN CLASE ----- */
    
    // (Facil)
    let uno = !true || false;
    let dos = false && !false;
    let tres = true && !false;

    console.log(uno);
    console.log(dos);
    console.log(tres);


    //(Medio)
    let cuatro = (5 === 5) || (!true);
    let cinco = (!0) || (5 < 0);
    let seis = (3 > 4) && (!0);   

    console.log(cuatro);
    console.log(cinco);
    console.log(seis);


    //Avanzado
    let siete = ( ((false || true) && (!false && true) )) || (true && false)
    let ocho = (6 === 3+3) && (9/3 >= 3);
    let nueve = ( (!(!false) || ( ("1" == 1))) && (!false === true) ); 

    console.log(siete);
    console.log(ocho);
    console.log(nueve);


    //Hardcore
    let diez = !(!true) === !( !( 5 >= 5 ) );
    let once = !( true && (!true === !( !(8 === 4*2) )) );

    console.log(diez);
    console.log(once);


    //Ultra-Hardcore
    let doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);
    console.log(doce);

    //Leyenda
    let trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
    console.log();