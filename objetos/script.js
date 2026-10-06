// OBJETOS - HOME BANKING
// Usa CLASES: un "molde" para crear objetos que tienen datos (propiedades)
// y acciones (metodos).

// Clase Cuenta: representa una cuenta bancaria.
class Cuenta {

    // El constructor se ejecuta automaticamente al hacer "new Cuenta(...)".
    // Recibe los datos iniciales y los guarda en el objeto.
    // "this" = el objeto que se esta creando (esta cuenta en particular).
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Metodo: suma el monto al saldo.
    // "+=" es lo mismo que: this.saldo = this.saldo + monto
    depositar(monto) {
        this.saldo += monto;
        alert("Depósito realizado correctamente.");
    }

    // Metodo: resta el monto solo si hay saldo suficiente.
    extraer(monto) {

        if (monto > this.saldo) {
            alert("Saldo insuficiente.");
        } else {
            this.saldo -= monto; // this.saldo = this.saldo - monto
            alert("Extracción realizada correctamente.");
        }

    }

}

// Clase BancoApp: contiene el menu del programa.
class BancoApp {

    // "static" = el metodo pertenece a la CLASE, no a un objeto.
    // Por eso se llama BancoApp.ejecutar() sin hacer "new BancoApp()".
    static ejecutar() {

        // Crea un objeto (instancia) de la clase Cuenta con titular y saldo inicial.
        let cuenta = new Cuenta("Juan Pérez", 10000);

        let opcion;

        do {

            opcion = prompt(
                "HOME BANKING\n\n" +
                "1 - Ver saldo\n" +
                "2 - Depositar\n" +
                "3 - Extraer\n" +
                "4 - Salir"
            );

            switch (opcion) {

                case "1": // VER SALDO: se lee la propiedad saldo del objeto
                    alert("Saldo actual: $" + cuenta.saldo);
                    break;

                case "2": // DEPOSITAR: se llama al metodo depositar del objeto

                    let deposito = parseFloat(prompt("Ingrese el monto a depositar"));

                    cuenta.depositar(deposito);

                    break;

                case "3": // EXTRAER

                    let extraccion = parseFloat(prompt("Ingrese el monto a extraer"));

                    cuenta.extraer(extraccion);

                    break;

                case "4": // SALIR
                    alert("Gracias por utilizar Home Banking.");
                    break;

                default:
                    alert("Opción inválida.");

            }

        } while (opcion != "4");

    }

}

// Punto de inicio: arranca el programa.
BancoApp.ejecutar();
