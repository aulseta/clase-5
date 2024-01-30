//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaValores = document.querySelectorAll('li');
const $promedio = document.querySelector('#promedio');
const $numeroMinimo = document.querySelector('#valor-minimo');
const $numeroMaximo = document.querySelector('#valor-maximo');
const $numeroFrecuente = document.querySelector('#valor-frecuente');
const $botonCalcular = document.querySelector('#calcular');

let cantidadValores = $listaValores.length;

function calcularPromedio() {
    let sumaValores = 0;
    for (let i = 0; i < cantidadValores; i++) {
        let valor = Number($listaValores[i].innerText);
        sumaValores += valor;
    }
    return sumaValores / cantidadValores;
}

function obtenerValorMaximo() {
    let valorMaximo = 0
    for (let i = 0; i < cantidadValores; i++) {
        let valor = Number($listaValores[i].innerText);
        if (valor > valorMaximo) {
            valorMaximo = valor
        }
    }
    return valorMaximo
}

function obtenerValorMinimo() {
    let valorMinimo = obtenerValorMaximo();
    for (let i = 0; i < cantidadValores; i++) {
        let valor = Number($listaValores[i].innerText);
        if (valor < valorMinimo) {
            valorMinimo = valor;
        }
    }
    return valorMinimo;
}

function obtenerValorFrecuente() {
    let recurrenciaMaxima = 1;
    let recurrenciaActual;
    let numeroRecurrente;

    for (let i = 0; i < cantidadValores; i++) {
        recurrenciaActual = 0;
        let numeroActual = Number($listaValores[i].innerText);
        for (let j = 0; j < cantidadValores; j++) {
            const numeroAComparar = Number($listaValores[j].innerText);
            if (numeroActual === numeroAComparar) {
                recurrenciaActual++;
            }
        }

        if (recurrenciaActual > recurrenciaMaxima) {
            recurrenciaMaxima = recurrenciaActual;
            numeroRecurrente = numeroActual;
        }
    }
   return numeroRecurrente;
}

$botonCalcular.onclick = function () {
    $promedio.innerText = `El promedio es ${calcularPromedio()}`;
    $numeroMaximo.innerText = `El número más grande es ${obtenerValorMaximo()}`;
    $numeroMinimo.innerText = `El número más pequeño es ${obtenerValorMinimo()}`;
    $numeroFrecuente.innerText = `El número que más se repite es ${obtenerValorFrecuente()}`;
}
