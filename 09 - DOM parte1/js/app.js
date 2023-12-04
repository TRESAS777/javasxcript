// Object document . DOM

console.log(document);

// Acceder al head 
console.log(document.head);

// Acceder al body
console.log(document.body);

// Acceder a la url
console.log(document.URL);

// Acceder al dominio
console.log(document.domain);

// Acceder a los forms
console.log(document.forms);

// Acceder a los links (anclas)
console.log(document.links);

// Selecionar por clase -- retorna una lista con las coincidencias
let elemento = document.getElementsByClassName("subtitulo");
console.log(elemento);

// Seleccionar por id
let elemento2 = document.getElementById("telefono");
console.log(elemento2);

// Seleccionar con query selector
let elemento3 = document.querySelector(".subtitulo")
console.log(elemento3);

let elemento4 = document.querySelectorAll("#ancla a");
console.log(elemento4);

let elementoNoExiste = document.querySelector("icono");
console.log(elementoNoExiste);

let elementoSeleccionado = document.querySelector("h1");
console.log(elementoSeleccionado.textContent);
console.log(elementoSeleccionado.innerHTML);

console.log(document.querySelector("#ancla").innerHTML);
console.log(document.querySelector("#ancla").outerHTML);

// Cambiar el texto de una etiqueta
elementoSeleccionado.textContent = ("DOM")
elementoSeleccionado.textContent += (" JavaScript")

const contenedor = document.querySelector("#ancla");
contenedor.innerHTML = `
    <h4 class="titulo" >Seccion de anclas:</h4>
    <img src=https://riwi.io/wp-content/uploads/2023/07/favicon.png>
` + contenedor.innerHTML;

console.log(contenedor.style);

const listaDeColores = ["black","red","green","e3e3e3","blue","violet"];
const titulos = ["Feliz Navidad","Te Desea RIWI"]
contenedor.style.background = "black"
contenedor.style.display = "flex"
contenedor.style.flexDirection = "column"
contenedor.style.alignItems = "center"
/**
setTimeout(()=>{
    let colorRandom = Math.floor(Math.random()*5);
    contenedor.style.background = listaDeColores[colorRandom];
},2000)
 */
setInterval( ()=> {
    let colorRandom = Math.floor(Math.random()*5);
    let mensajeRandom = Math.floor(Math.random()*2);

    document.querySelector(".titulo").textContent = titulos[mensajeRandom];

    // contenedor.style.background = listaDeColores[colorRandom];

    contenedor.style.backgroundImage = `linear-gradient(90deg, 
        ${listaDeColores[colorRandom]}, ${listaDeColores[colorRandom-1]})`

},500);



const coder = [
    { nombre: "Manuel", edad: 23, ciudad: "Medellín", nacimiento: "23-08-2000" },
    { nombre: "Valentina", edad: 15, ciudad: "Medellín", nacimiento: "13-06-2008" },
    { nombre: "Tatiana", edad: 20, ciudad: "Medellín", nacimiento: "18-05-2003" },
    { nombre: "Fernando", edad: 30, ciudad: "Medellín", nacimiento: "23-08-2000" },

]

setTimeout(()=>{
    cargarDatos()
},2000)

function cargarDatos() {
    const tbody = document.querySelector("#contenido_tabla")
    coder.sort((a,b)=> a.nombre.localeCompare(b.nombre));

    tbody.innerHTML = ""
    coder.forEach(estudiante => {
        const {nombre,ciudad,edad,nacimiento}=estudiante;
        tbody.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${ciudad}</td>
            <td>${edad}</td>
            <td>${nacimiento}</td>
        </tr>
        `
    });
}