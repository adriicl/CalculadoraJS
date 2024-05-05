document.addEventListener("DOMContentLoaded", function(){
    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll(".boton");
    const operadores = document.querySelectorAll(".operador");
    const botonRaizCuadrada = document.getElementById("botonRaizCuadrada");
    const botonLog = document.getElementById("botonLog");

    let entradaActual = "";
    let primerOperando = "";
    let operador = "";
    let resultado = "";

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.value === "C") {
                borrar();
            } else if (boton.value === "=") {
                calcular();
            } else if (boton.value === ".") {
                if (!entradaActual.includes(".")) {
                    entradaActual += boton.value;
                }
                actualizarPantalla(entradaActual);
            } else {
                entradaActual += boton.value;
                actualizarPantalla(entradaActual);
            }
        });
    });

    operadores.forEach(operadorBtn => {
        operadorBtn.addEventListener("click", () => {
            if (entradaActual !== "") {
                primerOperando = entradaActual;
                operador = operadorBtn.value;
                entradaActual = "";
            }
        });
    });

    botonRaizCuadrada.addEventListener("click", () => {
        if (entradaActual !== "") {
            primerOperando = entradaActual;
            operador = "√";
            entradaActual = "";
            calcular();
        }
    });

    botonLog.addEventListener("click", () => {
        if (entradaActual !== "") {
            primerOperando = entradaActual;
            operador = "log";
            entradaActual = "";
            calcular();
        }
    });

    function actualizarPantalla(valor) {
        pantalla.value = valor;
    }

    function borrar() {
        entradaActual = "";
        primerOperando = "";
        operador = "";
        resultado = "";
        actualizarPantalla("");
    }

    function calcular() {
        if (operador !== "" && entradaActual !== "") {
            const segundoOperando = parseFloat(entradaActual);
            switch (operador) {
                case "+":
                    resultado = parseFloat(primerOperando) + segundoOperando;
                    break;
                case "-":
                    resultado = parseFloat(primerOperando) - segundoOperando;
                    break;
                case "*":
                    resultado = parseFloat(primerOperando) * segundoOperando;
                    break;
                case "/":
                    resultado = parseFloat(primerOperando) / segundoOperando;
                    break;
                case "^":
                    resultado = Math.pow(parseFloat(primerOperando), segundoOperando);
                    break;
                case "√":
                    resultado = Math.sqrt(parseFloat(primerOperando));
                    break;
                case "log":
                    resultado = Math.log(parseFloat(primerOperando));
                    break;
                default:
                    break;
            }
            actualizarPantalla(resultado);
            entradaActual = resultado.toString();
            primerOperando = "";
            operador = "";
        }
    }
});



