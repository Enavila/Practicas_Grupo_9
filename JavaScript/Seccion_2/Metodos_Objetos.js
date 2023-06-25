/*
    los objetos son una de las estructuras de datos fundamentales. 
    Un objeto es un conjunto de pares clave-valor (key,value o propiedad/valor) que representan una entidad o un concepto. 
    Las claves(propiedades o keys) son cadenas de texto o símbolos y los valores(values) pueden ser cualquier tipo de datos.
*/

let persona = {
    nombre: "Gabriel",
    apellido: "Gonzalez",
    edad: 25,
    pais: "Colombia",
    habilidades: ["HTML" ,"CSS" ,"JavaScript" ,"Python"]
};


// Ver los valores de las propiedades(claves o keys) de un objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.pais);
console.log(persona.habilidades);


// Ver un valor especifico de una propiedad que contiene un array de valores.
console.log(persona.habilidades[2]);