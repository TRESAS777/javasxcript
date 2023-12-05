const textoMaquina = document.querySelector("#maquina_de_escribir_text");

const palabras = ["Frontend","Backend","ux/iu","qa","devops","hacking","Blockchain"];

let currentIndex = 0;

function maquinaEscribir() {
    textoMaquina.textContent = "";
    let textArreglo = palabras[currentIndex];
    textArreglo = textArreglo.split("");
    console.log(textArreglo);

    let i = 0;

    const pintarString = setInterval(() => {
        textoMaquina.textContent += textArreglo[i];
        i++;
        if (i === textArreglo.length) {
            clearInterval(pintarString);
            setTimeout(() => {
                borrarPalabra();
            }, 1000);//Tiempo antes de borrar la palabra
        };
    }, 300);//Tiempo para escribir cada una de las letras
};

function borrarPalabra() {
    let texto = textoMaquina.textContent;

    const borrarString = setInterval(() => {
        texto = texto.slice(0, -1); //lo mismo a tener (0,texto.length-1);
        textoMaquina.textContent = texto;
        if (texto == "") {
            clearInterval(borrarString);
            currentIndex = ( currentIndex + 1 ) % palabras.length //Cambia a la siguiente palabra y al final vuelve a comenzar
            setTimeout(() => {
                maquinaEscribir();
            }, 500);
        };
    }, 150); // }, 150); Tiempo en borrar cadad una de las letras
};

maquinaEscribir();


let textoAnimado = document.querySelector(".text");

    textoAnimado.innerHTML=textoAnimado.innerHTML.split("").map((letra,index) => `<span style="transition-delay: ${index * 40}ms; filter: hue-rotate(${index * 40}deg);" >${letra}</span>`).join("")

