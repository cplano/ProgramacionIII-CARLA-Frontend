let opcion;

do {
    opcion = parseInt(prompt("Ingrese una opción:\n1. Suma\n2. Resta\n3. Salir"));

    if (isNaN(opcion)) {
        alert("La opción ingresada no es válida");
    } else {
        switch (opcion) {
            case 1:
                let numero1 = parseInt(prompt("Ingrese el primer número"));
                let numero2 = parseInt(prompt("Ingrese el segundo número"));

                if (isNaN(numero1) || isNaN(numero2)) {
                    alert("Debe ingresar dos números válidos");
                } else {
                    alert(`El resultado de la suma es: ${numero1 + numero2}`);
                }

                break;

            case 2:
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

            case 3:
                alert("Gracias por usar la calculadora");
                break;

            default:
                alert("La opción elegida no existe");
                break;
        }
    }
} while (opcion !== 3);