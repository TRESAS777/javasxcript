/**Selectores */
const containerCards = document.querySelector(".container-cards");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

/**Objeto global */
const datosBusqueda = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",
}

/**Eventos */
document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos);
    // Generar selec de años
    const maxYear = new Date().getFullYear() + 1;
    const minYear = maxYear -14;

    /**Primera iteracion
     * i = 2024
     */
    for (let i = maxYear; i >= minYear; i --){ 
        /**se hace el proceso
         * i--, y asi se repite el ciclo disminuyendo el año en 1
         */
        // por cada iteracion se crea una etiqueta option
        const option = document.createElement("option");
        // el valor del option es igual al del iterador
        option.value = i;
        // el texto tambien
        option.innerText = i;
        // añadirlo al select
        year.appendChild(option)
    }
})


    //Escuchar en todo momento el cambio de valor para marca
marca.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.marca = event.target.value;

    // filtrar
    filtarAuto()
})

year.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.year = event.target.value;

    // filtrar
    filtarAuto()
})

minimo.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.minimo = event.target.value;

    // filtrar
    filtarAuto()
})

maximo.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.maximo = event.target.value;

    // filtrar
    filtarAuto()
})

puertas.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.puertas = event.target.value;

    // filtrar
    filtarAuto()
})

transmision.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.transmision = event.target.value;

    // filtrar
    filtarAuto()
})
color.addEventListener("input", (event) => {
    console.log(event.target.value);
    // obtengo el nuevo valor y lo asigno a mi evento global
    datosBusqueda.color = event.target.value;

    // filtrar
    filtarAuto()
})

// funcion filtrar
function filtarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultado)
}

function filtrarMarca (autos) {
    if (datosBusqueda.marca) {
        // if (autos.marca === datosBusqueda.marca){
        //     return
        // }
        return autos.marca === datosBusqueda.marca;
    }
    return autos;
}

function filtrarYear (autos) {
    if (datosBusqueda.year) {

        return autos.year == datosBusqueda.year;
    }
    return autos;
}


function filtrarMinimo (autos) {
    if (datosBusqueda.minimo) {
        return autos.precio >= Number(datosBusqueda.minimo);
    }
    return autos;
}
 
function filtrarMaximo (autos) {
    if (datosBusqueda.maximo) {
        return autos.precio <= Number(datosBusqueda.maximo);
    }
    return autos;
}

function filtrarPuerta (autos) {
    if (datosBusqueda.puertas) {

        return autos.puertas == datosBusqueda.puertas;
    }
    return autos;
}

function filtrarTransmision(autos) {
    if (datosBusqueda.transmision) {

        return autos.transmision == datosBusqueda.transmision;
    }
    return autos;
}

function filtrarColor (autos) {
    if (datosBusqueda.color) {

        return autos.color == datosBusqueda.color;
    }
    return autos;
}

/**Funcion para imprimir carros */
function mostrarAutos (autos) {
    /**funcion para limpiar el html por si habia elementos creados*/
    limpiarHTML()
    // containerCards.innerHTML="" otra forma de limpiar el HTML
/** iterador de la lista de carros */
    autos.forEach(autos => {

        containerCards.innerHTML += `
        
            <div class="card">
                <img src=${autos.imagen} alt="">
                <div class="description-card">
                    <p>${autos.marca} - ${autos.modelo} - ${autos.year}</p>
                    <p>Transmision: ${autos.transmision}</p>
                    <p>Precio: ${autos.precio}</p>
                    <p>Puertas: ${autos.puerta}</p>
                    <p>Color: ${autos.color}</p>
                </div>
            </div>
    
        `
    });
}

function limpiarHTML () {
    // si el contenedor tiene un primer hijo
    while (containerCards.firstChild) {
        // entonces lo elimina
        containerCards.removeChild(containerCards.firstChild);
    }
}