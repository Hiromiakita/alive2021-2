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
        .then(infoTransformada => console.log(infoTransformada));
}

let traerPaises = () => {
    console.log('trayendo países');

    fetch('https://restcountries.com/v3.1/all')
        .then(info => info.json())
        .then(infoJson => console.log(infoJson));
}