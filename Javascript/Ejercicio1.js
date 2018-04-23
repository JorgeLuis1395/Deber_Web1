var arreglo = [5, 3, 's', 'r', 3, 'b', 'u', true, undefined, null, new Date(), {nombre: 'Jorge'}, [12, 12], 'q',];
let arregloString = [];
var arregloDesecho = [];

function validarNumeroDeStringsEnArreglo(arreglo) {
    arreglo.forEach(function (valor) {
        if ((typeof valor == 'string')) {
            arregloString += valor;
        } else arregloDesecho += valor;
    });
    return arregloString.length;
}

console.log(validarNumeroDeStringsEnArreglo(arreglo));