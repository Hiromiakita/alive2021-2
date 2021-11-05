let traerUnPokemon = () => {
    console.log('trayendo datos');

    fetch('https://pokeapi.co/api/v2/pokemon/5')
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


let traerArtistas = () => {

    fetch("https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
        .then(respuesta => respuesta.json())
        .then(info => {
            console.log(info);
            console.log(info.artists[0].strArtist);
            console.log(info.artists[0].strArtistBanner);

            document.getElementById("nArtista").innerText = info.artists[0].strArtist;
            document.getElementById("iArtista").src = info.artists[0].strArtistBanner; 
    })
}


let mostrarBanderas = () => {

    fetch("https://restcountries.com/v3.1/all").then(info => info.json()).then(infoTransformada => {

        console.log(infoTransformada);

        for(let i = 0; i < 3; i++ ) {
           
            let p = document.createElement("p");
            let continente = document.createElement("p");
            let img = document.createElement("img");

            let banderas = document.getElementById("banderas");


            banderas.append(p, continente, img);

            p.innerText = infoTransformada[i].name.official;
            continente.innerText = infoTransformada[i].continents[0];
            img.src = infoTransformada[i].flags.png;
        }

    })
}

