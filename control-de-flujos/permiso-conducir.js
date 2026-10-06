// PERMISO PARA CONDUCIR
// Decide si una persona puede ingresar segun su edad (y la de un acompañante).

let nombre = prompt("Ingrese su nombre"); // Solicitar el nombre de la persona.
// Number() convierte el texto que devuelve prompt() en numero (acepta decimales).
let edad = Number(prompt("Ingrese su edad")); // Solicitar la edad de la persona.

// Si es mayor de 18 años (es mayor de edad) puede ingresar sola.
if (edad > 18) {
  alert(`Bienvenido ${nombre}`);
// "&&" = Y: se tienen que cumplir las dos condiciones (entre 16 y 18, sin incluirlos).
} else if (edad > 16 && edad < 18) {
  // Solo puede ingresar con un acompañante mayor de edad.
  let acompaniante = prompt(`${nombre} ingrese el nombre de su acompañante`);
  let edadAcompaniante = Number(prompt(`Ingrese la edad de ${acompaniante}`));

  if (edad < 18 && edadAcompaniante < 18) {
    alert("Lo siento, no puede ingresar, su acompañante es menor de edad");
  } else if (edadAcompaniante > 18) {
    alert(`Bienvenidos ${nombre} y ${acompaniante}`);
  }
} else if (edad < 16) {
  alert("Lo siento, no puede ingresar, es menor de edad");
}

// OJO (para revisar): como se usan ">" y "<" en vez de ">=" y "<=",
// las edades exactas 16 y 18 no entran en ningun caso y no se muestra ningun mensaje.
// Lo mismo pasa si el acompañante tiene exactamente 18.
