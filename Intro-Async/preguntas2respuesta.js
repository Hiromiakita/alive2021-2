// PREGUNTAS PARTE 2
// 1. ¿Qué es una función flecha en javaScript?
// 
// 
// 2. ¿Cuál es la diferencia entre una función flecha y una función convencional?
// 
// 
// 3. Transforma las siguientes funciones a funciones flecha.
// 

console.log('hola');

// Función convencional
// Creación de función

function sumar (num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

function sumar1 (num1, num2) {
    return num1 + num2;
}

// Ejecución de la función

// sumar(10, 20)

// Mostrar en la consola el resultado opc 1:
// console.log(sumar(10, 20));


// Mostrar en la consola el resultado opc 2:
let res = sumar(100, 20);
console.log(res*2);





// Función flecha

let sumar2 = (num1, num2) => {
    let resultado = num1 + num2;
    return resultado;
}

console.log(sumar2(10, 10));

let sumar3 = (num1, num2) => {
    return num1 + num2;
}

// Una función flecha que sólo tiene 
// un return en el cuerpo de la función, 
// no necesita la palabra return ni las llaves
let sumar4 = (num1, num2) => num1 + num2;

console.log(sumar4(30, 50));

let saludar = nombre => 'hola, ' + nombre;

let nombre = 'Cristi';
console.log(saludar(nombre));



// ----------------------------------------------------------

//Función convencional

function transformar (palabra) {
    let palabraTransformada = palabra.toUpperCase();
    return palabraTransformada;
}

// Función flecha

let palabraTransformada = palabra => palabra.toUpperCase();

console.log(palabraTransformada('hola'));

// ----------------------------------------------------------
