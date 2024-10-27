function mostrarMensaje(idioma){
    // Recogemos el id del parrafo para mostrar el resultado
    const mensaje = document.getElementById('mensaje');

    // Un "if" para ver la opcion elegida por el usuario
    if(idioma === 'es'){
        mensaje.textContent = 'Bienvenido a nuestra página web';
    } else if (idioma === 'en') {
        mensaje.textContent = 'Welcome to our website';
    } else { //if (idioma === 'fr')
        mensaje.textContent = 'Bienvenue sur notre site internet';
    }
}