const monitorearClima = (temperatura, notificacion) => {

    let mensaje;

    if (temperatura > 30) {
        mensaje = "¡Alerta de calor extremo!";
    } else {
        mensaje = "Clima estable";
    }

    notificacion(mensaje);
}

monitorearClima(24, (mensaje) => {
    alert(mensaje);
});

monitorearClima(20, mensaje => console.log(mensaje));