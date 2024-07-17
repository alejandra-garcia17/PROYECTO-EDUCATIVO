function calcularFactorial() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    
    let factorial = 1;
    let secuencia = '';
    
    for (let i = numero; i > 0; i--) {
        factorial *= i;
        secuencia += (i === 1) ? `${i}` : `${i} * `;
    }
    
    resultado.textContent = `${secuencia} = ${factorial}`;
}
