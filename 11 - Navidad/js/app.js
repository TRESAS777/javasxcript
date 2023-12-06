const snowContainer = document.querySelector(".snow");
snowContainer.innerHTML = "";

function generarNieve() {
    Array.from({
        length: 510
    }).forEach( (_ , i) => {
        const num = generarnumero(11, 26)
        snowContainer.innerHTML += `<span style="--i:${num}"></span>`
    })
};

function generarnumero(inicio,final) {
    return Math.floor(Math.random() * (final-inicio+1)+inicio)
}

function tiempoParaNavidad() {
    let fechaHoy = new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay();
    console.log(new Date().getDay()+3); 
    let hora = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
    let añoNavidad = 2023;
    let mesNavidad = 11;
    let diaNavidad = 25;
    let horasNavidad = 0;
    let minutosNavidad = 0;
    let segundosNavidad = 0;
    let milisegundosNavidad = 0;
    //
    let añoRestante =  new Date().getFullYear() - añoNavidad ;
    let mesRestante = mesNavidad - new Date().getMonth();
    let diaRestante = diaNavidad - (new Date().getDay()+3);
    let horasRestante = horasNavidad - new Date().getHours();
    let minutosRestante = minutosNavidad - new Date().getMinutes();
    let segundosRestante = segundosNavidad - new Date().getSeconds();
    let milisegundosRestante = milisegundosNavidad - new Date().getMilliseconds();
    //
    let TiempoRestante = `año:${añoRestante}, mes:${mesRestante}, dia:${diaRestante}, hora:${horasRestante}, minutos${minutosRestante}, segundos:${segundosRestante}, milisegundos${milisegundosRestante}`
    console.log(TiempoRestante);
    //
    let Navidad = new Date(2023, 11, 25);
    let copy = new Date();
    copy.setTime(Navidad.getTime());

    let diasrestantes = new Date(2023,11,25,0,0,0,0).getDay()
    console.log(diasrestantes);
    /** 
    let tiempoParaNavidad = copy.setTime(Navidad.getTime())-Date.now() ;
    tiempoParaNavidad = Date() 
    console.log(tiempoParaNavidad);
    */
    console.log(Date.now());
    console.log(Navidad);
    console.log(copy.setTime(Navidad.getTime()));
    console.log(fechaHoy);
    console.log(hora);
}
tiempoParaNavidad()

generarNieve()