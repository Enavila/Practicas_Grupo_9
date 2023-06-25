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