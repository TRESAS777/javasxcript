let estudianteDeHogwarts = {
    Nombre: "Tom Marvolo Riddle", 
    edad: "97", 
    familia: "Tom Riddle, Merope Gaunt" ,
    linaje: "Sangre pura", 
    casa: "", 
    animalPatronus: "",
    cualidades: "Ambición, Determinación, Astucia",
};

let clases_Y_Profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

let linaje = estudianteDeHogwarts.linaje.toLowerCase();
let cualidades = estudianteDeHogwarts.cualidades.toLowerCase();

if (cualidades.includes("ambición")||cualidades.includes("determinación")||cualidades.includes("astucia")&&linaje.includes("sangre pura")) {
    estudianteDeHogwarts.casa = "Slytherin";
} else if (cualidades.includes("valor")||cualidades.includes("fuerza")||cualidades.includes("audacia")&&linaje.includes("sangre pura")||linaje.includes("muggle")||linaje.includes("mestizo")) {
    estudianteDeHogwarts.casa = "Gryffindor";
} else if (cualidades.includes("justicia")||cualidades.includes("lealtad")||cualidades.includes("paciencia")&&linaje.includes("muggle")||linaje.includes("mestizo")) {
    estudianteDeHogwarts.casa = "Hufflepuff";
} else if (cualidades.includes("creatividad")||cualidades.includes("erudición")||cualidades.includes("inteligencia")&&linaje.includes("sangre pura")||linaje.includes("muggle")||linaje.includes("mestizo")) {
    estudianteDeHogwarts.casa = "Ravenclaw";
}

console.log(estudianteDeHogwarts);

let claseTransformaciones = {
    profesor : clases_Y_Profesores.transformaciones,
    horario: "12 PM",
    boggartPresente: true,
    boggartTransformado: false,
    realizarTransformacionRiddikulus: function () {
        if (this.boggartTransformado && this.boggartPresente) {
            console.log("Ya has transformado el boggart con Riddikulus");
        } else {
            console.log("Hay un boggart presente, preparate para transformarlo... En 3... 2... 1...");
            this.boggartPresente = true;
            console.log("Realizando la transformacion del boggart con Riddikulus......");
            this.boggartTransformado = true;
        };
    },
    enfrentarBoggart: function (boggart) {
        console.log(` Forma original del boggart: ${boggart}`);
        this.realizarTransformacionRiddikulus();
        console.log("Transformacion completada... Todos mueren de la risa.");
    },
};

let boggartEjemplo= `"Imaginese lo que mas le temes"`;
boggartEjemplo = {
    transformar : claseTransformaciones.enfrentarBoggart(boggartEjemplo),
}

let defensaContraLasArtesOscuras = {
    profesor: clases_Y_Profesores.defensaContraLasArtesOscuras,
    generarUnAnimalPatronus: function () {
        let animalPatronus = ["León","Aguila","Ciervo","Tejón","Serpiente"];
        this.animalPatronus = animalPatronus[Math.floor(Math.random()*animalPatronus.length)];
    }
};
defensaContraLasArtesOscuras.generarUnAnimalPatronus();
estudianteDeHogwarts.animalPatronus = defensaContraLasArtesOscuras.animalPatronus;

/**
 * Crear función donde aparece un dementor, y si el estudiante tiene ya su animal
patronus detiene el dementor, si no, el estudiante será absorbido, y será llevado a
la enfermería
 */

function apareceDementor() {
    dementor = true;
    if (estudianteDeHogwarts.animalPatronus ) {
        console.log("El dementor ha sido detenido");
        dementor = false;
    } else {
        console.log("No tienes Animal Patronus para defenderte...");
        console.log("Has sido absorbido...");
        console.log("Por suerte te encontraron y te han llevado a la enfermeria");
    }
};
apareceDementor();
console.log("Información del estudiante");
console.log(estudianteDeHogwarts);



































