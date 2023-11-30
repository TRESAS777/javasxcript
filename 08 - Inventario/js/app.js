/**
 * agregar producto
 * eliminar producto
 * modificar producto
 * buscar por un nombre
 * filtrar por precio
 * crear un reporte de inventario - ordenado
 */

function main() {
    let  contraladorWhile = true;
    let opcion = (prompt(`MENU DE OPCIONES:
    1. Agregar producto
    2. Eliminar producto
    2.1. Eliminar producto por indice
    3. Modificar producto
    4. Buscar por un nombre
    5. Filtrar por precio
    6. Crear un reporte de inventario - ordenado
    7. Salir`)) ;

    do {
    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            eliminarProducto();
            break;
        case "2.1":
            eliminarProductoIndice();
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            filtrarPrecio();
            break;
        case "6":
            listarProductos();
            break;
        case "7":
            contraladorWhile = false;
            break;
        default:
        mostrarmensaje();
        return main();
    }
        
    } while (contraladorWhile)

};


function agregarProducto() {
    id= idAuto; 
    nombre=prompt("Ingrese el nombre del producto:"); 
    categoria=prompt("Ingrese la categoria del producto:");
    cantidad=Number(prompt("Ingrese la cantidad del producto:"));
    precio= Number(prompt("Ingrese el precio del producto:")); 
    marca= prompt("Ingrese la marca del producto:");

    if (!isFinite(precio+cantidad)){
        mostrarmensaje("La cantidad y el precio deben ser númericos");
        return;
    }

    const nuevoProducto =  {id,nombre,precio,cantidad,marca,categoria};
    listaDeProductos.unshift(nuevoProducto);
    mostrarmensaje(`El producto ${nombre} fue agregado exitosamente`)
    return main();
};


function eliminarProducto(){
    listarProductosEliminar();
    const nombreEliminar = prompt("Ingrese el nombre del producto a eliminar: ");

    if (!listaDeProductos.some(producto=>producto.nombre.toLowerCase()===nombreEliminar.toLowerCase())){
        mostrarmensaje(`el nombre del producto ingresado no existe en la lista de productos`)
        return;
    }

    listaDeProductos = listaDeProductos.filter((producto)=>producto.nombre.toLowerCase() != nombreEliminar.toLowerCase());
    mostrarmensaje(`Los productos con el nombre ${nombreEliminar} fueron eliminados`)
    return main();
}


function  eliminarProductoIndice() {
    listarProductosEliminar();
    console.log("object");
    let indiceEliminar = Number(prompt("Ingrese el indice del producto a eliminar: "));
    indiceEliminar--;

    if (isNaN(indiceEliminar)) {
        mostrarmensaje("El indice ingresado debe ser numerico");
        return;
    }

    if (indiceEliminar < 0 || indiceEliminar<listarProductos.length-1){
        mostrarmensaje("El indice ingresado no es valido");
        return
    }

    //Guardar el nombre
    const nombreEliminado = listaDeProductos[indiceEliminar] ;
    // Eliminar el producto recortando la lista
    listaDeProductos.splice(indiceEliminar,1);
    mostrarmensaje(`El producto ${nombreEliminado.nombre} ha sido eliminado`);
    return main();

};

function listarProductosEliminar(){
    const fechaHoy = new Date();
    // obtener dia mes año

    const dia = fechaHoy.toDateString();

    let listaString = `REPORTE DE INVENTARIO
    FECHA: ${dia}\n`;

    listaDeProductos.sort ((a,b)=> a.nombre.localeCompare(b.nombre));
    listaDeProductos.forEach((producto, index)=>{
        //desestructurando
        const {nombre,precio,cantidad,marca,categoria} = producto;
        
        // format unit cost
        const precioFormat = precio.toLocaleString("es-CO", {
            currency: "COP",
            style: "currency",
        }); 

        listaString += `
        ${
            index + 1
        }. --Nombre: ${nombre}; Precio: ${precioFormat}; Cantidad: ${cantidad}; Marca: ${marca}; Caregoria: ${categoria}
        
        `;
    });
    mostrarmensaje(listaString);
};


function listarProductos(){
    const fechaHoy = new Date();
    // obtener dia mes año

    const dia = fechaHoy.toDateString();

    let listaString = `REPORTE DE INVENTARIO
    FECHA: ${dia}\n`;

    listaDeProductos.sort ((a,b)=> a.nombre.localeCompare(b.nombre));
    listaDeProductos.forEach((producto, index)=>{
        //desestructurando
        const {nombre,precio,cantidad,marca,categoria} = producto;
        
        // format unit cost
        const precioFormat = precio.toLocaleString("es-CO", {
            currency: "COP",
            style: "currency",
        }); 

        listaString += `
        ${
            index + 1
        }. --Nombre: ${nombre}; Precio: ${precioFormat}; Cantidad: ${cantidad}; Marca: ${marca}; Caregoria: ${categoria}
        
        `;
    });
    mostrarmensaje(listaString);
    return main();
};


// function filtrarPrecio(){
//     let filtrar = String(prompt("Ingrese el rango a filtrar separado por (-)"));
//     filtrar = filtrar.split("-");

//     if (isNaN(Number(filtrar[0])) || isNaN(Number(filtrar[1]))){
//         console.log("Ingrese valores enteros sin puntos ni comas separados por (-)");
//     } else {
//         console.log(`Rango entre: ${filtrar[0]}-${filtrar[1]}`);
//         let buscarPrecio = filtrar.filter ((listaDeProductos)=>listaDeProductos.precio>=filtrar[0] && listaDeProductos.precio<=filtrar[1]);
//         console.log(buscarPrecio);

//         let mostarProductos = ``;
//         buscarPrecio.forEach((listaDeProductos)=> 
//         mostarProductos += `
//         ${
//             index + 1
//         }. --Nombre: ${nombre}; Precio: ${precioFormat}; Cantidad: ${cantidad}; Marca: ${marca}; Caregoria: ${categoria}
        
//         `);
//         console.log(mostarProductos);

//     }
// };


function mostrarmensaje(msg = "Opción no válida") {
    alert(msg);
}
main();

// const idAuto = (() => {
//     let id=0;
//     return ()=>{
//         id++;
//         return (Date.now()+id);
//     }
// })();

// let producto = [];
// let agregar;

// let nombre =  ("Digite el nombre del producto:");
// let cantidad =  ("Ingrese la cantidad a agregar:");
// let precio =  ("A cómo se vende la unidad de este producto:")
// let categoria =  ("Agregue la categoría del producto:")
// const datos = {
//     id: idAuto(),
//     nombre,
//     cantidad,
//     precio,
//     categoria,
// };
// producto.push(datos);
// console.log(producto);
// producto.forEach( (producto, index ) => 
//     { console.log(index,producto);
//         alert(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
//         document.write(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
// });

// do {

//     agregar = confirm("Desea agregar un producto?");
//     console.log(agregar);
//     if (agregar===true){
//         let nombre = prompt ("Digite el nombre del producto:");
//         let cantidad = prompt ("Ingrese la cantidad a agregar:");
//         let precio = prompt ("A cómo se vende la unidad de este producto:")
//         let categoria = prompt ("Agregue la categoría del producto:")
//         const datos = {
//             id: idAuto(),
//             nombre,
//             cantidad,
//             precio,
//             categoria,
//         };
//         producto.push(datos)
//         console.log(producto);
//         producto.forEach( (producto, index ) => 
//         { console.log(index,producto);
//             alert(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
//             document.write(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
//         });
//     } else {
//         break;
//     }
//     agregar = confirm("Desea agregar otro producto?");
// } while (agregar===true);