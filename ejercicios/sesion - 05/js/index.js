1.
const persona = {
    nombre: 'sofia',
    edad: 23,
    ciudad: 'Medellín'
};
2.
persona.ocupacion = 'estudiante';
console.log(persona);
3.
console.log(persona.ciudad);
4.
const libro = {
    titulo: 'libre',
    autor: persona.nombre,
    publicado: 2013,
};
console.log(libro);
5.
let informacion = { ...persona, ...libro};
console.log(informacion);
6.
// persona.edad = 25
console.log(persona.edad = 25);
7.
// delete libro.publicado
console.log(delete libro.publicado);
8.
const coche = {
    modelo: 2018,
    marca: 'mazda',
    anio: 2017,
};
9.
console.log(coche);
10.
coche.metodo = {
    mensaje: function mensaje(){return ('este es un mensaje');},
};
console.log(coche.metodo.mensaje());
11.
const circulo = {object
    radio: 1.5,
    color: 'azul',
};
12.
let a = Math.PI*(circulo.radio**2);
console.log(a);
console.log(Math.PI*(circulo.radio**2));
13.
const rectangulo = {
    ancho: 12,
    alto: 10,
};
14.
console.log(2*(rectangulo.ancho+rectangulo.alto));
15.
const forma = { ...circulo, ...rectangulo};
console.log(forma);
16.
const computadora = {
    marca: 'hp',
    modelo: 'ls230',
    precio: 1200000,
};
17.
console.log(computadora.precio);
18.
computadora.grafica = true;
19.
const mascota = {
    nombre: 'pepe',
    especie: 'can',
    edad: 5,
};
20.
console.log(mascota.nombre.toUpperCase());
21.
const fruta ={
    nombre: 'pera',
    color: 'verde',
};
22.
fruta.madura = function(){
    return true
};
console.log(fruta.madura());
23.
const estudiante = {
    nombre: 'luis',
    edad: 23,
    calificaciones: [4,5,3,4.5,5],
};
const prom = estudiante.calificaciones.length;
prom = estudiante.calificaciones
console.log(prom);










