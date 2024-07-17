function calcularSuma() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    
    if (numero <= 0 || isNaN(numero)) {
        resultado.textContent = 'Por favor, introduce un número entero positivo.';
        return;
    }

    let suma = 0;
    let secuencia = '';

    for (let i = 1; i <= numero; i++) {
        suma += i;
        secuencia += (i === numero) ? `${i}` : `${i} + `;
    }
    
    resultado.textContent = `${secuencia} = ${suma}`;
}
