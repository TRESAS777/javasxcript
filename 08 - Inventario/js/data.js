const idAuto = (() => {
    let id=0;
    return ()=>{
        id++;
        return (Date.now()+id);
    }
})();

let listaDeProductos = [
    {id: idAuto, nombre:"celular", categoria:"tecnología",cantidad:5,precio: 50000000, marca: "Nokia"},
    {id: idAuto, nombre:"Arroz", categoria:"comida",cantidad:5,precio: 2300, marca: "Roa"},
    {id: idAuto, nombre:"Medias", categoria:"ropa",cantidad:5,precio: 25000, marca: "Adidas"},
]