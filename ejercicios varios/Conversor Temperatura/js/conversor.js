function convertir(){
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Compruebo que sea numero
    if(isNaN(celsius)){
        alert('Por favor, ingresa un número.');
        return; //Para que vuelva a pedir numero
    }

    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultado').innerHTML = fahrenheit.toFixed(2) + 'ºF';
}