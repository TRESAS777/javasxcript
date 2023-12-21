// Seleccionando el banner
const banner = document.querySelector(".banner");
const label = document.querySelectorAll(".cont-select label")
const select = document.querySelectorAll(".cont-select select")

// Cada 2,2 segundos el background cambiará
setInterval( function(){
    // Cambia el background
    banner.style.backgroundImage = "url(./img/bg-light.jpg)";
    //cambiar los label para que titilen con el carro
    label.forEach((label) =>{
        label.style.color = "white"
        label.style.textShadow = "0px 0px 20px black"
    })
    select.forEach((select)=>{
        select.style.color = "white"
        select.style.textShadow = "0px 0px 20px black"
    })
    setTimeout( function () {
        //Cambia el background
        banner.style.backgroundImage = "url(./img/bg.jpg)";
        //cambiar los label para que titilen con el carro
        label.forEach((label) =>{
            label.style.color = "black"
            label.style.textShadow = "0px 0px 20px white"
        })
        select.forEach((select)=>{
            select.style.color = "black"
            select.style.textShadow = "0px 0px 20px white"
        })

     },1000 )
},2200)