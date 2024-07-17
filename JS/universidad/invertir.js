
function invertirCadena() {
    const cadena = document.getElementById('cadena').value;
    const cadenaInvertida = cadena.split('').reverse().join('');
    document.getElementById('resultado').textContent = `Cadena invertida: ${cadenaInvertida}`;
}