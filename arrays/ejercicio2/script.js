// ARRAYS - EJERCICIO 2
// Menu para administrar productos. Cada producto es un OBJETO {id, nombre, precio}
// guardado dentro de un array.

// Devuelve true si el texto es un numero valido y no esta vacio.
function esNumero(numero) {
    return !isNaN(numero.trim()) && numero.trim() != "";
}

// Devuelve true si el valor no es null (Cancelar) y no esta vacio.
function esValorValido(valor) {
    return valor != null && valor.trim() != "";
}

// Array donde se guardan los objetos producto.
const productos = [];

// Contador para asignar un id distinto a cada producto (1, 2, 3...).
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

        case "1": // AGREGAR
            let nombre = prompt("Ingrese el nombre del producto");

            if (!esValorValido(nombre)) {
                alert("El nombre no puede estar vacío");
                break; // Sale del switch sin agregar nada
            }

            let precio = prompt("Ingrese el precio del producto");

            if (!esNumero(precio)) {
                alert("El precio debe ser un número");
                break;
            }

            // Objeto literal: un conjunto de pares propiedad: valor entre llaves.
            const producto = {
                id: idProducto,
                nombre: nombre.trim(),
                precio: parseFloat(precio) // Texto -> numero con decimales
            };

            productos.push(producto); // Lo agrega al final del array
            idProducto++;             // Suma 1 para el proximo producto

            alert("Producto agregado correctamente");

            break;

        case "2": // MOSTRAR (ordenados por precio, de menor a mayor)
            if (productos.length > 0) {

                // sort() ordena el array. Recibe una funcion que compara dos elementos (a y b):
                // si el resultado es negativo, a va antes que b; si es positivo, b va antes.
                // a.precio - b.precio = orden ascendente por precio.
                productos.sort((a, b) => a.precio - b.precio);

                let listado = "";

                // for clasico: i empieza en 0 y avanza hasta el ultimo indice.
                for (let i = 0; i < productos.length; i++) {
                    // "+=" agrega texto al final de lo que ya tenia listado.
                    // productos[i].id = propiedad "id" del producto en la posicion i.
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

        case "3": // ELIMINAR por ID
            let idEliminar = prompt("Ingrese el ID del producto a eliminar");

            if (!esNumero(idEliminar)) {
                alert("El ID debe ser un número");
                break;
            }

            // findIndex() devuelve la posicion del PRIMER elemento que cumple la condicion, o -1.
            // A diferencia de indexOf, permite buscar por una propiedad del objeto.
            let indiceEliminar = productos.findIndex(producto => producto.id == parseInt(idEliminar));

            if (indiceEliminar != -1) {
                productos.splice(indiceEliminar, 1); // Borra 1 elemento en esa posicion
                alert("Producto eliminado correctamente");
            } else {
                alert("No existe un producto con ese ID");
            }

            break;

        case "4": // SALIR
            alert("Fin de la simulación");
            break;

        default:
            alert("Opción inválida");
    }

} while (opcion != "4");
