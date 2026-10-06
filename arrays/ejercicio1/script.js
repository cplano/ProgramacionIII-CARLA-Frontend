function esValorValido(valor) {
    return valor != null && valor.trim() != "";
}

const personas = [];

let opcion;

do {
    opcion = prompt(
        "MENÚ DE PERSONAS\n\n" +
        "1 - Agregar\n" +
        "2 - Eliminar\n" +
        "3 - Buscar\n" +
        "4 - Mostrar\n" +
        "5 - Salir"
    );

    switch (opcion) {

        case "1":
            let nombreAgregar = prompt("Ingrese el nombre de una persona");

            if (esValorValido(nombreAgregar)) {
                personas.push(nombreAgregar.trim());
                alert("Persona agregada correctamente");
            } else {
                alert("El nombre no puede estar vacío");
            }

            break;

        case "2":
            let nombreEliminar = prompt("Ingrese el nombre de la persona a eliminar");
            let indiceEliminar = personas.indexOf(nombreEliminar);

            if (indiceEliminar != -1) {
                personas.splice(indiceEliminar, 1);
                alert("Persona eliminada correctamente");
            } else {
                alert("La persona no existe");
            }

            break;

        case "3":
            let nombreBuscar = prompt("Ingrese el nombre de la persona a buscar");
            let indiceBuscar = personas.indexOf(nombreBuscar);

            if (indiceBuscar != -1) {
                alert("OK");
            } else {
                alert("La persona no existe");
            }

            break;

        case "4":
            if (personas.length > 0) {
                alert(personas.join("\n"));
            } else {
                alert("No hay personas cargadas");
            }

            break;

        case "5":
            alert("Fin de la simulación");
            break;

        default:
            alert("Opción inválida");
    }

} while (opcion != "5");