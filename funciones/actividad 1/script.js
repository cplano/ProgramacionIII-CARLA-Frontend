// ACTIVIDAD 1 - FUNCIONES
// Calcula el precio final de un producto aplicando IVA y descuento.
// Divide el problema en funciones chicas, cada una con una sola tarea.

// Devuelve true si el texto recibido es un numero valido.
// trim() saca los espacios del principio y del final ("  5 " -> "5").
// Se piden dos cosas a la vez (&&): que sea numero Y que no este vacio,
// porque isNaN("") da false (JavaScript toma "" como 0).
function esNumero(numero) {
    return !isNaN(numero.trim()) && numero.trim() != "";
}

// Pide un numero con el mensaje recibido y lo vuelve a pedir hasta que sea valido.
function solicitarNumero(mensaje) {
    let numero;

    // do...while: pide al menos una vez y repite mientras NO sea numero.
    do {
        numero = prompt(mensaje);

        if (!esNumero(numero)) { // "!" niega: "si NO es numero"
            alert("El valor ingresado no es un número");
        }

    } while (!esNumero(numero));

    // parseFloat convierte el texto a numero con decimales ("10.5" -> 10.5).
    return parseFloat(numero);
}

// Recibe el precio y los porcentajes, y devuelve el precio final.
function calcularPrecioFinal(precio, iva, descuento) {
    // Primero se suma el IVA: precio + el porcentaje de iva sobre el precio.
    let precioConIva = precio + (precio * iva / 100);
    // Despues se resta el descuento sobre el precio que ya tiene IVA.
    let precioFinal = precioConIva - (precioConIva * descuento / 100);

    return precioFinal;
}

// ---------- PROGRAMA PRINCIPAL: usa las funciones de arriba ----------
let precio = solicitarNumero("Ingrese el precio del producto");
let iva = solicitarNumero("Ingrese el porcentaje de IVA");
let descuento = solicitarNumero("Ingrese el descuento");

let precioFinal = calcularPrecioFinal(precio, iva, descuento);

// "+" entre un texto y un numero los une (concatenacion).
alert("El precio final del producto es: $" + precioFinal);
