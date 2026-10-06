// VERIFICADOR DE NOMBRE
// Pide un nombre y saluda, o avisa si se dejo vacio.

let nombreIngresado = prompt("Ingrese su nombre");

// "===" compara valor Y tipo (igualdad estricta). "" es un texto vacio.
if (nombreIngresado === "") {
  alert("No ingresaste un nombre válido");
} else {
  alert(`Hola ${nombreIngresado}`); // Template string: inserta la variable en el texto
}
