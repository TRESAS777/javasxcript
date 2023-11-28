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
 * 
 */
