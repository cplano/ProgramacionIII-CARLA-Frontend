class Cuenta {

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo += monto;
        alert("Depósito realizado correctamente.");
    }

    extraer(monto) {

        if (monto > this.saldo) {
            alert("Saldo insuficiente.");
        } else {
            this.saldo -= monto;
            alert("Extracción realizada correctamente.");
        }

    }

}

class BancoApp {

    static ejecutar() {

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

                case "1":
                    alert("Saldo actual: $" + cuenta.saldo);
                    break;

                case "2":

                    let deposito = parseFloat(prompt("Ingrese el monto a depositar"));

                    cuenta.depositar(deposito);

                    break;

                case "3":

                    let extraccion = parseFloat(prompt("Ingrese el monto a extraer"));

                    cuenta.extraer(extraccion);

                    break;

                case "4":
                    alert("Gracias por utilizar Home Banking.");
                    break;

                default:
                    alert("Opción inválida.");

            }

        } while (opcion != "4");

    }

}

BancoApp.ejecutar();