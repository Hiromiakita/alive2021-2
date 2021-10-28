let traerUnPokemon = () => {
    console.log('trayendo datos');

    fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(info => info.json())
        .then(infoJson => console.log(infoJson));
}

let traerUnPersonajeSW = () => {
    console.log("trayendo info de star wars");

    fetch('https://swapi.dev/api/people/1/')
        .then(info => info.json())
        .then(infoTransformada => {
            console.log(infoTransformada);
            console.log(infoTransformada.name);
            console.log(infoTransformada.birth_year);

            document.getElementById("nombre").innerText = infoTransformada.name;
            document.getElementById("anio").innerText = infoTransformada.birth_year;
        });
}

let traerPaises = () => {
    console.log('trayendo países');

    fetch('https://restcountries.com/v3.1/all')
        .then(info => info.json())
        .then(infoJson => console.log(infoJson));
}

let traerPokemones = () => {
    console.log('trayendo pokemones');

    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
        .then(info => info.json())
        .then(infoTransformada => {
            console.log(infoTransformada);
            // console.log(infoTransformada.results[0].name)
            // console.log(infoTransformada.results[1].name)
            // console.log(infoTransformada.results[2].name)
            // console.log(infoTransformada.results[3].name)
            // console.log(infoTransformada.results[4].name)

            let seccion = document.getElementById("pokemones");
            for(let i = 0; i < infoTransformada.results.length; i++) {
                console.log(infoTransformada.results[i].name);

                //crear una etiqueta p por cada pokemon
                let parrafo = document.createElement("p");
                seccion.append(parrafo);
                parrafo.innerText = infoTransformada.results[i].name;
            }
        })
}

