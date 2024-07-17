function mostrarNumeros() {
    let numerosStr, resultado, numerosArray, pares, impares
    numerosStr = document.getElementById('numeros').value;
    numerosArray = numerosStr.split(',').map(num => parseInt(num.trim()));
    resultado = document.getElementById('resultado');
    
    pares = [];
    impares = [];

    for (let numero of numerosArray) {
        if (isNaN(numero)) {
            resultado.innerHTML = '<p>Por favor, asegúrate de que todos los valores ingresados sean números enteros.</p>';
            return;
        }

        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }

    resultado.innerHTML = `
        <p><strong>Números Pares:</strong> ${pares.join(', ')}</p>
        <p><strong>Números Impares:</strong> ${impares.join(', ')}</p>
    `;
}