/*
    los objetos son una de las estructuras de datos fundamentales. 

    Un objeto es una entidad que representa un concepto, Está compuesto por atributos y comportamientos, lo cual se define mediante su
    propiedades.

    Un objeto es un conjunto de pares clave-valor (key,value o propiedad/valor) que representan una entidad o un concepto. 
    Las claves(propiedades o keys) son cadenas de texto o símbolos y los valores(values) pueden ser cualquier tipo de datos.
*/

let persona = {
    nombre: "Diego",
    apellido: "Rodriguez",
    edad: 27,
    pais: "Chile",
    habilidades: ["HTML" ,"CSS" ,"JavaScript" ,"Python", "PHP", "TypeScript", "React", "Laravel"]
};





// Ver los valores de las propiedades(claves o keys) de un objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.pais);
console.log(persona.habilidades);


// Ver un valor especifico de una propiedad que contiene un array de valores.
console.log(persona.habilidades[2]);

// Crear mensajes personalizados con la informacion obtenida de un objeto.

// Mensaje 1
let mensaje = `Hola, me llamo ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} años y vivo en ${persona.pais}, me gusta programar y se sobre ${persona.habilidades}`;

console.log(mensaje);


// Mensaje 2
console.log(`Se registro exitosamente al usuario ${persona.nombre} ${persona.apellido}`);




/*
    Adicionalmente, un objeto contiene metodos.
    Los métodos definen el comportamiento de los objetos y les permiten realizar acciones específicas o llevar a cabo operaciones.

    Los métodos son similares a las funciones, pero están vinculados a un objeto en particular. 
    Cada objeto puede tener sus propios métodos, y estos métodos pueden acceder a los atributos(propiedades/keys) y a otros métodos del objeto
    al que están asociados.

    Cuando se invoca un método en un objeto, se realiza una llamada al método y se ejecuta el código contenido en él. Los métodos pueden recibir
    argumentos, procesarlos y devolver un resultado si es necesario.
*/

let auto = {
    marca: "Chevrolet",
    modelo: "Camaro SS",
    fecha: 2023,
    motor: "6 en Linea",
    transmision: "Manual",
    colores: ["Verde","Rojo","Negro","Azul"],
    versiones:[
        {   
            annio:1968, 
            techo:"descapotable"
        }, 
        {
            annio:1969, 
            techo:"transparente"
        },
        {
            annio: 2023,
            techo:"vibranium"
        }],
    precio: 350000,
    detalles: function(){
        //this: hace referencia al elemento padre (similar al & en SASS)
        console.log(
            `Te presentamos el nuevo ${this.marca} ${this.modelo} - ${this.fecha}, con motor de ${this.motor}, transmisión ${this.transmision} por tan solo ${this.precio}$, .`
        );
    },
    avanzando: function(){
        console.log ("El auto esta avanzando");
    },
    detenido: function(){
        console.log ("El auto esta detenido");
    },
    presentacionEnVivo: function(){
        console.log(`Inicia la presentacion: ${this.detalles()}. Se observa el auto: ${this.avanzando()}.`)
    }
};


// Activando Metodos
// console.log( auto.detalles() );
// console.log( auto.avanzando() );
// console.log( auto.detenido() );
// console.log( auto.presentacionEnVivo() );




// Ejemplo de una funcion sin retorno.
function activarMetodos(){
    auto.detalles();
    auto.avanzando();
    auto.detenido();
    auto.presentacionEnVivo();
}

// Ejemplo de una funcion con retorno.
function activarMetodos2(){
    activarMetodos();
    return "Se activaron los métodos";
}

let informacion = activarMetodos2();

console.log(informacion);




// Otro ejemplo de un objeto con metodos
let teclado = {
    marca: "Logitech",
    modelo: "K380",
    precio: 1500,
    colores: ["Blanco", "Negro", "Verde", "Azul"],
    cantidadDeTeclas: 100,
    alto: 50,
    ancho: 20,
    peso: 10,
    detalles: function(){
        console.log(`El teclado ${this.marca} ${this.modelo} tiene un precio de ${this.precio}$`);
    },
    enviarInformacion: function(){
        console.log("se envio la informacion el precionar la tecla x");
    }
};


console.log(teclado)
console.log(teclado.detalles());





// Algunos metodos que podemos emplear en los objetos.

// keys(): Devuelve un array de las claves (propiedades) enumerables de un objeto.

const propiedades = Object.keys(teclado);
console.log( Object.keys(teclado) );




// values(): Devuelve un array de los valores enumerables de un objeto.
console.log( Object.values(teclado) );




// assign(): Copia los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.
const objeto3 = Object.assign({},teclado, auto);
console.log(objeto3);



//  Ejemplo 2:
let usuarioBrayan = {
    nombre: "Brayan",
    apellido: "Gamboa",
    edad: 25,
    pais: "Canada",
    habilidades: ["HTML" ,"CSS" ,"JavaScript" ,"Python", "PHP", "TypeScript", "React", "Laravel"]
}

const rolAdministrador = {
    añadir: function(){ 
        return ("Se añadio un nuevo usuario") 
    },
    eliminar: function(){ 
        return ("Se elimino un Usuario") 
    },
    editar: function(){ 
        return ("Se edito Usuario") 
    },
    consultarById: function(){ 
        return ("Se consulto un Usuario por ID")
    },
    consultarTodos: function(){
        return ("Se consulto todos los Usuarios")
    }
}



const usuarioBrayanAdministrador = Object.assign({},usuarioBrayan, rolAdministrador);
console.log(usuarioBrayanAdministrador);

console.log(usuarioBrayanAdministrador.nombre);
console.log(usuarioBrayanAdministrador.eliminar());




// hasOwnProperty(): Devuelve true si el objeto tiene una propiedad especificada.
console.log( usuarioBrayanAdministrador.hasOwnProperty("consultarById") );
console.log( usuarioBrayanAdministrador.hasOwnProperty("consultarByEmail") );





// defineProperty(): Define una nueva propiedad directamente en un objeto o modifica una propiedad existente.

Object.defineProperty(usuarioBrayanAdministrador, "consultarByEmail", {
    value: function(){
        return ("Se consulto un Usuario por Email");
    },
    writable: false,
    enumerable: true
});

console.log(usuarioBrayanAdministrador.consultarByEmail());
console.log(usuarioBrayanAdministrador);


// Sin usar el metodo defineProperty()
usuarioBrayanAdministrador.saludar = function(){ 
    console.log("Hola Mundo"); 
};

console.log(usuarioBrayanAdministrador.status);
usuarioBrayanAdministrador.saludar();


usuarioBrayanAdministrador.status = "Conectado";
console.log(usuarioBrayanAdministrador.status);
console.log(usuarioBrayanAdministrador);
