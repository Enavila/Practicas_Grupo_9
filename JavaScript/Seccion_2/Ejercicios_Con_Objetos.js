/*
    Realiza un algoritmo que te permita (usando metodos de arrays) obtener 1 tabla de multiplicacion.
    y aplicalo a 3 numeros diferentes.

    La primera tabla sera la del 2.
    La segunda tabla sera la del 5.
    La tercera tabla sera la del 17.

    Adicionalmente debes elaborar una logica (Tambien con metodos de arrays) que separe los numeros
    pares e impares en 2 arrays diferentes. (uno llamado pares y otro impares)

    pares2 - impares2
    pares5 - impares5
    pares17 - impares17

    Puedes realizar una logica de tabla y una se separacion para cada escenario, es decir, para cada tabla
    de multiplicar.

    Tips: usa filter y map, pero si dedices otro(s) metodo(s) que funcione(n) muestrame como lo haces.
*/



// Ejemplo map
let personas = ["Diego","Semiramis","Juan","Luis","Alejandro","Eduardo"];
personas.map(
    function(persona){
        console.log(`Hola ${persona} | `);
    }
);


// Solucion 1:
let numeroMultiplicador = 17; // Este es el numero del cual se obtendra la tabla.

const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Esta es la lista de numeros que conforman la tabla.

// Aqui se crea una variable llamada "tablaDeMultiplicar", que sera un array ya que .map retorna un array de resultados.
const tablaDeMultiplicar = tabla.map(
    function(numero){
        return numero * numeroMultiplicador; // Aqui se multiplica cada elemento del array por el numero del cual se obtendra la tabla.
    }
);

// Aqui se imprime la tabla de multiplicar.
console.log(tablaDeMultiplicar); 







// Aqui se crea una variable llamada "numerosPares", que sera un array ya que .filter retorna un array de resultados.
let numerosPares = tablaDeMultiplicar.filter(
    function(numero) {
        // Aqui se divide cada elemento del array "tablaDeMultiplicar" por 2 y si el resultado es 0, se agrega al array "numerosPares".
        return numero % 2 === 0; 
    }
);

// Aqui se imprime el array "numerosPares".
console.log(numerosPares);








// Aqui se crea una variable llamada "numerosImpares", que sera un array ya que .filter retorna un array de resultados.
let numerosImpares = tablaDeMultiplicar.filter(
    function(numero) {
        // Aqui se divide cada elemento del array "tablaDeMultiplicar" por 2 y si el resultado es 1, se agrega al array "numerosImpares".
        return numero % 2 === 1;
    }
);

// Aqui se imprime el array "numerosImpares".
console.log(numerosImpares);


/* Ejercicio 2 (Largo pero mas facil)
    Crea un objeto llamado productos, que contenga 5 propiedades, tecnologia, hogar, alimentos, salud, ropa.

    - tecnologia, debe ser un objeto con 2 propiedades:
        * computadoras: debe tener un objeto con 4 propiedades: tipo:[laptop,escritorio], ram:[4gb,8gb,16gb], almacenamiento:[128gb,256gb,512gb,1tb], procesador:[Intel,AMD].
        * celulares: debe tener un objeto con 3 propiedades: marca:[samsumg,lg,xiaomi,poco], ram[4gb,6gb,8gb,12gb,16gb], almacenamiento(32gb,64gb,128gb,256gb),
    
    - hogar, debe ser un objeto con 2 propiedades:
        * electrodomesticos: debe tener un objeto con 2 propiedades: tipo:[tv,parlante,licuadora,lavadora], color:[blanco,gris,negro]
        * muebles: debe tener un objeto con 3 propiedades: tipo:[silla,mesa,gabetero], material:[madera,plastico,metal], color:[blanco,beige,gris,negro]

    - alimentos, debe tener un objeto con 4 propiedadess:
        * carnes: debe tener un objeto con 1 propiedad: animal:[pollo,res,cerdo]
        * viveres: debe tener un objeto con 3 propiedades: harina:[trigo,maiz], aceite:[girasol,oliva,maiz], leche:[completa,soya,almendra,descremada]
        * fruver: debe tener un objeto con 2 propiedades: frutas:[manzana,pera,uva,fresa,piña], vegetales:[lechuga,zanahoria,cebolla,rabano,calabaza]
        * aseo: debe tener un objeto con 2 propiedades: personal:[shampoo,acondicionador,jabon,crema dental,desodorante], hogar[cloro,desinfectante,jabon,paños]


    - salud, debe tener un objeto con 2 propiedades:
        * medicamentos: debe tener un objeto con 2 propiedades:
            ° con_prescripcion: debe tener un objeto con 2 propiedades: jarabe:[Clonazepan, Tramadol, Cloperastina, Terbutalina], comprimidos:[Losartan, Enalapril, Ácido valproico, Metformina]
            ° de_venta_libre: debe tener un objeto con 2 propiedades: jarabe:[Acetaminofén, Loratadina, Nitazoxanida, Ambroxol], comprimidos:[Cetirizina, Albendazol, Trimebutina, Omeprazol]
        * primeros_auxilios: debe tener un objeto con 3 propiedades: proteccion_personal:[mascarillas,lentes protectores], curas_y_vendajes:[vendas,tijeras,curitas], suministros_para_heridas:[algodon,compresas]


    - ropa, debe tener un objeto con 3 propiedades:
        * damas: debe tener un objeto con 3 propiedades: prenda:[vestido,jean,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * caballeros: debe tener un objeto con 3 propiedades: prenda:[short,jean,camisa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]
        * niños: debe tener un objeto con 3 propiedades: prenda:[vestido,short,jean,camisa,blusa,ropa interior,calzado], temporada:[invierno,primavera,verano,otoño], importado:[true,false]

    Resultados estimados:
        console.log(productos.tecnologia.computadoras.procesador[0]); //intel
        console.log(productos.alimentos.viveres.leche[2]); //almendra
        console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); //Losartan
        console.log(productos.hogar.electrodomesticos.tipo[2]); //licuadora
        console.log(productos.ropa.damas.temporada[0]); //invierno
*/







// Solucion 2:
let productos = {
    tecnologia: {
        computadoras: {
            tipo: ["laptop", "escritorio"],
            ram: ["4gb", "8gb", "16gb"],
            almacenamiento: ["128gb", "256gb", "512gb", "1tb"],
            procesador: ["Intel", "AMD"]
        },
        celulares: {
            marca: ["samsumg", "lg", "xiaomi", "poco"],
            ram: ["4gb", "6gb", "8gb", "12gb", "16gb"],
            almacenamiento: ["32gb", "64gb", "128gb", "256gb"]
        }
    },
    hogar: {
        electrodomesticos: {
            tipo: ["tv", "parlante", "licuadora", "lavadora"],
            color: ["blanco", "gris", "negro"]
        },
        muebles: {
            tipo: ["silla", "mesa", "gabetero"],
            material: ["madera", "plastico", "metal"],
            color: ["blanco", "beige", "gris", "negro"]
        }
    },
    alimentos: {
        carnes:{ animal:["pollo","res","cerdo"]},
        viveres: {
            harina: ["trigo", "maiz"],
            aceite: ["girasol", "oliva", "maiz"],
            leche: ["completa", "soya", "almendra", "descremada"]
        },
        fruver: {
            frutas: ["manzana", "pera", "uva", "fresa", "piña"],
            vegetales: ["lechuga", "zanahoria", "cebolla", "rabano", "calabaza"]
        },
        aseo: {
            personal: ["shampoo", "acondicionador", "jabon", "crema dental", "desodorante"],
            hogar:["cloro", "desinfectante", "jabon", "paños"]
        }
    },
    salud: {
        medicamentos:{ 
            con_prescripcion: {
                jarabe: ["Clonazepan", "Tramadol", "Cloperastina", "Terbutalina"],
                comprimidos: ["Losartan", "Enalapril", "Ácido valproico", "Metformina"]
            },
            de_venta_libre: {
                jarabe: ["Acetaminofén", "Loratadina", "Nitazoxanida", "Ambroxol"],
                comprimidos: ["Cetirizina", "Albendazol", "Trimebutina", "Omeprazol"]
            }
        },
        primeros_auxilios: {
            proteccion_personal: ["mascarillas", "lentes protectores"],
            curas_y_vendajes: ["vendas", "tijeras", "curitas"],
            suministros_para_heridas: ["algodon", "compresas"]
        }
    },
    ropa: {
        damas: {
            prenda: ["vestido", "jean", "blusa", "ropa interior", "calzado"],
            temporada: ["invierno", "primavera", "verano", "otoño"],
            importado: [true, false]
        },
        caballeros: {
            prenda: ["short", "jean", "camisa", "ropa interior", "calzado"],
            temporada: ["invierno", "primavera", "verano", "otoño"],
            importado: [true, false]
        },
        niños: {
            prenda: ["vestido", "short", "jean", "camisa", "blusa", "ropa interior", "calzado"],
            temporada: ["invierno", "primavera", "verano", "otoño"],
            importado: [true, false]
        }
    }
};
console.log(productos.tecnologia.computadoras.tipo[0])
console.log(productos.tecnologia.computadoras.procesador[0]); 
console.log(productos.alimentos.viveres.leche[2]); 
console.log(productos.salud.medicamentos.con_prescripcion.comprimidos[0]); 
console.log(productos.hogar.electrodomesticos.tipo[2]); 
console.log(productos.ropa.damas.temporada[0]); 





const numerosAMultiplicar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tabla2 = [];
let tabla5 = [];
let tabla17 = [];

let paresTabla2 = [];
let imparesTabla2 = [];

let paresTabla5 = [];
let imparesTabla5 = [];

let paresTabla17 = [];
let imparesTabla17 = [];



numerosAMultiplicar2.map(
    function multiplicar(numero){
        tabla2.push(numero * 2);

        if((numero * 2) % 2 === 0){
            paresTabla2.push(numero);
        }else if((numero * 2) % 2 === 1){
            imparesTabla2.push(numero * 2);
        };

        tabla5.push(numero * 5);
        if((numero * 5) % 2 === 0){
            paresTabla5.push(numero * 5);
        }else if((numero * 5) % 2 === 1){
            imparesTabla5.push(numero * 5);
        };

        tabla17.push(numero * 17);
        if((numero * 17) % 2 === 0){
            paresTabla17.push(numero * 17);
        }else if((numero * 17) % 2 === 1){
            imparesTabla17.push(numero * 17);
        };
    }
);


console.log(tabla2);
console.log(tabla5);
console.log(tabla17);

console.log(paresTabla2);
console.log(imparesTabla2);

console.log(paresTabla5);
console.log(imparesTabla5);

console.log(paresTabla17);
console.log(imparesTabla17);
