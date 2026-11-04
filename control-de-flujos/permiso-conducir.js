// Permiso para conducir
let nombre = prompt("Ingrese su nombre"); //Solicitar el nombre de la persona.
let edad = Number(prompt("Ingrese su edad")); //Solicitar la edad de la persona.

// Si es mayor de 18 años (es mayor de edad) mostrar un mensaje 
if (edad > 18) { 
  alert(`Bienvenido ${nombre}`);
} else if (edad > 16 && edad < 18) {
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