/*
    Funcion Constructora: 
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinida(plantilla)

    las funciones constructoras son la forma más antigua de crear objetos en JavaScript. 
    Se definen utilizando la palabra clave "function" seguida del nombre de la función.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia.
    
    Dentro de la función, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    NOTA: Es un convenio o buena practica nombrar las funciones constructoras con la primera letra en mayuscula.
    Esto con la finalidad de diferenciar con mas facilidad cuando se esta trabajando con una funcion normal,
    o una variable.
*/



// Ejemplo 1
function Usuario(parametroNombre, parametroApellido, parametroEdad, parametroPais, parametroStatus){
    // La palabra reservada "this" se utiliza para referirnos al objeto que se esta creando(versionando)
    this.nombre = parametroNombre;
    this.apellido = parametroApellido;
    this.edad = parametroEdad;
    this.pais = parametroPais;
    this.status = parametroStatus;
    
    // Se pueden dejar propiedades estaticas
    // this.tipo = "Alumno";
}

let Eduardo = new Usuario("Eduardo","Avila",26,"Venezuela","Activo");
let Jorge  = new Usuario("Jorge","Gonzales",22,"Venezuela","Activo");
let Juan  = new Usuario("Juan","Jaure",27,"Venezuela","Activo");
let Semiramis  = new Usuario("Semiramis","Hernandez",28,"Colombia","Activo");
let Genesis  = new Usuario("Genesis","Piñango",21,"Venezuela","Activo");
let Brayan  = new Usuario("Brayan","Gamboa",21,"Venezuela","Activo");
let Luis  = new Usuario("Luis", "Zambrano",25,"Venezuela","Activo");
let Jules  = new Usuario("Jules","Chelotti", 19,"Venezuela","Activo");
let Ali  = new Usuario("Ali","Guerrero",23,"Venezuela","Activo");
let Diego  = new Usuario("Diego","Rodriguez",27,"Chile","Activo");


console.log(Eduardo);
console.log(Jorge);
console.log(Juan);
console.log(Semiramis);
console.log(Genesis);
console.log(Brayan);
console.log(Luis);
console.log(Jules);
console.log(Ali);
console.log(Diego);





//Ejemplo 2
function Persona(parametro_nombre, parametro_edad, parametro_sexo, parametro_pais){
    this.nombre = parametro_nombre;
    this.edad = parametro_edad;
    this.sexo = parametro_sexo;
    this.pais = parametro_pais;

    function saludar(){
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años, y vivo en ${this.pais}`);
    }
}

let persona1 = new Persona("Diego", 27, "Masculino", "Chile");


console.log(persona1.saludar());




// No usaremos mas funciones constructoras para la creacion de objeto, en lugar de ello usaremos Clases, las cuales veremos en la seccion 3
// ¿Por que?, Basicamente porque no permiten la definicion de metodos al instanciar, cosa que las Clases si permiten.