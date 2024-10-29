function mostrarDatos(){
    // Recogemos el valor de 'nombre' con una variable
    var nombre = document.getElementById('nombre').value;

    // Recogemos el valor de 'apellidos' con una variable
    var apellidos = document.getElementById('apellidos').value;

    // Recogemos el valor de 'edad' con una variable
    var edad = document.getElementById('edad').value;

    /* Valido que el numero introducido sea valido
        - que no sea un caracter
        - que no sea menor que 0
    */
    if(isNaN(edad) || edad < 0){
        alert ("El valor introducido en el campo 'Edad' no es válido.");
        return;
    }


    // Printeo el mensaje que debe salir
    document.getElementById('mensaje').innerHTML = 'Nombre Completo: ' + nombre + ' ' + apellidos + ', Edad: ' + edad + ' años.';
}