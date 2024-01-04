const agregarAlCarrito = document.querySelectorAll(".agregar-carrito");
const ProductosCarrito = [];

agregarAlCarrito.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault()
        agregarProducto(element)
        mostrarProductos()
    })
});

function agregarProducto(element) {
    
    const tarjeta = (element.parentNode.parentNode);
    const id = element.getAttribute("data-id")
    
    const producto = ProductosCarrito.find( (producto) => { 
        return producto.id == id 
    })
    if (producto){
        producto.cantidad = producto.cantidad+1
    }    else {
        let imagen = tarjeta.querySelector("img");
        let nombre = tarjeta.querySelector(".card .info-card h4");
        let precio = tarjeta.querySelector(".card .info-card span")
        let cantidad = 1
        imagen = imagen.getAttribute("src")
        nombre = nombre.innerText
        precio = precio.innerText

        ProductosCarrito.push({id,nombre,imagen,precio,cantidad})
    }
}

function mostrarProductos() {
    const tbody = document.querySelector("#lista-carrito tbody");
    tbody.innerHTML = ""
    ProductosCarrito.forEach((producto)=>{
        tbody.innerHTML +=
        `
        <td><img src="${producto.imagen}" alt="" style="height:100px"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td><button>Eliminar Producto</button></td> 
        `
    })
}