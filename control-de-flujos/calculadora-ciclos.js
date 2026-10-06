// CALCULADORA CON CICLOS
// Muestra un menu repetidamente hasta que el usuario elige "3. Salir".

// Se declara afuera del ciclo para poder usarla en la condicion del while (al final).
let opcion;

// do...while: ejecuta el bloque AL MENOS UNA VEZ y despues repite
// mientras la condicion del final sea verdadera.
do {
    // prompt() muestra una ventana para escribir y devuelve lo escrito como TEXTO.
    // parseInt() convierte ese texto a numero entero ("2" -> 2). Si no puede, devuelve NaN.
    // "\n" es un salto de linea dentro del texto.
    opcion = parseInt(prompt("Ingrese una opción:\n1. Suma\n2. Resta\n3. Salir"));

    // isNaN() = "is Not a Number": true si el valor NO es un numero valido.
    if (isNaN(opcion)) {
        alert("La opción ingresada no es válida");
    } else {
        // switch: compara "opcion" con cada "case" y ejecuta el que coincide.
        switch (opcion) {
            case 1: // SUMA
                let numero1 = parseInt(prompt("Ingrese el primer número"));
                let numero2 = parseInt(prompt("Ingrese el segundo número"));

                // "||" = O: alcanza con que uno de los dos no sea numero.
                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("Debe ingresar dos números válidos");
                } else {
                    // Template string (comillas invertidas ``): ${...} inserta el valor dentro del texto.
                    alert(`El resultado de la suma es: ${numero1 + numero2}`);
                }

                break; // Sale del switch (sin break seguiria ejecutando el case siguiente).

            case 2: // RESTA (el primero tiene que ser mayor que el segundo)
                let numero3 = parseInt(prompt("Ingrese el primer número"));
                let numero4 = parseInt(prompt("Ingrese el segundo número"));

                if (isNaN(numero3) || isNaN(numero4)) {
                    alert("Debe ingresar dos números válidos");
                } else if (numero3 <= numero4) {
                    alert("El primer número debe ser estrictamente mayor al segundo");
                } else {
                    alert(`El resultado de la resta es: ${numero3 - numero4}`);
                }

                break;

            case 3: // SALIR
                alert("Gracias por usar la calculadora");
                break;

            default: // Cualquier otro numero que no sea 1, 2 o 3
                alert("La opción elegida no existe");
                break;
        }
    }
// "!==" = distinto (estricto). El ciclo se repite mientras la opcion no sea 3.
} while (opcion !== 3);
