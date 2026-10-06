function esNumero(numero) {
    return !isNaN(numero.trim()) && numero.trim() != "";
}

function esValorValido(valor) {
    return valor != null && valor.trim() != "";
}

const productos = [];

let idProducto = 1;
let opcion;

do {
    opcion = prompt(
        "MENÚ DE PRODUCTOS\n\n" +
        "1 - Agregar producto\n" +
        "2 - Mostrar\n" +
        "3 - Eliminar\n" +
        "4 - Salir"
    );

    switch (opcion) {

        case "1":
            let nombre = prompt("Ingrese el nombre del producto");

            if (!esValorValido(nombre)) {
                alert("El nombre no puede estar vacío");
                break;
            }

            let precio = prompt("Ingrese el precio del producto");

            if (!esNumero(precio)) {
                alert("El precio debe ser un número");
                break;
            }

            const producto = {
                id: idProducto,
                nombre: nombre.trim(),
                precio: parseFloat(precio)
            };

            productos.push(producto);
            idProducto++;

            alert("Producto agregado correctamente");

            break;

        case "2":
            if (productos.length > 0) {

                productos.sort((a, b) => a.precio - b.precio);

                let listado = "";

                for (let i = 0; i < productos.length; i++) {
                    listado +=
                        "ID: " + productos[i].id +
                        " - Nombre: " + productos[i].nombre +
                        " - Precio: $" + productos[i].precio + "\n";
                }

                alert(listado);

            } else {
                alert("No hay productos cargados");
            }

            break;

        case "3":
            let idEliminar = prompt("Ingrese el ID del producto a eliminar");

            if (!esNumero(idEliminar)) {
                alert("El ID debe ser un número");
                break;
            }

            let indiceEliminar = productos.findIndex(producto => producto.id == parseInt(idEliminar));

            if (indiceEliminar != -1) {
                productos.splice(indiceEliminar, 1);
                alert("Producto eliminado correctamente");
            } else {
                alert("No existe un producto con ese ID");
            }

            break;

        case "4":
            alert("Fin de la simulación");
            break;

        default:
            alert("Opción inválida");
    }

} while (opcion != "4");