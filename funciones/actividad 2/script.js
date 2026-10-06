// ACTIVIDAD 2 - FUNCIONES FLECHA Y CALLBACKS

// Funcion flecha (arrow function): otra forma de escribir una funcion.
//   const nombre = (parametros) => { ... }
// Recibe una temperatura y una funcion "notificacion" (un CALLBACK):
// una funcion que se pasa como parametro para que otra la llame despues.
// Asi monitorearClima decide QUE mensaje dar, y el callback decide COMO mostrarlo.
const monitorearClima = (temperatura, notificacion) => {

    let mensaje;

    if (temperatura > 30) {
        mensaje = "¡Alerta de calor extremo!";
    } else {
        mensaje = "Clima estable";
    }

    // Llama al callback que le pasaron, enviandole el mensaje.
    notificacion(mensaje);
}

// Uso 1: el callback muestra el mensaje en una ventana (alert).
monitorearClima(24, (mensaje) => {
    alert(mensaje);
});

// Uso 2: el callback lo muestra en la consola del navegador (F12 -> Console).
// Si la flecha tiene un solo parametro se pueden omitir los parentesis,
// y si tiene una sola instruccion, las llaves.
monitorearClima(20, mensaje => console.log(mensaje));
