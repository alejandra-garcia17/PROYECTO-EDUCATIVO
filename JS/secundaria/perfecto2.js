function perfecto() {
    let numero = parseInt(document.getElementById('numero').value);
    let suma = 0;
    let resultado = document.getElementById('resultado');

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }

    if (suma === numero) {
        resultado.textContent = numero + " es un número perfecto";
    } else {
        resultado.textContent = numero + " no es un número perfecto";
    }
}