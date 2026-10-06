// ARRAYS - EJERCICIO 1
// Menu para administrar una lista de nombres: agregar, eliminar, buscar y mostrar.

// Devuelve true si el valor no es null y no esta vacio.
// prompt() devuelve null si el usuario toca "Cancelar".
// "!=" = distinto. trim() saca los espacios de los extremos.
function esValorValido(valor) {
    return valor != null && valor.trim() != "";
}

// Array (arreglo) vacio donde se guardan los nombres.
// Es "const" porque la variable siempre apunta al mismo array,
// pero igual se le pueden agregar y sacar elementos.
const personas = [];

let opcion;

do {
    // El "+" une varios textos en uno solo para armar el menu.
    opcion = prompt(
        "MENÚ DE PERSONAS\n\n" +
        "1 - Agregar\n" +
        "2 - Eliminar\n" +
        "3 - Buscar\n" +
        "4 - Mostrar\n" +
        "5 - Salir"
    );

    // Aca los case son TEXTOS ("1") porque prompt devuelve texto y no se convierte a numero.
    switch (opcion) {

        case "1": // AGREGAR
            let nombreAgregar = prompt("Ingrese el nombre de una persona");

            if (esValorValido(nombreAgregar)) {
                // push() agrega un elemento AL FINAL del array.
                personas.push(nombreAgregar.trim());
                alert("Persona agregada correctamente");
            } else {
                alert("El nombre no puede estar vacío");
            }

            break;

        case "2": // ELIMINAR
            let nombreEliminar = prompt("Ingrese el nombre de la persona a eliminar");
            // indexOf() devuelve la POSICION del elemento (empieza en 0), o -1 si no esta.
            let indiceEliminar = personas.indexOf(nombreEliminar);

            if (indiceEliminar != -1) {
                // splice(posicion, cantidad) borra "cantidad" elementos desde "posicion".
                personas.splice(indiceEliminar, 1);
                alert("Persona eliminada correctamente");
            } else {
                alert("La persona no existe");
            }

            break;

        case "3": // BUSCAR
            let nombreBuscar = prompt("Ingrese el nombre de la persona a buscar");
            let indiceBuscar = personas.indexOf(nombreBuscar);

            if (indiceBuscar != -1) {
                alert("OK");
            } else {
                alert("La persona no existe");
            }

            break;

        case "4": // MOSTRAR
            // length = cantidad de elementos del array.
            if (personas.length > 0) {
                // join("\n") une todos los elementos en un texto, uno por linea.
                alert(personas.join("\n"));
            } else {
                alert("No hay personas cargadas");
            }

            break;

        case "5": // SALIR
            alert("Fin de la simulación");
            break;

        default:
            alert("Opción inválida");
    }

} while (opcion != "5"); // Repite hasta que elija "5"
