//Selectores
const tbody = document.querySelector("#tbody_table  ");
const btnAgregar = document.querySelector("#btn-agregar");
const btnOpenDrawer = document.querySelector("#btnOpenDrawer");
const tituloDrawer = document.querySelector("#offcanvasNavbarLabel");
const btnClose = document.querySelector("#btnClose")
let producto;

// Eventos
btnClose.addEventListener("click", () => {
    producto = undefined;
    document.querySelector("#form-agregar").reset();
    /**Modificamos el texto del boton */
    btnAgregar.textContent = "Agregar producto";
    /**Modificamos el titulo del drawer */
    offcanvasNavbarLabel.textContent = "Agregar producto";

})

btnAgregar.addEventListener("click", (event) => {
    //preventdefault previene los eventos que vienen por default
    event.preventDefault();
    agregarProducto();

});

tbody.addEventListener("click", (event)=> {
    console.log("Diste click en tbody ", event);
    // Validamos que al elemneto que se dio clic sea el boton actualizar
    if (event.target.classList.contains("edit-product")){
        // Obtenemos el atributo data-id, que contiene el id del producto
        const id = event.target.getAttribute("data-id");
        // Validamos que si exista un id, sí existe llamamos a la funcion CargarDrawer
        if (id) CargarDrawer(id);
        return;
    };

    //Si el elemento al que le dimos click contiene la clase delete
    if (event.target.classList.contains("delete-product")) {
        const id = event.target.getAttribute("data-id");
        if (id) eliminarProducto(id);
    }
})

// Lista para guardar todos los productos 
let listaProductos = [
    { id: Date.now() ,nombre: "Pastas", precio: "5.0", cantidad: 10, imagen: "", categoria: "carbohidrato", }
];

// funcion para agregar un producto
function agregarProducto() {

    if (!producto) {
    /**Modificamos el texto del boton */
    btnAgregar.textContent = "Agregar producto";
    /**Modificamos el titulo del drawer */
    offcanvasNavbarLabel.textContent = "Agregar producto";
    }

    // selectores de los inputs y al mismp tiempo acceder al valor
    const nombreText = document.querySelector("#nombre_producto").value;
    const cantidadText = document.querySelector("#cantidad").value;
    const precioText = document.querySelector("#precio").value;
    const imageText = document.querySelector("#image").value;
    const categoriaText = document.querySelector("#categoria").value;


    console.log({nombreText, cantidadText, precioText, imageText, categoriaText});
    
    const alerta = document.querySelector("#alert");
    alerta.classList = "alert alert-danger d-none"

    if ([nombreText, cantidadText, precioText, categoriaText].includes("")) {
        alerta.textContent = "Todos los campos son obligatorios.";
        alerta.classList.remove("d-none");
        return;
    }

    if ([Number(cantidadText), Number(precioText)<0]) {
        alerta.textContent = "Los valores deben ser positivos.";
        alerta.classList.remove("d-none");
        return;
    } 

    alerta.classList.add("d-none");

    if (!producto) {
        /**Agregar */
        listaProductos.push( {id: Date.now(), nombre: nombreText, cantidad: cantidadText, precio: precioText, imagen: imageText, categoria: categoriaText});
        alerta.classList.remove("d-none");
        alerta.classList.replace("alert-danger", "alert-success");
        alerta.textContent = `El producto ${nombreText} fue agregado exitosamente.` 
    } else {
        /**Editar */
        producto.nombre = nombreText;
        producto.cantidad = cantidadText;
        producto.precio = precioText;
        producto.imagen = imageText;
        producto.categoria = categoriaText;

        /**Cambiamos el valor de producto a undefined */
        producto = undefined;
        setTimeout(()=> {
            btnClose.click();
        },2000)
        alerta.classList.remove("d-none");
        alerta.classList.replace("alert-danger", "alert-success");
        alerta.textContent = `El producto ${nombreText} fue editado exitosamente.`
    }

    
    
    //La alerta se deja de mostrar despues de 2 segundos
    setTimeout(()=> {
        alerta.classList.add("d-none")
    },2000)
    document.querySelector("#form-agregar").reset();

    mostrarProductos();
}

// funcion para editar producto
function CargarDrawer(id) {
    /**Buscar el producto que tiene el id proporcionado en los parametros */
    producto = listaProductos.find( product => product.id == id);
    // selectores de los inputs y al mismo tiempo acceder al valor
    document.querySelector("#nombre_producto").value = producto.nombre;
    document.querySelector("#cantidad").value = producto.cantidad;
    document.querySelector("#precio").value = producto.precio;
    document.querySelector("#image").value = producto.imagen;
    document.querySelector("#categoria").value = producto.categoria;

// HAcemos un evento click al botón que abre el drawe
    btnOpenDrawer.click();

    /**Modificamos el texto del boton */
    btnAgregar.textContent = "Editar producto";
    /**Modificamos el titulo del drawer */
    offcanvasNavbarLabel.textContent = "Editar producto";

    console.log(producto);

}

// funcion para listar los productos y mostrarlos en la
function mostrarProductos() {
    //Limpiar la tabla
    tbody.innerHTML = "";
    /**Recorro mi lista 
     * donde producto es el item que se esta iterando
     * y index es el indice de la lista de ese item
    */
    listaProductos.forEach( (producto, index) => {
        /**Desestructurar el objeto que se esta recorriendo */
        const { cantidad, categoria, id, imagen, nombre, precio } = producto
        /**Dar formato al precio */
        const precioFormat = Number(precio).toLocaleString( "en-US", {
            style: "currency",
            currency: "USD"
        } );

        const imgDefault = "https://cdn.aarp.net/content/dam/aarp/health/caregiving/2018/03/1140-nutrients-food-loved-ones-caregiving-esp.jpg"

        /**Modifico el HTML del tbody */
        tbody.innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td>
                    <img src="${imgDefault}" alt="Imagen producto" width="40px" height="40px" class="rounded-circle"  >
                </td>
                <td>${nombre}</td>
                <td>${precioFormat}</td>
                <td>${categoria}</td>
                <td>${cantidad}</td>

                <td>
                    <button
                        class="btn btn-primary edit-product"
                        data-id=${id}
                    >
                        Editar 
                        <i class='bx bxs-edit' style='pointer-events: none'></i>
                        <!-- icono Editar -->
                    </button>

                    <button 
                        class="btn btn-danger delete-product" 
                        data-id=${id}
                    >
                        Eliminar 
                        <i class='bx bxs-trash' style='pointer-events: none'></i>
                        <!-- icono Eliminar -->
                    </button>
                </td>
            </tr>
        `;
    });
};

/**Eliminar un producto */
function eliminarProducto(id) {
    listaProductos = listaProductos.filter(producto => producto.id != id);
    mostrarProductos();

}

mostrarProductos();