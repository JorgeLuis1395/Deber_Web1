var estado
function generadores(num_generadores, megawatts, estado_pares, estado_impares) {
    while (num_generadores < 4) {
        num_generadores++;
        if (num_generadores <= 4 && (num_generadores % 2) == 0) {
            estado = estado_pares
            if (estado == "Encendido") {
                console.log('Generador # ' + num_generadores + ' está  ' + estado + ' añadiendo 62 MW para total de ' + megawatts + ' MW');
            } else{
                console.log('Generador # ' + num_generadores + ' está ' + estado)
            }
        } else {
            megawatts = megawatts + 62;
            estado=estado_impares;
            if (estado=="Encendido")
            {
                console.log('Generador # ' + num_generadores + ' está  '+ estado  + ' añadiendo 62 MW para total de ' + megawatts + ' MW');
            }
            //console.log('Generador # ' + num_generadores + ' está ' + estado)
        }
    }

    for (num_generadores = 5; num_generadores <= 19; num_generadores++) {
        if (num_generadores < 19 && (num_generadores % 2) == 0) {
            estado=estado_pares;
            if (estado=="Encendido")
            {
                console.log('Generador # ' + num_generadores + ' está '+ estado + ' añadiendo 124 MW para total de ' + megawatts + ' MW');
            }
            console.log('Generador # ' + num_generadores + ' está ' + estado)
        } else {
            megawatts = megawatts + 124;
            estado=estado_impares;
            if (estado=="Encendido")
            {
                console.log('Generador # ' + num_generadores + ' está '+ estado + ' añadiendo 124 MW para total de ' + megawatts + ' MW');
            }
            console.log('Generador # ' + num_generadores + ' está ' + estado)
        }
    }
}

(generadores(0, 0,  'Apagado', 'Encendido', ));


