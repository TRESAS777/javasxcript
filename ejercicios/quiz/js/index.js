// Actividades Modulo 3
// Caso 1
// Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
// viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
// día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.
// día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
// comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
// mañana a Cartagena las opciones que tiene Hildebrando:
// - si compra una almojábana con gaseosa son 15.000
// le caerá mal porque lleva mucho en el stand
// - un subway con gaseosa 23.000
// estará llenito y bien
// - no compra nada
// - le tocara comprar algo en Medellín
// Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las
// vacaciones

let pago = 2500000;

//opciones de comida: "subway con gaseosa","almojábana con gaseosa","no compro nada"
const comida = "subway con gaseosa";

if (comida==="subway con gaseosa"){
    pago = pago - 23000;
    console.log(pago);
} else if (comida==="almojábana con gaseosa"){
    pago = pago - 15000;
    console.log(pago);
} else if (comida==="no compro nada"){
    pago = pago;
    console.log(pago);
    console.log("Le toca comprar en medellin");
} else {
    console.log("la opcion de comida no estaba definida");
}

// Caso 2
// llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de
// mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40
// cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm
// (alto) x 40 cm (largo)x 20x cm.
// Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la
// maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y
// que de las medidas correctas del tamaño que pide la aerolínea? Usar .math
// La idea fundamental es que necesitamos reducir cada dimensión de la maleta
// proporcionalmente para que todas las dimensiones cumplan con los límites establecidos
// por la aerolínea.
// Instrucciones matemáticas:
// 1. Factor de reducción para cada dimensión:
// • Para el alto, calculamos el factor de reducción como 𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
// 𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// • Para el largo, calculamos el factor de reducción como 𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
// 𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// • Para el ancho, calculamos el factor de reducción como 𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜/
// 𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
// 2. Factor de reducción mas pequeño:
// Utilizamos la función Math.min para encontrar el factor de reducción mas
// pequeño entre los tres, Esto asegura que todas las dimensiones se reducirán de manera
// proporcional y ninguna excederá los límites permitidos.
// 3. Nuevas dimensiones:
// • Multiplicamos cada dimensión original por el factor de reducción mas
// pequeño para obtener las nuevas dimensiones ajustadas.
// • Nuevas dimensiones:
// nuevoAlto= altoOriginal * factorReduccion
// nuevoLargo = largoOriginal * factorReduccion
// nuevoAncho=anchoOriginal * factorReduccion

const altoPermitido = 55;
const largoPermitido = 40;
const anchoPermitido = 20;
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

let altoReducido = altoPermitido/altoOriginal;
let largoReducido = largoPermitido/largoOriginal;
let anchoReducido = anchoPermitido/anchoOriginal;

let reducciónMasPequeno = Math.min(altoReducido,largoReducido,altoReducido);
console.log(reducciónMasPequeno);

let nuevoAlto = altoOriginal*altoReducido;
let nuevoLargo = largoOriginal*largoReducido;
let nuevoAncho = anchoOriginal*anchoReducido;
console.log(nuevoAlto);
console.log(nuevoLargo);
console.log(nuevoAncho);
if (nuevoAlto<=altoPermitido&&nuevoLargo<=largoPermitido&&nuevoAncho<=anchoPermitido){ 
    console.log("Puede abordar el avion");
} else {
    console.log("No puede abordar el avion");

}

// Caso 3
// ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
// a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
// está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
// por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
// 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
// binarios, además cobran 50.000 la hora.
// Tienen que crear un código que convierta los números binarios, a decimales y luego a
// caracteres

let red = "ElPassEs";
let password =  "01110010_01101001_01110111_01101001";
let password1 = "01101001";
let password2 = "01110111";
let password3 = "01101001";
// console.log(password.split("_"));password.split("_")
let passwordDecimal = parseInt(password.replace(/_/g, " "), 2)
let passwordDecimal1 = parseInt(password1.replace('_', " "), 2)
let passwordDecimal2 = parseInt(password2.replace('_', " "), 2)
let passwordDecimal3 = parseInt(password3.replace('_', " "), 2)
console.log(passwordDecimal);
console.log(passwordDecimal1);
console.log(passwordDecimal2);
console.log(passwordDecimal3);
let passwordCaracteres = String.fromCharCode(passwordDecimal)
let passwordCaracteres1 = String.fromCharCode(passwordDecimal1)
let passwordCaracteres2 = String.fromCharCode(passwordDecimal2)
let passwordCaracteres3 = String.fromCharCode(passwordDecimal3)
console.log(passwordCaracteres+passwordCaracteres1+passwordCaracteres2+passwordCaracteres3);
pago = pago-50000
console.log(pago);

// Caso 4
// al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i
// así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
// hotel mariposas amarillas"

let cadena = "Taxi me puede llevar al hotel mariposas amarillas"
console.log(cadena.replace(/[aeiou]/g, 'i'));

// Caso 5
// cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi
// que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los
// 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
// no pasa nada.
// si el taxista gana, se descontará del dinero disponible

let manoTaxista = "tijera";
let manoViajero = "papel";
const opcion1 = "piedra";
const opcion2 = "papel";
const opcion3 = "tijera";
const ganaPapelTaxista = (manoTaxista==opcion2)&&(manoViajero==opcion1);
const ganaPapelViajero = (manoViajero==opcion2)&&(manoTaxista==opcion1);
const ganaPiedraTaxista = (manoTaxista==opcion1)&&(manoViajero==opcion3);
const ganaPiedraViajero = (manoViajero==opcion1)&&(manoTaxista==opcion3);
const ganaTijeraTaxista = (manoTaxista==opcion3)&&(manoViajero==opcion2);
const ganaTijeraViajero = (manoViajero==opcion3)&&(manoTaxista==opcion2);
const empate = manoTaxista==manoViajero;
if (ganaPapelTaxista==true||ganaPiedraTaxista==true||ganaTijeraTaxista==true){
    pago = pago -300000
    console.log(`Gano el taxista, tienes que pagarle $300.000, su nuevo saldo es: ${pago}`);
} else if (ganaPapelViajero==true||ganaPiedraViajero==true||ganaTijeraViajero==true){
    console.log(`Gano el viajero, no le tiene que pagar $300.000 al taxista`);
} else if (empate==true){
    console.log(`No gano ninguno`);
}



// Caso 6
// llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
// vestimenta para cada cosa, se quedara 4 días
// - amarillo
// - ir a la piscina, el agua huele raro, pero no le pone importancia
// -si se mete, empieza a sentirse ahogado, demasiado cloro, muere
// (terminan las vacaciones)
// -si no, no pasa nada
// - verde
// - caminatas, y agüita para el camino,
// -si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos
// -si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde
// - roja
// - actividades en la playa
// - voleibol, juega y la pasa genial
// - nada en el mar, y monta moto
// - se pone a tomar cocteles mientras descansa, de pronto siente un fuerte
// dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver
// de emergencia. (terminan las vacaciones) 
// - azul
// - actividades dentro del hotel
// - bingo, se lo gana y aumenta su dinero
// - bailar, y la pasa muy bien
// - casino y apuesta, y solo se queda con pasaje de regreso (terminan las
// vacaciones)
// Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día
// que va estar.
// Resultado final:
// cuanto día estuvo en Macondo Hildebrando?
// sí pudo regresar o murió?
// cuánto dinero gasto?

let vestimenta = "amarillo";
let estaVivo = true;
let irPiscina = false;
let caminata = false;

if (vestimenta=="amarillo"){
    irPiscina = true;
    entraPiscina = false;
    if (entraPiscina==true){
        estaVivo=false;
    } else {
        console.log(`Aun sigues vivo`);
    }
} else if (vestimenta = "verde"){
    caminata = true;
    caminataCompleta = true;
    if (caminataCompleta=true) {
        
    }
}

















