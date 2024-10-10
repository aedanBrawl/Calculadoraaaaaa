let resultado = document.getElementById('resultado');

function agregarNumero(numero) {
    resultado.value += numero;
}

function limpiar() {
    resultado.value = '';
}

function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch (error) {
        resultado.value = 'Error';
    }
}
