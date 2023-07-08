/* CLASES:
    Una clase es una plantilla o molde para crear objetos(instancias), 
    que tienen propiedades y métodos en común. 

    Una clase se define utilizando la palabra clave "class" (class Persona{...}), seguida del nombre de la clase. 
    Dentro de las llaves se definen las propiedades y métodos de la clase.

    - Constructor: es un método especial de la clase que se ejecuta automáticamente cuando 
    se crea una nueva instancia, su rol principal es inicializar los atributos de la clase con los 
    valores pasados como argumentos al crear una nueva instancia, usando la palabra reservada new.

    - Metodo: es una funcion(puede ser opcional) que retorna(con retun) logica.
    En el ejemplo que veremos a continuación, el método Saludo estará fuera del scope del constructor, 
    pero puede acceder a los atributos de la clase que se han declarado en el constructor a través de 
    la palabra clave this. Esto es posible porque this se refiere a la instancia actual de la clase.

    - this: hace referencia al elemento padre, es decir al objeto instanciado.

    - instancia: podemos llamar instancia a cada nueva version que generamos a partir de una clase(molde).

    NOTA:
        Es una convención común en JavaScript declarar las clases con la 
        primera letra de cada palabra en mayúscula. Ejemplo "Persona" o "Usuario" o "Producto",
        sin embargo es solo una buena practica, no evita el buen funcionamiento de las clases.
        
        Esto se realiza con la finalidad de diferenciar de manera mas facil cuando
        se emplea una clase, una variable o una funcion.
*/


// En este ejemplo, la clase "Persona" tiene un constructor que se utiliza para asignar valores a las 
// propiedades "nombre" y "edad" al crear una nueva instancia de la clase, esto quiere decir al crear un nuevo objeto. 
// También tiene un método que es una funcion llamada "saludo" que retorna un mensaje.

class Persona{
    // Constructor: asigna valor a las propiedades.
    constructor(nombrePersona,edadPersona){
        this.nombre = nombrePersona;
        this.edad = edadPersona;

        // Es posible asignar valores predeterminados(estaticos) a las propiedades de la clase.
        // De esta manera cada nueva instancia tendra este valor asignado.
        this.pais = "Venezuela";
    }

    // Metodo
    Saludo(){
        return(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años, y vivo en ${this.pais}`);
    }
};


//Creando nuevos Objetos/Instancias con la palabra reservada new
let usuario1 = new Persona("Brayan", 23);
let usuario2 = new Persona("Semiramis", 33);
let usuario3 = new Persona("Diego", 27);
let usuario4 = new Persona("Juan", 19);
let usuario5 = new Persona("Jorge", 21);
let usuario6 = new Persona("Ismael", 25);
let usuario7 = new Persona("Eduardo", 26);
let usuario8 = new Persona("Luis", 29);

// LLamando todas las instancias(versiones) creadas.
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
console.log(usuario5);
console.log(usuario6);
console.log(usuario7);


// Accediendo a cada propiedad por separado.
console.log(usuario8);
console.log(usuario8.nombre);
console.log(usuario8.edad);
console.log(usuario8.pais);
console.log(usuario8.Saludo());




/*
    La principal diferencia entre clases y funciones constructoras es: 
    -la sintaxis utilizada para crearlas y utilizarlas.

    Las clases se introdujeron en ECMAScript 6, la versión estable actual del estándar de JavaScript, 
    y proporcionan una sintaxis más clara y legible para crear objetos y definir sus propiedades y métodos. 

    En resumen, las clases y las funciones constructoras son dos formas diferentes de crear objetos en 
    JavaScript, siendo la principal diferencia entre ellas la sintaxis más limpia y legible y la creacion de metodos,
    por parte de las clases.
*/
