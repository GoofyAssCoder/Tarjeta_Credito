    "use strict"
    /*Verificar si un número de 16 dígitos introducido por el usuario es un número
     válido de tarjeta de crédito.
     */
    
    let tarjetaCredito = prompt("Dame tu número de tarjeta de crédito (para nada sospechoso):");
    
    function verificarNumeroTarjeta(numeroTarj){
    let sum = 0;

    if (numeroTarj.length !== 16) {
        alert("No me vale, introduce un número de tarjeta de 16 dígitos válido");
        return; 
    }
    // Duplico cada segundo dígito, comenzando desde el segundo desde la derecha:
    for (let i = numeroTarj.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroTarj[i]);

        if ((numeroTarj.length - i) % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }

        sum += digito; // Sumo el dígito (modificado o no)
    }

    //Verifico si es divisible por 10:
    if (sum % 10 === 0) {
        alert("El número de tarjeta es válido :)");
    } else {
        alert("El número de tarjeta no es válido :(");
    }
    }

    verificarNumeroTarjeta(tarjetaCredito);
    
    //tarjetaCredito = tarjetaCredito.replace(/\s+/g, ''); (para los espacios)

    




