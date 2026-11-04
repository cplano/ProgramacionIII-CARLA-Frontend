function esNumero(numero) {
    return !isNaN(numero.trim()) && numero.trim() != "";
}

function solicitarNumero(mensaje) {
    let numero;

    do {
        numero = prompt(mensaje);

        if (!esNumero(numero)) {
            alert("El valor ingresado no es un número");
        }

    } while (!esNumero(numero));

    return parseFloat(numero);
}

function calcularPrecioFinal(precio, iva, descuento) {
    let precioConIva = precio + (precio * iva / 100);
    let precioFinal = precioConIva - (precioConIva * descuento / 100);

    return precioFinal;
}

let precio = solicitarNumero("Ingrese el precio del producto");
let iva = solicitarNumero("Ingrese el porcentaje de IVA");
let descuento = solicitarNumero("Ingrese el descuento");

let precioFinal = calcularPrecioFinal(precio, iva, descuento);

alert("El precio final del producto es: $" + precioFinal);