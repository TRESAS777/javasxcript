/* objetos y literales - agrupan una serie de variables
 y se llaman atributos*/

// Creando un objeto con literal

const coder = {
    nombre : "Ana",
    edad : 24,
    barrio : "Palmas"
};

console.log(coder);

// sintaxis de punto
console.log(coder.nombre);
console.log(coder.edad);
console.log(coder.barrio);

// sintaxis de []
console.log(coder["nombre"]);
console.log(coder["edad"]);
console.log(coder["barrio"]);

/** agregar una propiedad
 * primera forma*/

coder.foto = "./img/foto-de-ana.jpg";
console.log(coder);

/**segunda forma */
coder["hermanos"] = 2;
console.log(coder);

/**Eliminar atributos de un objeto literal */
delete coder.foto;
console.log(coder);

/**pero lo mejor es reasignar sin ningun valor 
 * pues en vez de eliminar se recomienda usar este: */
coder.foto = undefined;
console.log(coder);

/** guardar los atributos en variables */
const nombreCoder = coder.nombre;
const edadCoder = coder.edad;
console.log(nombreCoder, edadCoder);

/**desestructurar objeto */
const { barrio, edad, nombre, foto, hermanos } = coder;

console.log(barrio);
console.log(edad);
console.log(nombre);
console.log(foto);
console.log(hermanos);

let producto = { // se crea el producto con variable let para reasignar despues
// const producto = {
    named: 'celular ultimo modelo',
    precio: 1500000,
    disponible: true,
    informacion: {
        peso: '1Kg',
        medidas:'10"'
    }
}
console.log(producto.precio);
console.log(producto.informacion.medidas);

const {
    named,
    precio,
    disponible,
    informacion: {medidas,peso}
} = producto; 
console.log(named);
console.log(precio);
console.log(medidas);
console.log(peso);
console.log(producto);

/**Congelar un objeto literal 
 * congelamiento estricto*/
Object.freeze(producto)
console.log(producto);
producto.nuevo = 'nuevo'
console.log(producto);
console.log(Object.isFrozen(producto));
producto = { ...producto}; // se reasigna // se crea una copia del objeto en otro nuevo objeto y asi se quita el "congelamiento"
// const nuevoObjeto = { ...producto}; // se crea una copia del objeto en otro nuevo objeto y asi se quita el "congelamiento"
// console.log(Object.isFrozen(nuevoObjeto));
console.log(Object.isFrozen(producto));
/**congelamiento dinamico */
// Object.seal(nuevoObjeto);
// nuevoObjeto.named = "tablet";
// nuevoObjeto.nuevaPropiedad = "nueva";
// console.log(nuevoObjeto);
Object.seal(producto);
producto.named = "tablet";
producto.nuevaPropiedad = "nueva";
console.log(producto);

const producto1 = {
    nameProducto: 'cama',
    descripcion: 'de madera de roble',
    altura: 3,
};
const medidasCama = {
    altura: 2,
    ancho: 1.5,
};
// primera forma
let resultado = Object.assign(producto1, medidasCama,/**se puede agregar nuevos atributos: */ {precio:1000000})
console.log(resultado);

// segunda forma
resultado = { ...producto1, ...medidasCama, precio: 100000};
console.log(resultado);
// es como hacer esto:
resultado = {
    nameProducto: producto1.nameProducto,
    descripcion: producto1.descripcion,
    altura: medidasCama.altura,
    ancho: medidasCama.ancho,
    precio: 1000000,
};

//
const nombreMascota = 'pepe';

const mascota = {
    nombreMascota,
};
console.log(mascota);

// 
Object.defineProperty(mascota, 'edad', {
    Writable: false,
    configurable: true,
    Enumerable: true,
    value: 2,
});

console.log(mascota);

mascota.edad = 3;
console.log(mascota);

console.log(Object.keys(mascota));
console.log(Object.values(mascota));
console.log(Object.entries(mascota));
