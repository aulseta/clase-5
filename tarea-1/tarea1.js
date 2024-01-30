//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $salarioAnual = document.querySelector('#salario-anual');
const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
  const $salarioMensual = document.querySelector('#salario-mensual').value = Number($salarioAnual.value) / 12;
  return false
}