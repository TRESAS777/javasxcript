// 1.
let num1 = 27;
console.log(num1);
let  newNum1 = Number(33);
let  newNum2 = Number(num1);
console.log(newNum1);
console.log(newNum2);

// 2.
console.log(Number.MAX_VALUE);

// 3.
console.log(Number.MIN_VALUE);

// 4.
console.log(Number.MAX_SAFE_INTEGER);

// 5.
console.log(Number.MIN_SAFE_INTEGER);

// 6.
num2 = 23456;
console.log(Number.isFinite(num2));

// 7.
num3 = 5467;
console.log(Number.isInteger(num3));

// 8.
num4 = 7654;
console.log(Number.isSafeInteger(num4));

// 9.
num5 =4356;
console.log((num5).toExponential(1));

// 10.
num6 = 37846;
console.log((num6).toFixed(8));

// 11.
num7 = 87.4356;
console.log((num7).toPrecision(5));

// 12.
let text = "234.465";
console.log(Number.parseInt(text));

// 13.
let text1 = "234567";
console.log(Number.parseInt(text1, 8));

// 14.
let text2 = "23456789";
console.log(Number.parseFloat(text2));

// 15.
let text3 = "234567";
console.log(Number.parseFloat(text3, 16));

// 16.
let num8 = 235;
console.log((num8).toString());

// 17.
let num9 = -38476;
console.log(Math.abs(num9));

// 18.
let num10 = -756;
console.log(Math.sign(num10));

// 19.
let num11 = 16;
console.log(Math.exp(num11));

// 20.
let num12 = 17;
console.log(Math.expm1(num12));

// 21.
const max = Math.max(1,2,3,4,5,6,7,8,9,-100);
console.log(max);

// 22.
const min = Math.min(1,2,3,4,5,6,7,8,9,-100);
console.log(min);

// 23.
const potenciacion = Math.pow(23,2);
console.log(potenciacion);

// 24.
const raiz = Math.sqrt(16);
console.log(raiz);

// 25.
let raiz3 = Math.cbrt(27);
console.log(raiz3);

// 26.
let mul= Math.imul(6,4);
console.log(mul);

// 27.
let ceros= Math.clz32(23);
console.log(ceros);

// 28.
let aleatorio = Math.random();
console.log(aleatorio);

//29.
let redondear = Math.round(234,644867);
console.log(redondear);

// 30.
let alto = Math.ceil(28.9);
console.log(alto);

// 31.
let bajo = Math.floor(23.78)
console.log(bajo);

// 32.
console.log(Math.fround(28.66));

//33.
console.log(Math.trunc(23.4546876));

//34.
console.log(Math.sin(0));

// 35.
console.log(Math.cos(30));

// 36.
console.log(Math.tan(30));

// 37.
console.log(Math.hypot(30,15));

// 38.
num1 = 22;
num2 = 2344.56;
console.log(Number.parseInt(num2/num1));
console.log((num2/num1).toFixed(3));
console.log(Number.parseInt(num1*num2).toFixed(4));

// 39.
text = "2387.286"
text1 = "234546"
console.log(Number.parseFloat(text+text1).toPrecision(6));

// 40.
aleatorio = Math.random()*(30 - 10 + 1) + 10
console.log(Math.floor(Math.abs(aleatorio*aleatorio)));

// 41.
console.log((aleatorio).toString());

// 42.
console.log(Math.exp(aleatorio));

// 43.
console.log(Math.sqrt(16)*Math.cbrt(27));

// 44.



