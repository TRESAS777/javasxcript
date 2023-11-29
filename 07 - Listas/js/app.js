// Crear una lista con sintaxis de corchete
const lista  = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e",[10,11,12,13],{nombre:"alex",edad:23}]
console.log(lista);

/**Crear una lista
 * objeto
 * lista
 * booleano
 * string
 */

const list = [{saludo:"hola",despedida:"adios"},[0,1,2,3,4,5,6,7,8,9],true,"Lista","     me n sa j e  "]
console.log(list);

/**
 *acceder a elemento
 */
console.log(list[1][2]);
console.log( list[0].saludo);
console.log( list[0]["saludo"]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4].split(" ").join(""));
console.log(list[4].replace(/\s/g,""));
/**
 * Metodos de listas
 */
/**Push - Agregar un item al final de la lista */
 list.push("Nuevo elemento",2,4);
 console.log(list);

 /**unshif - para agregar al principio de la lista */
list.unshift({nombre:"camilo", edad: 29});
console.log(list);

/**para eliminar al final  */
list.pop();
console.log(list);
/**eliminar al principio */
list.shift();
console.log(list);


/**Recorrer listas */
const coders = [
    {id: Date.now(), nombre:"Sara",tiempoEnRiwi: 2, barrio: "Santa fe"},
    {id: Date.now()+1, nombre:"Cristian",tiempoEnRiwi: 3, barrio: "Guayabal"},
    {id: Date.now()+2, nombre:"Manuel",tiempoEnRiwi: 1, barrio: "Floresta"},
    {id: Date.now()+3, nombre: "Jeison", tiempoEnRiwi: 10, barrio: "Loreto"}
];
console.log(coders);

/**recorrer con for */

for (let iterador of coders){
    console.log(iterador);
}

/**.forEach - recorre toda la lista sin devolver nada */

coders.forEach( (iterador, index ) => 
    { console.log("desde forEach",index,iterador);
    iterador.tiempoEnRiwi++;
    if (iterador.tiempoEnRiwi>=5){
        console.log(iterador.nombre);
    }
});
console.log(coders);
 /**.Map es similar al .forEach pero si retorna algo
  */
const nuevaLista = coders.map((item,index) => {
    const edadRandom =  Math.floor(Math.random()* (30-25+1)+15);
    item.edad = edadRandom
   return {...item, edad : edadRandom};
});
console.log(nuevaLista);
console.log(coders);

let codeBuscar = "sara";
const estudiantesEncontrados = [];
coders.map((estudiante) => {
    if (estudiante.nombre.toLowerCase()===codeBuscar){
        estudiantesEncontrados.push(estudiante);
    }
});
console.log(estudiantesEncontrados);
estudiantesEncontrados.forEach(estudiante => {
    const {nombre, edad, barrio} = estudiante;
    console.log(`Nombre: ${nombre}; edad: ${edad}; barrio: ${barrio}.`);
});
/**Filterr -  filtrar elementos de una lista */
const encontrados = coders.filter( 
    (estudiante)=> estudiante.nombre.toLowerCase()==="sara"
    );
console.log(encontrados);

const mayoresDeEdad = coders.filter((estudiante)=> estudiante.edad>=18);
console.log(mayoresDeEdad);

/**Some - similar a Filter- este retorna un booleano */
const hayMayoresEdad = coders.some((estudiante)=>estudiante.edad>=18);
console.log(hayMayoresEdad);

/**Sort - ordena una lista y muta la original */
const ordenados = coders.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(ordenados);
const ordenadosEdad = coders.sort((a,b) => a.edad-b.edad);
console.log(ordenados);

/**Every - todos tienen que cumplir la condicion */
console.log(coders.every((coder)=>coder.edad>=18)); 



///////////////////////////////////////////////////////////////


const productos = [
    {id: Date.now()+1, nombre:"celular", categoria:"tecnología",cantidad:5,precio: 50000000},
    {id: Date.now()+2, nombre:"Arroz", categoria:"comida",cantidad:5,precio: 2300},
    {id: Date.now()+3, nombre:"Medias", categoria:"ropa",cantidad:5,precio: 25000},
    {id: Date.now()+4, nombre:"Tablet", categoria:"tecnología",cantidad:5,precio: 1500000},
    {id: Date.now()+5, nombre:"Pizza", categoria:"comida",cantidad:5,precio: 8000},
    {id: Date.now()+6, nombre:"Laptop", categoria:"tecnología",cantidad:5,precio: 7000000},
    {id: Date.now()+7, nombre:"Chaqueta", categoria:"ropa",cantidad:5,precio: 500000},
    {id: Date.now()+8, nombre:"Audifonos", categoria:"tecnología",cantidad:5,precio: 70000},
    {id: Date.now()+9, nombre:"Reloj", categoria:"tecnología",cantidad:5,precio: 900000},
    {id: Date.now()+10, nombre:"Pasta", categoria:"comida",cantidad:5,precio: 600000},
    {id: Date.now()+11, nombre:"Camisa", categoria:"ropa",cantidad:5,precio: 20000}
]

/**filtrar entre 500.000 y 1.000.000 + mostrar en consola */
let rango = prompt ("Ingrese el rango de precios a filtrar:");
rango = rango.split(",");
if (isFinite(rango[0]+rango[1])){
    console.log("pasa");
}

if (isNaN(Number(rango[0])) || isNaN(Number(rango[1]))) {
     alert("los valores ingresados no son correctos")
} else {
    console.log(rango[0],rango[1]);
    let buscarPrecio = productos.filter ((productos)=>productos.precio >= Number(rango[0]) && productos.precio<= Number(rango[1]) )
    console.log(buscarPrecio);

    let productoMostrar = "";
    buscarPrecio.forEach ((productos)=> {
        productoMostrar+=`nombre: ${productos.nombre}, categoria: ${productos.categoria}, precio: ${productos.precio}\n`
    });
    alert(`
    productos en este rango de precios
    ${productoMostrar}
    `);
};
