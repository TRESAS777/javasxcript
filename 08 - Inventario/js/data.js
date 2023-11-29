const idAuto = (() => {
    let id=0;
    return ()=>{
        id++;
        return (Date.now()+id);
    }
})();


// let producto = [];
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

do {
    let agregar = confirm("Desea agregar un producto?");
     console.log(agregar);
    if (agregar===true){
        let nombre = prompt ("Digite el nombre del producto:");
        let cantidad = prompt ("Ingrese la cantidad a agregar:");
        let precio = prompt ("A cómo se vende la unidad de este producto:")
        let categoria = prompt ("Agregue la categoría del producto:")
        const datos = {
            id: idAuto(),
            nombre,
            cantidad,
            precio,
            categoria,
        };
        producto.push(datos)
        console.log(producto);
        producto.forEach( (producto, index ) => 
        { console.log(index,producto);
            alert(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
            document.write(`${index} - Nombre: ${producto.nombre}; Cantidad: ${producto.cantidad}; Precio: ${producto.precio}\n`);
        });
    } else {
        break;
    }
    agregar = confirm("Desea agregar otro producto?");
} while (agregar===true);