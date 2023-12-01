let clases_Y_Profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

function obtenerCasaAleatorea () {
    const casaAleatorea = Math.round(Math.random() * 3)
    switch(casaAleatorea) {
        case 0: 
            return (`Gryffindor: "Valor, fuerza, audacia", "Linaje: Mestizo, muggle, Sangre pura" `)
        case 1:
            return (`Hufflepuff: "Justicia, Lealtad, Paciencia" Linaje: Mestizo, muggle`)
        case 2:
            return (`Ravenclaw(“Creatividad, Erudición, Inteligencia" Linaje: Mestizo, muggle, Sangre pura)`)
        case 3:
        return (`Slytherin ("Ambición, Determinación, Astucia" Linaje: "Sangre Pura")`)
    }

};

