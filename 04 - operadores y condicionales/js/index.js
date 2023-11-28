const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Operador > (mayor que)
console.log(`${numero3} es mayor a ${numero2}: ${numero3 > numero2}`);

// Operador < (menor que)
console.log(`${numero2} es menor a ${numero3}: ${numero2 < numero3}`);

// Operador >= (mayor o igual que)
console.log(numero2 >= numero1);

// Operador <= (menor o igual que)
console.log(numero2 <= numero2);

// Comparación == (Igualdad debil: compara tipo de dato, no compara tipo de dato)
console.log(numero2 == numero1);
console.log(numero3 == numero1);

// Comparacion === (Igualdad estricta: compara tipo de dato y sí compara tipo de dato)
console.log(numero2 === numero1);
console.log(numero3 === numero1);

// undefined y null
let variable ;
let variablenull = null;
console.log(variable);
console.log(variablenull);
console.log(typeof variable);
console.log(typeof variablenull);
console.log(variable == variablenull);
console.log(variable === variablenull);

// Operador AND &&
let edad = 17;
console.log(edad >= 17 && edad <=80 && edad == 17 && edad > 10 && edad == 0);

// Operador OR ||
console.log(edad >= 17 || edad == 0 || edad <= 80);

// Operador != (Diferencia)
console.log(edad != 18);//Debil
console.log(edad !== "17");//Estricto
console.log((edad != "17" && edad != 20) || edad < 5);

// Operador ternario a ? b : c
let altura = "1.90"
console.log(((altura >= "1.70" && altura <= 3) 
                ? "Eres alto" : "Eres bajito") 
                && edad >= 17 
                ? "Eres alto y joven" : "Eres bajito y mayor");
/** 1.50 bajito
 * 1.70 normal
 * 1.80 alto
 */
// condicional ternario anidado
(altura <= 1.50) 
    ? console.log("Eres bajito")
    : (altura >= 1.70 && altura <= 1.79) 
    ? console.log("Tu estatura es normal" )
    : console.log("Eres alto");
//  condicional unitario
altura >= 1.80 && console.log("Eres alto");
if (altura >= 1.80) console.log("Eres alto");
else console.log("Eres bajito");

let nombre = "Ana"
let edadCoder = 26;
let ciudad = "Medellin"
let barrio = "Las Palmas"
let hayMetro = false
let horaDespertar = "5 a.m."
let anaDespierta = false

if (coder == "Ana") {
    if (coder == "Ana" && barrio == "Las Palmas") { 
        console.log("Ella vive en las palmas")
        if (!hayMetro) {
            console.log("Ana llega en Indriver o bus");
            if (horaDespertar == "5 a.m.") {
                console.log("Llega temprano");
            } else {
                console.log("La levanta la mamá");
                if (coder == Ana && !anaDespierta) {
                    anaDespierta == true
                } else {
                    console.log("Ana no llega");
                }
            }
        }
    }
}else{
    console.log("No es Ana")
}



// Operador 



















