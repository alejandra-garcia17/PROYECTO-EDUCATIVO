//MANEJO DE ARREGLOS

document.getElementById('numerosForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numerosInput = document.getElementById('numerosInput').value.trim();
    const numeros = numerosInput.split(',').map(num => parseInt(num.trim(), 10));
    
    const primos = numeros.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = primos.length > 0 ?
      `<p>Números primos encontrados: ${primos.join(', ')}</p>` :
      `<p>No se encontraron números primos en la lista proporcionada.</p>`;
});
