let tiempo = 0;
let intervalo;

function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            tiempo++;
            document.getElementById('tiempo').textContent = tiempo;
        }, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    tiempo = 0;
    document.getElementById('tiempo').textContent = tiempo;
}
