/*
Nombre: Juan Alegría
Código: 202011282
*/

/* Punto 1.
¿Qué es un closure? Proporcione un ejemplo.

R// Un closure es un objeto que combina una función y el entorno en el que fue creada,
incluyendo las variables accesibles en el momento de su creación. De este modo, se permite
a funciones acceder a un scope externo. Un ejemplo de closure es el siguiente:
*/
function createCounter(x) {
    return function (y) {
        return x + y;
    };
}
const sum5 = createCounter(5);
console.log(sum5(3)); // 8


/* Punto 2.
¿Qué es hoisting ? Proporcione un ejemplo.

R// Hoisting es un comportamiento en JavaScript en el que las declaraciones de variables
y funciones se "levantan" al inicio del scope en el que se encuentran. Esto significa que
las declaraciones de variables y funciones se pueden usar antes de ser declaradas en el código.
Un ejemplo de hoisting es el siguiente:
*/
console.log(variable); // undefined
var variable = "valor";


/* Punto 3.
Explique los contextos en los cuales se usa el objeto this. Proporcione un ejemplo en código para cada contexto.

R// El objeto this en JavaScript es una referencia al objeto al que está asociado la función que está siendo
ejecutada. Hay tres contextos en los que se puede usar this:
*/

// 1. En un contexto global: this se refiere al objeto window en un navegador o al objeto global en un entorno de Node.js. Ejemplo:
console.log(this); // Window {...} (en un navegador) o Global {...} (en Node.js)

// 2. En un objeto: this se refiere al objeto al que pertenece la función que está siendo ejecutada. Ejemplo:
const obj = {
    propiedad: "valor",
    metodo: function () {
        console.log(this); // { propiedad: "valor", metodo: [Function: metodo] }
    }
};
obj.metodo();

// 3. Con call, apply o bind: this se puede especificar explícitamente. Ejemplo:
const objeto = {
    propiedad: "valor"
};
const metodo = function () {
    console.log(this); // { propiedad: "valor" }
};
metodo.call(objeto);


/*
Punto 4.
El máximo común divisor(mcd) de dos números a, b es:
- a, si a y b son iguales, o
- el mcd de c y d, donde c es el menor entre a y b, y d es la diferencia entre el mayor y el menor.

Implemente una función arrow, de una sola línea, recursiva, que calcule el mcd de dos números dados.
*/

// La siguiente es una implementación de una función arrow, de una sola línea, recursiva, que calcule el mcd de dos números dados:
const mcd = (a, b) => (b === 0) ? a : mcd(b, a % b);
