//  Los condicionales 

const puntaje = 100;

if (puntaje === 100) {
    console.log("el puntaje es igual a 100");
} else if (puntaje > 100) {
    console.log("el puntaje es mayor a 100");
} else {
    console.log("el puntaje es menor a 100");
}

// switch
const metodoPago  = "efectivo" 

switch (metodoPago) {
    case "efectivo":
        console.log("pagaste en efectivo");
            break;
    case "cheque":
        console.log("pagaste con cheque");
        break;
    case "tarjeta":
        console.log("pagaste con tarjeta");
        break;
    default:
        console.log("metodo de pago no valido");
}

// con if
if (metodoPago === "efectivo") {
    console.log("pagaste en efectivo");
} else if (metodoPago === "cheque") {
    console.log("pagaste con cheque");
} else if (metodoPago === "tarjeta"){
    console.log("pagaste con tarjeta");
} else {
    console.log("metodo de pago no valido");
}

// for loop
for (let iterador = 0 ; iterador <= 10; iterador ++ ){
    console.log(`9 x ${iterador} = ${ iterador * 9}`);
}

//  bucle anidado 
for (let iterador =0; iterador <= 10; iterador ++ ) {
    for (let iterador2 = 0; iterador2 <=12; iterador2 ++) {
        console.log(`${iterador} x ${iterador2} = ${iterador * iterador2}`);
    }
}
//  for in y of
let automovil = {
    modelo: "Camaro",
    motor: "5.8",
    year: "2023",
    marca: "Chevrolet"
};

for (let iterador in automovil){
    console.log(`${iterador}`);
}
for (let iterador in automovil){
    console.log(`${iterador}: ${automovil[iterador]}`);
}

let automoviles = ["Camaro", "Sail", "Dupster", "Jetta"];
for (let iterador of automoviles) {
    console.log(`${iterador}`);
}
for (let iterador in automoviles) {
    console.log(`${iterador}: ${automoviles[iterador]}`);
}

//  do while 
let saldo = 1000;

do {
    const opcion = prompt(`*** Bienvenido al cajero automatico***
        1. Consultar saldo
        2. Depositar
        3. Retirar
        4. Salir
        Seleccione una opcion: 
    `, "1");

    switch (opcion) {
        case "1":
            alert (`Su saldo es de ${saldo}`)
            break;
        case "2":
            let nuevoSaldo = prompt(`Cuanto quiere a depositar?`);
            saldo += Number(nuevoSaldo); 
            break;
        case "3":
            let cantidadRetiro = prompt("Cuanto deseas retirar?");
            if (cantidadRetiro > saldo) {
                alert ("¡Saldo insuficiente!");
            } else {
                saldo -= Number(cantidadRetiro);
            }
            break;
        case "4":
            break;
        default:
            alert ("ingrese una opcion correcta")
    }

} while (opcion != "4")


//  while
let entrada = prompt("Ingrese un numero: ");
console.log(isNaN(Number(entrada)));

while (isNaN(Number(entrada))) {
    console.log("El numero ingresado es incorrecto, ingrese nuevamente");
    entrada = prompt("Ingrese solo numeros: ");
}

