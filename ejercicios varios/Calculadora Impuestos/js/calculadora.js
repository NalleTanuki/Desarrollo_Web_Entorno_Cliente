function calcularPrecioFinal(){
    // Obtener los valores ingresados -> .value
    var precioSinIVA = parseFloat(document.getElementById('precioSinIVA').value);
    var iva = parseFloat(document.getElementById('iva').value);

    //Validar que sean numeros
    if(isNaN(precioSinIVA) || isNaN(iva)){
        alert ('Por favor, introduce valores numéricos.');
        return;
    }

    //Calcular el precio final
    var precioConIva = precioSinIVA + (precioSinIVA * (iva / 100));

    //Mostrar el resultado
    document.getElementById('mensaje').innerHTML = 'El precio final con IVA es: ' + precioConIva.toFixed(2) + '€';
}