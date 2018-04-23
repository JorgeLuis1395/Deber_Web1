
function poblacionOsos(osos_iniciales, mes) {
    for (mes; mes <= 12; mes++) {
        osos_iniciales= osos_iniciales*4;
        //console.log(osos_iniciales);
        if (osos_iniciales >= 10000)
        {
            osos_iniciales = osos_iniciales/2;
            console.log('Removiendo '+osos_iniciales+' osos de anteojos de la población')
            console.log('Van a existir '+osos_iniciales+' osos de anteojos despues del mes '+ mes)
        }
        else
        {
            console.log('Van a existir '+osos_iniciales+' osos de anteojos despues del mes '+ mes)
        }
    }
}
poblacionOsos(16,1);

