//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!


const $saludo = document.querySelector('#saludo');
const $nombreUsuario = document.querySelector('#nombre-usuario');
const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario');
const $apellidoUsuario = document.querySelector('#apellido-usuario');
const $edadUsuario = document.querySelector('#edad-usuario');
const $botonIngresar = document.querySelector('#ingresar');

$botonIngresar.onclick = function() {

    $saludo.innerText = `¡Bienvenido ${$nombreUsuario.value}!`;

    document.querySelector('#informacion').innerText = `Tu nombre es ${$nombreUsuario.value} ${$segundoNombreUsuario.value} ${$apellidoUsuario.value} y tienes ${$edadUsuario.value} años.`;

    return false;
}