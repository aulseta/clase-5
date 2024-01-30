//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $horasClases = document.querySelectorAll('.horas-clase');
const $minutosClases = document.querySelectorAll('.minutos-clase');
const $segundosClases = document.querySelectorAll('.segundos-clase');
const $botonCalcular = document.querySelector('#calcular');
const $resultado = document.querySelector('#resultado');

const SEGUNDOS_POR_MINUTO = 60;
const MINUTOS_POR_HORA = 60;

let segundosTotales;
let minutosTotales;
let horasTotales;

function obtenerSegundos() {
    for(let i = 0; i < $segundosClases.length; i++) {
        segundos += Number($segundosClases[i].value);
    }
    
    if (segundos >= SEGUNDOS_POR_MINUTO) {
        minutos += Math.floor(segundos / 60);
        segundos = segundos % 60;
    }
}

function obtenerMinutos() {
    for (let i = 0; i < $minutosClases.length; i++) {
        minutos += Number($minutosClases[i].value);
    }

    if (minutos >= MINUTOS_POR_HORA) {
        horas += Math.floor(minutos / 60);
        minutos = minutos % 60;
    }
}

function obtenerHoras() {
    for (let i = 0; i < $horasClases; i++) {
        horas += Number($horasClases[i].value);
    }
}

function obtenerTiempoTotal() {
    segundosTotales = 0;
    minutosTotales = 0;
    horasTotales = 0;
    obtenerSegundos();
    obtenerMinutos();
    obtenerHoras();
}

$botonCalcular.onclick = function () {
    obtenerTiempoTotal();
    $resultado.innerText = `El tiempo total de la clases es de ${horasTotales} hora/s, ${minutosTotales} minuto/s y ${segundosTotales} segundo/s`;
}