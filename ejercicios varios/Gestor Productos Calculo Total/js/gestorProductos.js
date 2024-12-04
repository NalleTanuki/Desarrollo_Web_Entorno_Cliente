// Array para almacenar los productos
var productos = [];

// Función para agregar un producto
function agregarProducto() {
    // Capturar los valores de los inputs
    var nombre = document.getElementById('nombreProducto').value.trim();
    var precio = parseFloat(document.getElementById('precioProducto').value);

    // Validación: Ambos campos deben tener contenido válido
    if (nombre === '' || isNaN(precio) || precio <= 0) {
        alert('Por favor, ingresa un nombre válido y un precio mayor a 0.');
        return;
    }

    // Agregar el producto al array
    productos.push({ nombre: nombre, precio: precio });

    // Limpiar los campos del formulario
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioProducto').value = '';

    // Mostrar la lista actualizada
    mostrarProductos();
}

// Función para mostrar los productos en la lista
function mostrarProductos() {
    var lista = document.getElementById('listaProductos');
    lista.innerHTML = ''; // Limpiar la lista actual

    productos.forEach(function(producto, index) {
        var li = document.createElement('li');
        li.textContent = producto.nombre + ' - ' + producto.precio.toFixed(2) + ' €';
        lista.appendChild(li);
    });
}

// Función para calcular el precio total
function calcularTotal() {
    if (productos.length === 0) {
        alert('No hay productos en la lista.');
        return;
    }

    var total = productos.reduce(function(suma, producto) {
        return suma + producto.precio;
    }, 0);

    document.getElementById('precioTotal').textContent = 'Total: ' + total.toFixed(2) + ' €';
}
