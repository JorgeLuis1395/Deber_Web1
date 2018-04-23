//var cantidad_generadores;
function generadores(num_generadores, megawatts) {
    while (num_generadores < 4)
    {
        num_generadores++;
        if( num_generadores <= 4 && (num_generadores%2)==0){

            console.log('Generador # '+ num_generadores+' está apagado.')
        } else {
            megawatts = megawatts + 62;
            console.log('Generador # ' + num_generadores + ' está prendido ' + ',añadiendo 62 MW para total de ' + megawatts + ' MW');
        }
    }

    for (num_generadores=5; num_generadores <= 19; num_generadores++)
    {
        if( num_generadores < 19 && (num_generadores%2)==0){

            console.log('Generador # '+ num_generadores+' está apagado.')
        } else {
            megawatts = megawatts + 124;
            console.log('Generador # ' + num_generadores + ' está prendido ' + 'añadiendo 124 MW para total de ' + megawatts + ' MW');
        }
    }
}

(generadores(0,0));


