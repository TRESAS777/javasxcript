// Creacion de numeros
// 1 forma
const number1 = -20;
// 2 forma
const number2 = Number(200);
//  3 forma
const number3 =  new Number(23.4);

console.log(number1);
console.log(number2);
console.log(number3.valueOf());

// El maximo valor de un numero
console.log(Number.MAX_VALUE);
// El minimo valor de un numero
console.log(Number.MIN_VALUE);
//  obtener NaN
console.log(Number.NaN);
// valor infinito Positivo
console.log(Number.POSITIVE_INFINITY);
// valor infinito Negativo
console.log(Number.NEGATIVE_INFINITY);

const numeroInfinitoNegativo = Number.NEGATIVE_INFINITY;
console.log(numeroInfinitoNegativo);
let operacionConInfinito = numeroInfinitoNegativo -100;
console.log(operacionConInfinito);

//  operaciones con numeros
let num1 = 30;
let num2 = 20;
let resultado;

// suma
resultado = num1 + num2 ;
console.log(`la suma de ${num1} + ${num2} = ${resultado}`);

// resta
resultado = num1 - num2 ;
console.log(`la resta de ${num1} - ${num2} = ${resultado}`);

// multiplicacion
resultado = num1 * num2 ;
console.log(`la multiplicacion de ${num1} * ${num2} = ${resultado}`);

// division
resultado = num1 / num2 ;
console.log(`la division de ${num1} / ${num2} = ${resultado}`);

// modulo
resultado = num1 % num2 ;
console.log(`el residuo de ${num1} / ${num2} = ${resultado}`);

// incrementar una variable o numero
let antesDeIncrementar = num1;
// 1 forma
num1 = num1+1;
console.log(num1);
// 2 forma
num1 ++;
console.log(num1);
// 3 forma
++num1;
console.log(num1);

//incrementos en numeros
num1+=3
console.log(num1);

// decrementos
let antesDelDecremento = num2;
// 1 forma
num2 = num2-1;
console.log(num2);
// 2 forma
num2 --;
console.log(num2);
// 3 forma
--num2;
console.log(num2);

//decrementos en numeros
num2-=4
console.log(num2);

// Objeto Math
// acceder a pi
const PI = Math.PI
console.log(`el numero PI = ${PI}`);

// acceder a euler
console.log(`El numero Euler = ${Math.E}`);

//  redondear
const numero1 = 2.8;
console.log(Math.round(numero1));

// aproxima hacia abajo
console.log(Math.floor(numero1));

// aproxima hacia arriba
console.log(Math.ceil(numero1));

// raiz cuadrada
console.log(Math.sqrt(16));

// valor absoluto
console.log(Math.abs(-400));

// potenciacion
console.log(`8^2 = ${Math.pow(8,2)}`);
console.log(`8^2 = ${8**2}`);

//  mayor de un conjunto de numeros
const mayor = Math.max(21,54,-34,100,0)
console.log(mayor);

//  menor de un conjunto de numeros
const menor = Math.min(21,54,-34,100,0)
console.log(menor);

// numeros randoms
console.log(Math.floor(Math.random()*10));

// numero al azar de  10 a 30
console.log(Math.floor(Math.random()*(30 - 10 + 1) + 10));

/**
 * orden de operaciones
 * 1. division o multiplicacion 
 * 2. sumas o restas
 */
resultado =  (10 + 10)*5
console.log(resultado);